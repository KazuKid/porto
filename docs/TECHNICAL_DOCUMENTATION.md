# Technical Documentation

## 1. Gambaran Umum

Project ini adalah website portfolio personal berbasis React, TypeScript, dan Vite. Aplikasi bersifat single-page application tanpa backend dan tanpa routing client-side. Seluruh konten utama saat ini dirender dari satu komponen utama, yaitu `src/App.tsx`, dengan aset statis dari folder `public`.

Dokumentasi ini menjelaskan arsitektur, struktur file, setup development, build, deployment, dan catatan maintainability berdasarkan kondisi repository saat ini.

## 2. Stack Teknologi

### Core
- React 19.2.0
- React DOM 19.2.0
- TypeScript 5.9.x
- Vite 7

### Tooling
- ESLint 9
- typescript-eslint
- eslint-plugin-react-hooks
- eslint-plugin-react-refresh
- @vitejs/plugin-react

### Tipe aplikasi
- Frontend-only static SPA
- Tanpa backend
- Tanpa database
- Tanpa state management library tambahan
- Tanpa routing library

## 3. Status Implementasi Saat Ini

### Sudah tersedia
- Halaman portfolio satu halaman
- Navigasi anchor antarseksi
- Hero section dengan gradient border
- About section dengan gradient border pada card
- Projects section dengan data statis
- Certificates section dengan data statis
- Contact section dengan data statis
- Favicon kustom
- Build produksi berhasil
- Linting berhasil

### Belum tersedia
- Pengelolaan data dinamis
- Form kontak aktif
- Integrasi API
- Pengujian otomatis
- SEO lanjutan
- Analytics

## 4. Struktur Direktori

```text
porto/
|-- public/
|   |-- comingsoon.jpg
|   |-- company1.png
|   |-- ecommerce1.png
|   |-- logoweb.png
|   |-- pp1.png
|   |-- pp2.jpg
|   |-- pp3.png
|   |-- sertifikat1.jpg
|   |-- sertifikat2.png
|   |-- vite.svg
|-- src/
|   |-- assets/
|   |   |-- react.svg
|   |-- App.css
|   |-- App.tsx
|   |-- index.css
|   |-- main.tsx
|-- docs/
|   |-- PRD.md
|   |-- TECHNICAL_DOCUMENTATION.md
|-- eslint.config.js
|-- index.html
|-- package.json
|-- README.md
|-- tsconfig.app.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
```

## 5. Arsitektur Aplikasi

### 5.1 Entry point

Aplikasi dimulai dari `src/main.tsx`.

Tanggung jawab file ini:
- Mengimpor style global dari `src/index.css`
- Merender komponen utama `App`
- Membungkus aplikasi dengan `StrictMode`

### 5.2 Root component

`src/App.tsx` adalah pusat render seluruh halaman.

Karakteristik:
- Tidak menggunakan pemecahan komponen per section
- Tidak menggunakan state React
- Tidak menggunakan props antar komponen
- Semua data konten ditulis langsung di JSX

Section yang dirender:
- Header
- Hero
- About
- Projects
- Certificates
- Contact
- Footer

### 5.3 Styling

Styling dibagi menjadi dua level:
- `src/index.css` untuk reset ringan, variabel dasar, typography, dan background global
- `src/App.css` untuk layout dan styling spesifik komponen/section

Pendekatan styling:
- CSS biasa tanpa CSS Modules
- Tidak menggunakan Tailwind
- Menggunakan CSS variables terbatas seperti `--text-primary`, `--text-secondary`, dan `--accent`
- Menggunakan gradient dan animation untuk aksen visual

### 5.4 Asset strategy

Aset statis disimpan di folder `public` dan dipanggil menggunakan path absolut, misalnya `/pp3.png` atau `/logoweb.png`.

Konsekuensi teknis:
- Sederhana untuk dipakai
- Mudah dikelola untuk project kecil
- Belum ada optimasi image pipeline khusus

## 6. Detail Implementasi Per File

### `index.html`
Fungsi:
- Menyediakan root element `#root`
- Menentukan favicon
- Menentukan title halaman

Catatan saat ini:
- Favicon sudah diarahkan ke `/logoweb.png`
- Title masih generik: `porto`

### `src/main.tsx`
Fungsi:
- Bootstrap React app
- Render `App` ke DOM

### `src/App.tsx`
Fungsi:
- Menyimpan semua konten utama website
- Menentukan struktur HTML tiap section
- Menghubungkan CTA ke external links

Catatan penting:
- Social links dan CV diarahkan ke URL eksternal
- Tombol `Detail` di project belum punya handler
- Tombol `Kirim Pesan` belum punya handler
- Semua teks dan data masih hardcoded

### `src/index.css`
Fungsi:
- Menentukan root variables
- Menentukan font stack default
- Menyediakan global reset sederhana
- Menentukan background global halaman

### `src/App.css`
Fungsi:
- Mengatur layout halaman
- Mengatur grid untuk cards dan sections
- Mengatur styling tombol, card, project list, dan contact block
- Mengatur animated gradient border pada Hero dan About card

### `vite.config.ts`
Fungsi:
- Mengaktifkan plugin React untuk Vite

Catatan:
- Konfigurasi masih minimal dan sesuai untuk project sederhana

### `eslint.config.js`
Fungsi:
- Mengaktifkan linting JavaScript/TypeScript
- Menambahkan rules React hooks dan Vite React refresh
- Mengabaikan folder `dist`

### `tsconfig.app.json`
Fungsi:
- Mengatur TypeScript untuk source frontend

Hal penting:
- `strict: true`
- `noUnusedLocals: true`
- `noUnusedParameters: true`
- `noEmit: true`
- JSX menggunakan `react-jsx`

### `tsconfig.node.json`
Fungsi:
- Mengatur TypeScript untuk file konfigurasi Node seperti `vite.config.ts`

## 7. Scripts dan Command

Script yang tersedia di `package.json`:

```json
{
  "dev": "vite",
  "build": "tsc -b && vite build",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

### Perintah development

Install dependency:

```powershell
npm install
```

Jalankan development server:

```powershell
npm run dev
```

Build production:

```powershell
npm run build
```

Preview hasil build:

```powershell
npm run preview
```

### Catatan lingkungan Windows

Pada environment yang diverifikasi, PowerShell memblokir `npm.ps1` karena execution policy. Jika itu terjadi, gunakan:

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run lint
npm.cmd run preview
```

## 8. Validasi yang Sudah Diverifikasi

Verifikasi dilakukan pada repository saat ini.

### Build
Perintah:

```powershell
npm.cmd run build
```

Hasil:
- Build berhasil
- Output dihasilkan ke folder `dist`

### Lint
Perintah:

```powershell
npm.cmd run lint
```

Hasil:
- Lint berhasil tanpa error

## 9. Deployment

Project ini cocok untuk static hosting seperti:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

### Deployment ke Vercel
Alur umum:
- Push repository ke GitHub
- Import repository di Vercel
- Gunakan command build default: `npm run build`
- Output directory: `dist`

Catatan:
- Karena aplikasi frontend-only dan tidak memiliki server runtime, deployment relatif sederhana.

## 10. Panduan Maintenance

### Mengubah konten portfolio
Lakukan perubahan di `src/App.tsx` untuk:
- Nama, deskripsi, dan tautan sosial
- Daftar skill, pendidikan, dan hobi
- Daftar proyek
- Daftar sertifikat
- Informasi kontak

### Mengubah styling
Lakukan perubahan di:
- `src/index.css` untuk warna dasar, typography, dan background global
- `src/App.css` untuk layout section, card, button, dan efek visual

### Mengubah favicon
Lakukan perubahan di:
- `index.html`
- File gambar di folder `public`

### Menambah aset gambar
Simpan file di folder `public`, lalu panggil dengan path absolut dari JSX.

## 11. Technical Debt dan Risiko Saat Ini

### Technical debt
- Semua konten tersimpan di satu file JSX besar, sehingga maintainability akan menurun jika konten bertambah.
- Belum ada pemecahan komponen seperti `Header`, `Hero`, `ProjectsSection`, dan lainnya.
- Belum ada data model terpisah untuk proyek, sertifikat, atau kontak.
- Tombol aksi tertentu belum benar-benar fungsional.
- Belum ada test unit, integration test, atau visual regression test.

### Risiko
- Hardcoded content meningkatkan risiko salah edit saat update rutin.
- Gambar yang belum dioptimasi dapat mengurangi performa di jaringan lambat.
- Tidak adanya SEO metadata detail dapat mengurangi visibilitas pencarian dan kualitas preview sosial.
- Tidak adanya analytics membuat evaluasi performa produk sulit dilakukan.

## 12. Rekomendasi Refactor

### Tahap 1
- Pecah `App.tsx` menjadi komponen per section.
- Pindahkan data proyek, sertifikat, dan social links ke file data terpisah.
- Aktifkan CTA `Kirim Pesan` ke email atau WhatsApp.

### Tahap 2
- Tambahkan reusable component untuk `SectionHeader`, `ProjectCard`, dan `InfoCard`.
- Tambahkan typing untuk struktur data portfolio.
- Tambahkan metadata SEO yang lebih lengkap pada `index.html`.

### Tahap 3
- Tambahkan testing minimal untuk render komponen utama.
- Tambahkan optimasi image dan audit performa.
- Pertimbangkan migrasi ke content-driven architecture jika portfolio makin besar.

## 13. Checklist Operasional

Sebelum push ke production:
- Update konten yang berubah
- Jalankan lint
- Jalankan build
- Cek link eksternal penting
- Cek tampilan desktop dan mobile
- Push ke GitHub
- Verifikasi hasil deploy
