const indicator = document.querySelector('.indicator');
const items = document.querySelectorAll('.nav-item');
const contentContainer = document.getElementById('content-container');

const contentData = {
    home: `
        <div class="hero-container">
            <h1 class="hero-title">Selamat datang, di goEdu</h1>
            <p class="hero-text">Website seputar Bahasa Indonesia!</p>
        </div>
        
        <div class="introduction-container">
        <h3 class="introduction-title">Apa itu GoEdu?</h3>
        <p class="introduction-text">GoEdu adalah Website Tips Belajar Bahasa Indonesia. Tujuan Utama kami menciptakan GoEdu hadir untuk membantu pelajar dan siapa saja yang ingin meningkatkan kemampuan Bahasa Indonesia dengan cara yang mudah, cepat, dan efektif.</p>
        </div>
        
         <div class="introduction-container">
        <h3 class="introduction-title">Kapan GoEdu dibuat?</h3>
        <p class="introduction-text">GoEdu pertama kali dibuat dan dirancang pada Minggu 9 Maret 2025. Dibandingkan dengan GoEdu yang dulu, GoEdu sekarang memiliki fitur dan tampilan yang sedikit berbeda. Berikut adalah tampilan versi dulu.</p>
        </div>
        <div class ="img-container">
        <img class="screenshot" src="screenshot.jpg">
        </div>
        
      
        
         <div class="introduction-container">
        <h3 class="introduction-title">Teknologi Apa Yang Dipakai Oleh GoEdu? </h3>
        <p class="introduction-text">GoEdu membuat Frontend di antaranya menggunakan HTML, CSS, JavaScript. Dan kami menggunakan Back-end Node.js untuk Forum pertanyaan yang berada di page terpisah.</p>
        </div>
        
        <div class="container">
        <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML Logo" class="icon">
            <h2>HTML</h2>
            <p>Kami menggunakan html untuk membuat struktur konten web.</p>
        </div>
        <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS Logo" class="icon">
            <h2>CSS</h2>
            <p>Untuk mendesain struktur & objek, kami pilih CSS.</p>
        </div>
        <div class="card">
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript Logo" class="icon">
            <h2>JavaScript</h2>
            <p>Agar objek interaktif, kami menggunakan JavaScript.</p>
        </div>
    </div>
        
         <div class="introduction-container">
        <h3 class="introduction-title">Pesan kami.</h3>
        <p class="introduction-text">Kami hanya bisa berpesan, tetaplah semangat dalam belajar dan terus berkembang. Jangan pernah ragu untuk mencoba hal baru, karena setiap langkah kecil yang kamu ambil hari ini akan membawamu lebih dekat ke impianmu. Teruslah berusaha, hadapi tantangan dengan keberanian, dan jadilah versi terbaik dari dirimu sendiri! -Tim GoEdu.</p>
        </div>
        <div class="secondTitle-container">
        <h3 class="secondTitle">Dengan GoEdu, belajar Bahasa Indonesia jadi lebih menyenangkan dan tanpa ribet.</h3>
        </div>
      
    `,
    forum: `
        <div class="hero-container">
            <h1 class="hero-title">Forum Diskusi</h1>
            <p class="hero-text">Untuk menanyakan seputar Bahasa Indonesia, gunakan link di bawah ini! </p>
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

        if (selectedContent !== 'forum') {
            // Hanya tambahkan animasi fade-in ke selain forum
            setTimeout(() => {
                document.querySelectorAll('.glassmorph').forEach(el => {
                    observer.observe(el);
                });
            }, 100);
        } else {
            // Jika halaman forum, jalankan event listener untuk form
            setupForumForm();
        }
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

// Intersection Observer untuk animasi fade-in (kecuali Forum)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

