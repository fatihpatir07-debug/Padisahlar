const CACHE_NAME = 'ottoman-sultans-v1';
const ASSETS = [
    'index.html',
    'style.css',
    'app.js',
    'data.js',
    'logo.png',
    'bg.png',
    'https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&family=Inter:wght@300;400;600&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
