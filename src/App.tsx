import './App.css'

function App() {
  return (
    <div className="app">
      <header className="site-header">
        <div className="brand">
        </div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Certificate</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          className="btn secondary"
          href="https://drive.google.com/file/d/1LJIOi0pTFlvWdwxzWbNXLWWcrbIaaN3v/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Unduh CV
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-card-shell">
            <div className="hero-card">
              <img className="avatar" src="/pp3.png" alt="Foto profil" />
              <div>
                <h2>Halo, saya Mohammad Rivaldy Yusup</h2>
                <p>
                  Seorang freshgraduatate yang memiliki ketertarikan besar dalam bidang IT dan sedang
                  mencari peluang untuk mengembangkan ketrampilan saya dalam bidang IT
                </p>
                <div className="socials">
                  <a href="https://github.com/KazuKid" target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                  <a href="https://steamcommunity.com/id/kazukid_/" target="_blank" rel="noreferrer">
                    Steam
                  </a>
                  <a
                    href="https://discord.com/users/277729630583128065"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-header">
            <h2>Tentang Saya</h2>
          </div>
          <div className="about-grid">
            <div className="about-card-shell">
              <div className="card about-card">
                <h3>Riwayat Pendidikan</h3>
                <ul className="education-list">
                  <li>
                    <span className="edu-school">SMA Nasima Semarang</span>
                    <span className="edu-year">2017–2019</span>
                  </li>
                  <li>
                    <span className="edu-school">
                      Universitas Dian Nuswantoro — Teknik Informatika
                    </span>
                    <span className="edu-year">2019–2025</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="about-card-shell">
              <div className="card about-card">
                <h3>Hobi</h3>
                <ul className="hobby-list">
                  <li>Game</li>
                  <li>Olahraga</li>
                  <li>Belajar hal baru</li>
                  <li>Movie</li>
                </ul>
              </div>
            </div>
            <div className="about-card-shell">
              <div className="card about-card">
                <h3>Skill</h3>
                <ul className="hobby-list">
                  <li>Prompt Engineering</li>
                  <li>Web Development</li>
                  <li>Microsoft Office</li>
                  <li>Basic Video/Image Editing</li>
                  <li>Software Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-header">
            <h2>Proyek Pilihan</h2>
            <p>
              Beberapa proyek yang pernah saya kerjakan
            </p>
          </div>
          <div className="projects-grid certificates-grid">
            <article className="project-card">
                <img
                  className="project-image"
                  src="/company1.png"
                  alt="Company Web Profile"
                />
              <div className="project-body">
                  <h3>Company Web Profile</h3>
                <p>
                  Contoh template website profil perusahaan dengan tampilan yang elgan dan responsif, menampilkan informasi tentang perusahaan, produk, dan layanan yang ditawarkan.
                </p>
                <div className="tags">
                  <span>Vue.js</span>
                  <span>CSS</span>
                </div>
                <div className="project-actions">
                  <button className="btn ghost">Detail</button>
                  <a
                    className="btn secondary"
                    href="https://company-web-profile.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-image"
                src="/ecommerce2.png"
                alt="E-Commerce"
              />
              <div className="project-body">
                <h3>E-Commerce</h3>
                <p>
                  Contoh template webiste ecommerce dengan fitur lengkap seperti katalog produk, keranjang belanja, dan proses checkout yang mudah digunakan.
                </p>
                <div className="tags">
                  <span>Vue.js</span>
                  <span>Tailwind.css</span>
                  <span>Laravel</span>
                  <span>Postgresql</span>
                </div>
                <div className="project-actions">
                  <button className="btn ghost">Detail</button>
                  <a
                    className="btn secondary"
                    href="https://pet-shop-zea.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-image"
                src="/comingsoon.jpg"
                alt="Coming soon"
              />
              <div className="project-body">
                <h3>Article Generator</h3>
                <p>
                  Dalam pengembangan...
                </p>
                <div className="tags">
                  <span>?</span>
                </div>
                <div className="project-actions">
                  <button className="btn ghost">Detail</button>
                  <button className="btn secondary">Demo</button>
                </div>
              </div>
            </article>
          </div>
        </section>
        <section id="skills" className="section">
          <div className="section-header">
            <h2>Sertifikat</h2>
            <p>
              Sertifikat pelatihan dan pencapaian yang relevan dengan bidang
              IT.
            </p>
          </div>
          <div className="projects-grid">
            <article className="project-card">
              <img
                className="project-image"
                src="/sertifikat1.jpg"
                alt="Sertifikat Google"
              />
              <div className="project-body">
                <h3>Bangkit, Specializing in Cloud Computing.</h3>
                <div className="project-actions">
                  <a
                    className="btn secondary"
                    href="https://drive.google.com/file/d/1uPtqQCHr_BdK686GfKZqpYPvd5kPMb0u/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Sertifikat
                  </a>
                </div>
              </div>
            </article>
            <article className="project-card">
              <img
                className="project-image"
                src="/sertifikat2.png"
                alt="Sertifikat UI/UX"
              />
              <div className="project-body">
                <h3>Coursera, Architecting with Google Compute Engine Spesialisasi (Google Cloud)</h3>
                <div className="project-actions">
                  <a
                    className="btn secondary"
                    href="https://drive.google.com/file/d/14vsHxzxKzeu7lMlSehVYykNS8tuNh4VJ/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lihat Sertifikat
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div>
            <h2>Ayo Kolaborasi</h2>
            <p>
              Tertarik bekerja sama? Kirim ringkasan proyekmu dan kita mulai dari
              sana.
            </p>
          </div>
          <div className="contact-card">
            <div>
              <h3>Kontak</h3>
              <p>Email : ripzero2@gmail.com</p>
              <p>WA    : +6285326354313</p>
              <p>Lokasi : Semarang, Indonesia</p>
            </div>
            <button className="btn primary">Kirim Pesan</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 KZKD. Semua hak dilindungi.</p>
      </footer>
    </div>
  )
}

export default App
