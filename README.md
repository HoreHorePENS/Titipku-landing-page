# Titipku — Landing Page

Titipku adalah web app untuk UMKM yang menitipkan produk (konsinyasi) di banyak warung. Pelaku usaha mencatat sisa barang di rak dan retur saat kunjungan, tagihan dihitung otomatis, lalu nota dikirim ke pemilik warung lewat WhatsApp.

Repositori ini berisi **landing page** Titipku di route `/`. Halaman ini dibuat untuk lomba GTNIC 2026, berdasarkan desain "Titipku Landing" (section 3a, versi desktop 1440 px dan mobile 390 px).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), dirender statis
- TypeScript
- Tailwind CSS v4 (design token di `app/globals.css`)
- `next/font`: Plus Jakarta Sans (teks UI), IBM Plex Mono (angka, nomor nota, nominal uang), dan Caveat (tulisan tangan di ilustrasi buku tulis)

## Cara menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
```

```bash
npm run dev
```

Buka http://localhost:3000.

```bash
npm run build
```

Perintah lain: `npm run start` (menjalankan hasil build) dan `npm run lint`.

## Struktur folder

```
app/
  layout.tsx            Layout root: font, bahasa (id), metadata dasar
  globals.css           Design token (warna, font) + utilitas Tailwind
  (marketing)/page.tsx  Landing page "/" beserta metadata & Open Graph
components/landing/
  content.ts            LINKS (semua tautan) dan data tim (TEAM, TEAM_INFO)
  ui.tsx                Container, tombol, judul section, copy mobile/desktop
  SiteHeader.tsx        Header + navigasi anchor
  Hero.tsx              Hero dengan mockup HP dan nota
  AudienceStrip.tsx     "Untuk siapa"
  ProblemSection.tsx    "Satu warung, satu halaman buku…"
  NotebookSketch.tsx    Ilustrasi halaman buku tulis (HTML/CSS, tanpa gambar)
  HowItWorksSection.tsx "Lima menit di depan rak"
  OwnerAndShopSection.tsx "Untuk pemilik, untuk warung"
  FeaturesSection.tsx   "Yang dipakai tiap minggu"
  FaqSection.tsx        "Pertanyaan umum"
  TeamSection.tsx       "Tim di balik Titipku"
  ClosingCta.tsx        CTA penutup
  SiteFooter.tsx        Footer
  PhoneVisitMock.tsx    Mockup HP layar Catat Kunjungan (komponen statis)
  DashboardMock.tsx     Mockup ringkasan untuk pemilik (komponen statis)
  ReceiptMock.tsx       Potongan nota bercap status pembayaran (komponen statis)
public/
  landing/produk/       Foto produk di mockup HP
  landing/tim/          Foto anggota tim (potret 4:5)
```

## Section halaman

1. **Header**: logo, menu Untuk siapa / Masalahnya / Cara kerja / Fitur / FAQ (scroll halus ke `#untuk-siapa`, `#masalah`, `#cara-kerja`, `#fitur`, `#faq`), Masuk, Daftar Gratis. Di mobile hanya logo + Masuk.
2. **Hero**: judul, tombol Daftar Gratis & Coba Demo, mockup HP layar Catat Kunjungan + nota bercap BELUM LUNAS.
3. **Untuk siapa**: strip ringkas jenis usaha yang cocok.
4. **Masalahnya**: perbandingan sebelum (ilustrasi buku tulis) dan sesudah (Titipku) + 3 poin.
5. **Cara kerja**: 3 langkah bernomor yang terhubung garis.
6. **Untuk pemilik, untuk warung**: mockup ringkasan pemilik dan nota yang diterima warung.
7. **Fitur**: 1 fitur besar (Catat Kunjungan) + 3 fitur kecil.
8. **Pertanyaan umum**: accordion `<details>/<summary>` yang bisa dibuka dengan keyboard.
9. **Tim di balik Titipku** (`#tim`): foto dan peran anggota Tim HoreHore. Data di `TEAM` / `TEAM_INFO` (`content.ts`), foto potret 4:5 di `public/landing/tim/`; jika foto belum ada, tampil inisial nama.
10. **CTA penutup**: "Tutup buku tulisnya minggu ini."
11. **Footer**

### Mengubah tautan

Semua tautan ada di `LINKS` dalam `components/landing/content.ts`:

| Kunci    | Nilai sekarang       |
| -------- | -------------------- |
| `masuk`  | `/masuk`             |
| `daftar` | `/daftar`            |
| `demo`   | `/masuk?demo=1`      |
| `kontak` | `mailto:ammararsyad1205@gmail.com` |

### Ilustrasi buku tulis

Panel "Sebelum" memakai ilustrasi halaman buku tulis yang dibuat dengan HTML/CSS (`NotebookSketch.tsx`), bukan foto. Isi catatannya berupa teks HTML sehingga tetap bisa dibaca pembaca layar.

## Aksesibilitas & performa

- HTML semantik: `header`, `main`, `section` dengan heading berurutan, `footer`.
- Mockup HP, nota, dan ringkasan pemilik diberi deskripsi teks untuk pembaca layar.
- Fokus keyboard terlihat, target sentuh minimal 44 px, kontras teks memenuhi WCAG AA.
- Scroll halus dimatikan untuk pengguna dengan `prefers-reduced-motion`.
- Animasi tanpa library (CSS + IntersectionObserver, lihat `components/landing/motion/`): demo hitung di hero, cap nota, linimasa "Cara kerja", dan elemen yang muncul saat di-scroll. Hanya `transform`/`opacity` (CLS 0). HTML server selalu berisi keadaan akhir, jadi konten tetap tampil tanpa JavaScript; dengan `prefers-reduced-motion` semua animasi dilewati.
- Responsif tanpa scroll horizontal di lebar 360–1440 px.
- Skor Lighthouse (mobile, build produksi lokal): **Performance 95, Accessibility 100, Best Practices 100, SEO 100**.

## Tautan

- Website live: `[TAUTAN WEBSITE LIVE]`
