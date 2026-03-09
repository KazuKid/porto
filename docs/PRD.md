# Product Requirements Document

## 1. Ringkasan Produk

Nama produk: Porto

Porto adalah website portfolio personal berbasis single-page application yang menampilkan profil profesional Mohammad Rivaldy Yusup, ringkasan latar belakang, daftar proyek, sertifikat, dan informasi kontak. Aplikasi ini ditujukan sebagai media personal branding dan kanal awal untuk peluang kerja maupun kolaborasi.

Dokumen ini menggambarkan kebutuhan produk berdasarkan implementasi yang saat ini ada di repository.

## 2. Tujuan Produk

### Tujuan utama

- Menyediakan identitas digital profesional yang mudah diakses secara online.
- Menampilkan informasi profil, pengalaman, proyek, dan sertifikat dalam satu halaman ringkas.
- Memudahkan recruiter, HR, client, atau collaborator untuk memahami profil pemilik website secara cepat.
- Menyediakan tautan langsung ke CV, media sosial, demo proyek, dan sertifikat.

### Indikator keberhasilan

- Pengunjung dapat memahami profil pemilik website dalam waktu kurang dari 1 menit.
- Pengunjung dapat membuka CV, proyek demo, dan sertifikat tanpa hambatan.
- Website dapat dibuka dengan baik pada desktop dan mobile.
- Website dapat dideploy sebagai static site dengan proses build yang sederhana.

## 3. Latar Belakang Masalah

Pemilik portfolio membutuhkan media online yang lebih terstruktur daripada CV statis untuk memperlihatkan kemampuan, hasil kerja, dan bukti pendukung seperti sertifikat. Website portfolio menjadi solusi yang lebih fleksibel karena mudah diperbarui, dapat dibagikan melalui link, dan dapat menampilkan presentasi visual yang lebih menarik.

## 4. Target Pengguna

### Pengguna utama

- Recruiter dan HR
- Hiring manager
- Client freelance atau agency
- Rekan kolaborasi
- Dosen, mentor, atau evaluator teknis

### Kebutuhan pengguna

- Mengetahui siapa pemilik portfolio
- Memahami bidang minat dan skill utama
- Melihat contoh hasil kerja
- Memverifikasi sertifikat atau pencapaian
- Menemukan cara menghubungi pemilik portfolio

## 5. Ruang Lingkup Produk

### Fitur dalam cakupan saat ini

- Header navigasi satu halaman
- Hero section dengan identitas utama dan tautan sosial
- About section berisi pendidikan, hobi, dan skill
- Projects section berisi daftar proyek pilihan
- Certificates section berisi daftar sertifikat
- Contact section berisi email, WhatsApp, dan lokasi
- Tombol unduh CV
- Favicon kustom
- Styling custom dengan gradient border untuk hero dan card About

### Di luar cakupan saat ini

- Sistem login
- Dashboard admin
- CMS untuk mengubah konten secara dinamis
- Integrasi backend atau database
- Form pengiriman pesan yang aktif
- Tracking analytics
- SEO metadata yang lengkap
- Multibahasa

## 6. Deskripsi Fitur dan Kebutuhan Fungsional

### 6.1 Header dan navigasi

Deskripsi:
Header menampilkan navigasi anchor ke tiap section dan tombol unduh CV.

Kebutuhan:
- Sistem harus menampilkan menu Home, About, Projects, Certificate, dan Contact.
- Setiap menu harus mengarah ke section yang sesuai pada halaman yang sama.
- Tombol Unduh CV harus membuka file CV pada tab baru.
- Header harus tetap terlihat saat pengguna melakukan scroll.

Acceptance criteria:
- Klik item navigasi memindahkan viewport ke section target.
- Tombol CV membuka tautan Google Drive tanpa meninggalkan halaman utama.

### 6.2 Hero section

Deskripsi:
Hero section memperkenalkan pemilik portfolio melalui foto, nama, ringkasan singkat, dan tautan sosial.

Kebutuhan:
- Sistem harus menampilkan foto profil.
- Sistem harus menampilkan nama lengkap.
- Sistem harus menampilkan deskripsi singkat mengenai minat dan tujuan karier.
- Sistem harus menyediakan tautan ke GitHub, Steam, dan Discord.
- Hero card harus memiliki aksen visual berupa animated gradient border.

Acceptance criteria:
- Foto, nama, dan deskripsi muncul di atas fold pada sebagian besar layar desktop.
- Setiap tautan sosial dapat dibuka di tab baru.

### 6.3 About section

Deskripsi:
Section ini menyajikan informasi latar belakang dalam tiga card terpisah.

Kebutuhan:
- Sistem harus menampilkan riwayat pendidikan.
- Sistem harus menampilkan daftar hobi.
- Sistem harus menampilkan skill utama.
- Ketiga card harus memiliki tampilan visual yang konsisten.
- Card About harus menggunakan gradient border yang konsisten dengan Hero section.

Acceptance criteria:
- Pengguna dapat membaca ketiga kategori informasi tanpa interaksi tambahan.
- Layout card tetap rapi pada desktop dan mobile.

### 6.4 Projects section

Deskripsi:
Section ini menampilkan proyek-proyek pilihan beserta deskripsi, tag teknologi, dan aksi.

Kebutuhan:
- Sistem harus menampilkan gambar proyek.
- Sistem harus menampilkan nama proyek.
- Sistem harus menampilkan deskripsi singkat proyek.
- Sistem harus menampilkan tag teknologi yang relevan.
- Sistem harus menyediakan tombol Demo untuk proyek yang sudah tersedia.
- Sistem dapat menampilkan status "Dalam pengembangan..." untuk proyek yang belum selesai.

Acceptance criteria:
- Minimal satu proyek memiliki tautan demo aktif.
- Card proyek ditampilkan dalam grid responsif.

Catatan kondisi saat ini:
- Tombol Detail masih berupa tombol statis tanpa aksi.
- Beberapa proyek masih placeholder.

### 6.5 Certificates section

Deskripsi:
Section ini menunjukkan sertifikat yang relevan dengan bidang IT.

Kebutuhan:
- Sistem harus menampilkan gambar sertifikat.
- Sistem harus menampilkan judul sertifikat.
- Sistem harus menyediakan tautan untuk melihat sertifikat.
- Judul yang panjang harus tetap rapi pada layout card.

Acceptance criteria:
- Pengguna dapat membuka dokumen sertifikat melalui tombol yang tersedia.
- Judul sertifikat panjang tidak merusak layout card.

### 6.6 Contact section

Deskripsi:
Section ini berisi informasi kontak langsung.

Kebutuhan:
- Sistem harus menampilkan email.
- Sistem harus menampilkan nomor WhatsApp.
- Sistem harus menampilkan lokasi.
- Sistem harus menyediakan CTA utama untuk kontak.

Acceptance criteria:
- Informasi kontak dapat terlihat jelas tanpa interaksi tambahan.

Catatan kondisi saat ini:
- Tombol Kirim Pesan belum memiliki aksi atau integrasi ke email/WhatsApp/form.

### 6.7 Footer

Deskripsi:
Footer menampilkan copyright pemilik website.

Kebutuhan:
- Sistem harus menampilkan copyright tahun dan identitas singkat.

## 7. Kebutuhan Konten

Konten yang harus dikelola:
- Nama lengkap
- Foto profil
- Ringkasan profesional
- Tautan sosial
- CV
- Riwayat pendidikan
- Hobi
- Daftar skill
- Data proyek
- Data sertifikat
- Email, WhatsApp, dan lokasi
- Favicon dan aset gambar

Kebutuhan pengelolaan konten saat ini:
- Semua konten dikelola langsung melalui source code di `src/App.tsx`.
- Aset statis diletakkan di folder `public`.

## 8. Kebutuhan Non-Fungsional

### Performa
- Halaman harus dimuat cepat karena seluruh aplikasi bersifat statis.
- Aset gambar sebaiknya dioptimalkan agar tidak memperlambat loading.

### Responsivitas
- Tampilan harus bekerja pada mobile, tablet, dan desktop.
- Grid dan card harus tetap terbaca pada lebar layar kecil.

### Aksesibilitas
- Gambar harus memiliki alt text.
- Link eksternal harus jelas dan aman.
- Animasi sebaiknya memperhatikan preferensi reduced motion.

### Keamanan
- Tidak boleh ada secret atau credential di frontend.
- Link eksternal harus menggunakan `rel="noreferrer"` untuk tab baru.

### Maintainability
- Struktur komponen dan style harus mudah dipahami.
- Perubahan konten harus dapat dilakukan dengan cepat oleh developer.

## 9. User Flow Utama

### Flow recruiter
- Pengguna membuka URL portfolio.
- Pengguna melihat ringkasan profil pada Hero section.
- Pengguna men-scroll ke About, Projects, dan Certificates.
- Pengguna membuka demo proyek atau sertifikat yang relevan.
- Pengguna membuka CV atau menggunakan informasi kontak.

### Flow client/collaborator
- Pengguna membuka portfolio.
- Pengguna menilai jenis skill dan kualitas proyek.
- Pengguna membuka tautan kontak untuk melanjutkan komunikasi.

## 10. Batasan dan Gap Produk Saat Ini

- Semua data masih hardcoded, sehingga update konten memerlukan perubahan source code.
- Belum ada backend, database, atau panel admin.
- Tombol Detail pada proyek belum memiliki fungsi.
- Tombol Kirim Pesan belum menjalankan aksi.
- Metadata SEO masih minimal.
- Belum ada analytics untuk mengukur trafik atau interaksi.
- Belum ada test otomatis.

## 11. Prioritas Pengembangan Berikutnya

### Prioritas tinggi
- Aktifkan tombol Kirim Pesan ke email, WhatsApp, atau form.
- Tambahkan aksi nyata untuk tombol Detail proyek.
- Lengkapi metadata SEO seperti title yang lebih spesifik, description, Open Graph, dan social preview image.
- Rapikan typo atau copywriting pada beberapa deskripsi proyek dan profil.

### Prioritas menengah
- Pisahkan data konten ke file JSON atau TypeScript object terstruktur.
- Tambahkan section pengalaman kerja atau pengalaman organisasi.
- Tambahkan proyek tambahan yang benar-benar selesai.
- Tingkatkan konsistensi visual card di seluruh section.

### Prioritas rendah
- Tambahkan dark/light theme switcher.
- Tambahkan animasi scroll atau reveal yang lebih halus.
- Tambahkan tracking analytics sederhana.

## 12. Definisi Selesai

Sebuah update produk dianggap selesai bila:
- Kebutuhan konten sudah diperbarui sesuai data terbaru.
- Build produksi berhasil tanpa error.
- Linting berhasil tanpa issue kritis.
- Link penting dapat dibuka.
- Tampilan tetap baik pada desktop dan mobile.
- Perubahan telah dideploy ke hosting production.
