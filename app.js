document.addEventListener('DOMContentLoaded', () => {
    const sultanGrid = document.getElementById('sultan-grid');
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close-btn');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let allSultans = [];

    // 1. Verileri Çek
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            allSultans = data;
            displaySultans(allSultans);
        });

    // 2. Padişahları Ekrana Bas
    function displaySultans(sultans) {
        sultanGrid.innerHTML = '';
        sultans.forEach(sultan => {
            const card = document.createElement('div');
            card.classList.add('sultan-card');
            card.style.borderBottomColor = sultan.renk;
            
            card.innerHTML = `
                <div class="number">${sultan.id}</div>
                <div class="symbol" style="color: ${sultan.renk}">${sultan.sembol}</div>
                <div class="name">${sultan.ad}</div>
            `;

            card.addEventListener('click', () => showDetails(sultan));
            sultanGrid.appendChild(card);
        });
    }

    // 3. Detay Penceresini Aç
    function showDetails(sultan) {
        modalBody.innerHTML = `
            <h2 style="color:${sultan.renk}">${sultan.ad}</h2>
            <p><strong>Unvan:</strong> ${sultan.unvan}</p>
            <p><strong>Saltanat:</strong> ${sultan.saltanat}</p>
            <p><em>"${sultan.ozet}"</em></p>
            <div class="guc-bar">
                <div class="guc-fill" style="width: ${sultan.guc}%; background:${sultan.renk}"></div>
            </div>
            <p>Güç Seviyesi: ${sultan.guc}/100</p>
            <div style="text-align:left; margin-top:15px;">
                <strong>Öne Çıkanlar:</strong>
                <ul>${sultan.ozellikler.map(oz => `<li>${oz}</li>`).join('')}</ul>
            </div>
        `;
        modal.style.display = 'block';
    }

    // 4. Filtreleme Mantığı
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            
            const period = btn.getAttribute('data-period');
            if (period === 'all') {
                displaySultans(allSultans);
            } else {
                const filtered = allSultans.filter(s => s.donem === period);
                displaySultans(filtered);
            }
        });
    });

    // 5. Modal Kapatma
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (event) => { if (event.target == modal) modal.style.display = 'none'; };
});
