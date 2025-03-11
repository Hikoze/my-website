const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('.nav-item');
const contentContainer = document.getElementById('content-container');

// Data konten untuk setiap halaman
const contentData = {
    home: `<div class="hero-container">
               <h1 class="hero-title">Selamat Datang di goEdu</h1>
               <p class="hero-text">Website seputar pelajaran Bahasa Indonesia terbaik.</p>
           </div>`,
    forum: `<div class="hero-container">
                <h1 class="hero-title">Forum Diskusi</h1>
                <p class="hero-text">Diskusikan materi pelajaran dengan teman-temanmu.</p>
            </div>`,
   latihan: `<div class="hero-container">
                <h1 class="hero-title">Latihan Soal</h1>
                <p class="hero-text">Kembangkan kemampuanmu dengan berbagai latihan soal.</p>
            </div>`,
    tips: `<div class="hero-container">
                <h1 class="hero-title">Tips Belajar</h1>
                <p class="hero-text">Dapatkan tips dan trik untuk belajar lebih efektif.</p>
            </div>`
};

const handleIndicator = (element) => {
    items.forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('style');
    });

    // Update indikator posisi
    indicator.style.width = `$(element.offsetWidth)px`;
    indicator.style.left = `$(element.offsetLeft)px`;
    indicator.style.backgroundColor = element.getAttribute('active-color');

    // Ubah warna teks navbar
    element.classList.add('active');
    element.style.color = element.getAttribute('active-color');

    // Ganti konten berdasarkan data-content
    const selectedContent = element.getAttribute('data-content');
    if (contentData[selectedContent]) {
        contentContainer.innerHTML = contentData[selectedContent];
    }
};

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Mencegah reload halaman
        handleIndicator(e.target);
    });

    // Jika sudah aktif sejak awal, tampilkan kontennya
    if (item.classList.contains('active')) {
        handleIndicator(item);
    }
});
