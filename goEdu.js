const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('.nav-item');
const contentContainer = document.getElementById('content-container');

const contentData = {
    home: `
        <div class="hero-container">
            <h1 class="hero-title">Selamat datang di goEdu</h1>
            <p class="hero-text">Website seputar Bahasa Indonesia!</p>
        </div>
    `,
    forum: `
        <div class="hero-container">
            <h1 class="hero-title">Forum Diskusi</h1>
            <p class="hero-text">Diskusikan materi pelajaran dengan temanmu! </p>
        </div>
    `,
    latihan: `
        <div class="hero-container">
            <h1 class="hero-title">Latihan Soal</h1>
            <p class="hero-text">Kembangkan kemampuanmu dengan berbagai latihan soal.</p>
        </div>
    `,
    tips: `
        <div class="hero-container">
            <h1 class="hero-title">Tips Belajar</h1>
            <p class="hero-text">Dapatkan tips dan dan trik untuk belajar lebih efektif</p>
        </div>

        <div class="glassmorph">
            <h3 class="tips-A">A. Dasar-Dasar Bahasa Indonesia</h3>
            <ul class="descTips-A">
                <li>Pahami aturan dasar tata bahasa.</li>
                <li>Kuasai ejaan yang disempurnakan (EYD).</li>
                <li>Pelajari penggunaan tanda baca dengan benar.</li>
                <li>Kenali perbedaan kata baku dan tidak baku.</li>
                <li>Hindari penggunaan bahasa gaul dalam tulisan formal.</li>
                <li>Pahami jenis-jenis kata (nomina, verba, adjektiva, dsb.).</li>
                <li>Kenali perbedaan kata serapan dan asli Indonesia.</li>
                <li>Biasakan membaca Kamus Besar Bahasa Indonesia (KBBI).</li>
                <li>Gunakan Tesaurus untuk memperkaya kosakata.</li>
                <li>Hindari pleonasme (penggunaan kata yang berlebihan).</li>
            </ul>
        </div>

        <div class="glassmorph">
            <h3 class="tips-B">B. Meningkatkan Kosakata</h3>
            <ul class="descTips-B">
                <li>Buat daftar kata baru setiap hari.</li>
                <li>Gunakan kata-kata baru dalam percakapan.</li>
                <li>Mainkan permainan kosakata seperti teka-teki silang.</li>
                <li>Gunakan aplikasi kamus digital.</li>
                <li>Bacalah berbagai jenis teks untuk memperluas kosakata.</li>
                <li>Tonton film dengan subtitle Bahasa Indonesia.</li>
                <li>Pelajari sinonim dan antonim dari kata-kata umum.</li>
                <li>Coba menulis sinonim dari satu kata dalam kalimat yang berbeda.</li>
                <li>Ikuti akun media sosial yang membahas bahasa.</li>
                <li>Buat catatan kecil tentang kata-kata unik.</li>
            </ul>
        </div>

        <div class="glassmorph">
            <h3 class="tips-C">C. Kemampuan Membaca</h3>
            <ul class="descTips-C">
                <li>Baca buku fiksi dan nonfiksi dalam Bahasa Indonesia.</li>
                <li>Biasakan membaca koran atau majalah.</li>
                <li>Pahami isi teks sebelum mencari arti kata sulit.</li>
                <li>Gunakan metode skimming dan scanning saat membaca.</li>
                <li>Coba ringkas bacaan dengan kata-katamu sendiri.</li>
                <li>Diskusikan isi bacaan dengan teman.</li>
                <li>Cari tahu makna kata baru dari konteksnya.</li>
                <li>Tandai kalimat menarik dan coba gunakan dalam tulisanmu.</li>
                <li>Bacalah puisi untuk memahami keindahan bahasa.</li>
                <li>Bacakan teks dengan lantang untuk meningkatkan pemahaman.</li>
            </ul>
        </div>
        
        <!-- Glassmorph D -->
        <div class="glassmorph">
            <h3 class="tips-D">D. Keterampilan Menulis</h3>
            <div class="descTips-D-parent">
                <ul class="descTips-D">
                    <li>Mulai dengan menulis jurnal harian.</li>
                    <li>Gunakan ejaan dan tata bahasa yang benar.</li>
                    <li>Perhatikan struktur paragraf yang jelas.</li>
                    <li>Coba menulis cerpen atau esai singkat.</li>
                    <li>Hindari kalimat yang terlalu panjang dan bertele-tele.</li>
                    <li>Edit dan perbaiki tulisan setelah selesai menulis.</li>
                    <li>Gunakan variasi kosakata agar tulisan tidak monoton.</li>
                    <li>Minta pendapat orang lain untuk mengevaluasi tulisanmu.</li>
                    <li>Pelajari teknik menulis paragraf argumentatif dan deskriptif.</li>
                    <li>Gunakan analogi dan perumpamaan untuk memperjelas tulisan.</li>
                </ul>
            </div>
        </div>
        
        <!-- Glassmorph E -->
        <div class="glassmorph">
            <h3 class="tips-E">E. Kemampuan Berbicara</h3>
            <div class="descTips-E-parent">
                <ul class="descTips-E">
                    <li>Berlatih berbicara di depan cermin.</li>
                    <li>Rekam suara saat berbicara dan evaluasi pelafalan.</li>
                    <li>Gunakan bahasa yang jelas dan tidak bertele-tele.</li>
                    <li>Jangan takut salah dalam berbicara.</li>
                    <li>Berpartisipasilah dalam diskusi atau debat.</li>
                    <li>Coba berbicara tanpa menggunakan kata serapan asing.</li>
                    <li>Latih intonasi dan ekspresi saat berbicara.</li>
                    <li>Biasakan menggunakan kata baku dalam komunikasi formal.</li>
                    <li>Dengarkan cara berbicara penyiar berita atau pembawa acara.</li>
                    <li>Buat video/podcast untuk melatih kefasihan berbicara.</li>
                </ul>
            </div>
        </div>
        
        <!-- Glassmorph F -->
        <div class="glassmorph">
            <h3 class="tips-F">F. Pemahaman Tata Bahasa</h3>
            <div class="descTips-F-parent">
                <ul class="descTips-F">
                    <li>Pelajari pola kalimat dasar dalam Bahasa Indonesia.</li>
                    <li>Kenali perbedaan kata depan dan konjungsi.</li>
                    <li>Pahami perbedaan imbuhan (awalan, sisipan, akhiran).</li>
                    <li>Gunakan subjek dan predikat yang jelas dalam kalimat.</li>
                    <li>Hindari penggunaan kata ganda yang tidak perlu.</li>
                    <li>Pahami bentuk aktif dan pasif dalam kalimat.</li>
                    <li>Belajar membedakan kalimat langsung dan tidak langsung.</li>
                    <li>Kenali perbedaan makna dari kata-kata homonim.</li>
                    <li>Latih diri menyusun kalimat yang efektif dan komunikatif.</li>
                    <li>Jangan hanya menghafal aturan, tapi pahami penggunaannya.</li>
                </ul>
            </div>
        </div>
    `
};

const handleIndicator = (element) => {
    items.forEach(item => {
        item.classList.remove('active');
        item.removeAttribute('style');
    });

    indicator.style.width = `${element.offsetWidth}px`;
    indicator.style.left = `${element.offsetLeft}px`;
    indicator.style.backgroundColor = element.getAttribute('active-color');

    element.classList.add('active');
    element.style.color = element.getAttribute('active-color');

    const selectedContent = element.getAttribute('data-content');
    if (contentData[selectedContent]) {
        contentContainer.innerHTML = contentData[selectedContent];

        setTimeout(() => {
            document.querySelectorAll('.glassmorph').forEach(el => {
                observer.observe(el);
            });
        }, 100);
    }
};

items.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        handleIndicator(e.target);
    });

    if (item.classList.contains('active')) {
        handleIndicator(item);
    }
});

// Intersection Observer untuk animasi fade-in
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

