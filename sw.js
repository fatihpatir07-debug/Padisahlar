const cacheName = 'osmanli-v1';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.json',
  './manifest.json'
];

// Yükleme sırasında dosyaları önbelleğe al
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// İnternet yoksa önbellekten getir
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
