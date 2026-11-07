# Titipku — Landing Page

Titipku adalah web app untuk UMKM yang menitipkan produk (konsinyasi) di banyak warung. Pelaku usaha mencatat sisa barang di rak dan retur saat kunjungan, tagihan dihitung otomatis, lalu nota dikirim ke pemilik warung lewat WhatsApp.

Repositori ini berisi **landing page** Titipku di route `/`. Halaman ini dibuat untuk lomba GTNIC 2026, berdasarkan desain "Titipku Landing" (section 3a, versi desktop 1440 px dan mobile 390 px).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), dirender statis
- TypeScript
- Tailwind CSS v4 (design token di `app/globals.css`)
- `next/font`: Plus Jakarta Sans (teks UI) dan IBM Plex Mono (angka, nomor nota, nominal uang)
- `next/image` untuk foto

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
  content.ts            LINKS: semua tautan (masuk, daftar, demo, kontak)
  ui.tsx                Container, tombol, judul section, copy mobile/desktop
  SiteHeader.tsx        Header + navigasi anchor
  Hero.tsx              Hero dengan mockup HP dan nota
  ProblemSection.tsx    "Satu warung, satu halaman buku…"
  HowItWorksSection.tsx "Lima menit di depan rak"
  FeaturesSection.tsx   "Yang dipakai tiap minggu"
  ClosingCta.tsx        CTA penutup
  SiteFooter.tsx        Footer
  PhoneVisitMock.tsx    Mockup HP layar Catat Kunjungan (komponen statis)
  ReceiptMock.tsx       Potongan nota bercap status pembayaran (komponen statis)
public/
  landing/              Aset gambar landing page (lihat catatan foto di bawah)
```

## Section halaman

1. **Header**: logo, menu Masalahnya / Cara kerja / Fitur (scroll halus ke `#masalah`, `#cara-kerja`, `#fitur`), Masuk, Daftar Gratis. Di mobile hanya logo + Masuk.
2. **Hero**: judul, tombol Daftar Gratis & Coba Demo, mockup HP layar Catat Kunjungan + nota bercap BELUM LUNAS.
3. **Masalahnya**: perbandingan sebelum (buku tulis) dan sesudah (Titipku) + 3 poin.
4. **Cara kerja**: 3 langkah bernomor yang terhubung garis.
5. **Fitur**: 1 fitur besar (Catat Kunjungan) + 3 fitur kecil.
6. **CTA penutup**: "Tutup buku tulisnya minggu ini."
7. **Footer**

### Mengubah tautan

Semua tautan ada di `LINKS` dalam `components/landing/content.ts`:

| Kunci    | Nilai sekarang       |
| -------- | -------------------- |
| `masuk`  | `/masuk`             |
| `daftar` | `/daftar`            |
| `demo`   | `/masuk?demo=1`      |
| `kontak` | `mailto:[EMAIL TIM]` |

### Foto buku tulis

Taruh foto di `public/landing/buku-tulis.jpg`, lalu jalankan build ulang. Jika file ada, foto ditampilkan dengan `next/image` dalam bingkai yang sama seperti desain. Jika belum ada, ditampilkan placeholder berarsir.

## Aksesibilitas & performa

- HTML semantik: `header`, `main`, `section` dengan heading berurutan, `footer`.
- Mockup HP dan nota diberi deskripsi teks untuk pembaca layar.
- Fokus keyboard terlihat, target sentuh minimal 44 px, kontras teks memenuhi WCAG AA.
- Scroll halus dimatikan untuk pengguna dengan `prefers-reduced-motion`.
- Responsif tanpa scroll horizontal di lebar 360–1440 px.
- Skor Lighthouse (mobile, build produksi lokal): **Performance 98, Accessibility 100, Best Practices 100, SEO 100**.

## Tautan

- Website live: `[TAUTAN WEBSITE LIVE]`
