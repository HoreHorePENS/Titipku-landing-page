# Titipku — Landing Page

Titipku adalah platform titip jual dua sisi yang mempertemukan **penitip** (produsen camilan dan UMKM) dengan **warung** (warung kelontong, kantin, koperasi, toko oleh-oleh). Warung mendaftar jika membuka jasa titip dan mendapat pemasukan tambahan dari bagi hasil. Penitip mencari warung yang membuka titipan lalu mengajukan permintaan titip dari HP, tanpa harus datang untuk bertanya. Warung menerima atau menolak setiap permintaan. Setelah disetujui, penitip mengantar barang, lalu stok, barang terjual, dan tagihan tercatat di Titipku.

Repositori ini berisi **landing page** Titipku di route `/`. Halaman ini dibuat untuk lomba GTNIC 2026, berdasarkan desain "Titipku Landing" (section 3a, versi desktop 1440 px dan mobile 390 px).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router), dirender statis
- TypeScript
- Tailwind CSS v4 (design token di `app/globals.css`)
- `next/font`: Plus Jakarta Sans (teks UI), IBM Plex Mono (angka, jumlah, nominal uang), dan Caveat (tulisan tangan di ilustrasi buku tulis)

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
  content.ts            Semua teks & tautan (LINKS, META, HERO, … FAQ, TEAM)
  ui.tsx                Container, tombol, judul section, copy mobile/desktop
  SiteHeader.tsx        Header + navigasi anchor
  Hero.tsx              Hero dengan mockup Cari warung + kartu permintaan titip
  AudienceStrip.tsx     "Untuk siapa" (penitip & warung)
  ProblemSection.tsx    "Mau titip saja harus keliling dulu"
  NotebookSketch.tsx    Ilustrasi halaman buku tulis (HTML/CSS, tanpa gambar)
  HowItWorksSection.tsx "Cara kerja" dengan tab Penitip / Warung
  StepCards.tsx         Kartu visual mini tiap langkah "Cara kerja"
  BenefitsSection.tsx   "Untung buat dua-duanya" (#manfaat)
  FeaturesSection.tsx   "Yang dipakai tiap minggu" (#fitur)
  FaqSection.tsx        "Pertanyaan umum"
  TeamSection.tsx       "Tim di balik Titipku"
  ClosingCta.tsx        CTA penutup
  SiteFooter.tsx        Footer
  ShopListMock.tsx      Mockup HP layar "Cari warung" + ShopCard (komponen statis)
  RequestCardMock.tsx   Kartu "Permintaan titip baru" di HP warung, cap DISETUJUI
  ProductCard.tsx       Kartu produk sisa/retur/terjual (komponen statis)
  DashboardMock.tsx     Mockup ringkasan untuk penitip (komponen statis)
  motion/
    MatchDemo.tsx       Animasi hero: cari warung → ajukan → disetujui
    RoleTabs.tsx        Tab Penitip/Warung yang dapat diakses keyboard
    MotionController.tsx Animasi muncul saat scroll, linimasa langkah, FAQ
public/
  landing/produk/       Foto produk di kartu langkah (WebP, maks. 320×320 px)
  landing/tim/          Foto anggota tim (WebP, maks. lebar 1200 px)
```

## Section halaman

1. **Header**: logo, menu Cara kerja / Manfaat / FAQ (scroll halus ke `#cara-kerja`, `#manfaat`, `#faq`), Masuk, Daftar. Di mobile hanya logo + Masuk.
2. **Hero**: "Titip jual tanpa keliling tanya satu-satu", tombol "Cari warung untuk titip" dan "Daftarkan warung saya", tautan Coba Demo. Visual: layar Cari warung dan kartu permintaan titip yang berubah dari Menunggu ke Disetujui.
3. **Untuk siapa** (`#untuk-siapa`): dua kelompok, penitip dan warung.
4. **Masalahnya** (`#masalah`): sebelum (ilustrasi buku tulis) vs sesudah (daftar warung di HP) + 3 poin.
5. **Cara kerja** (`#cara-kerja`): tab Penitip dan Warung, masing-masing 4 langkah bernomor dengan kartu visual. Tanpa JavaScript kedua jalur tampil.
6. **Untung buat dua-duanya** (`#manfaat`): manfaat untuk penitip (ringkasan) dan warung (kartu permintaan).
7. **Fitur** (`#fitur`): Cari warung + pengajuan & persetujuan, pantau barang titipan, nota & tagihan.
8. **Pertanyaan umum** (`#faq`): accordion `<details>/<summary>` yang bisa dibuka dengan keyboard.
9. **Tim di balik Titipku** (`#tim`): foto dan peran anggota Tim HoreHore. Data di `TEAM` / `TEAM_INFO` (`content.ts`), foto potret WebP (maks. lebar 1200 px, tanpa EXIF) di `public/landing/tim/`; jika foto belum ada, tampil inisial nama.
10. **CTA penutup**: "Mulai titip, atau buka titipan di warungmu." dengan dua tombol yang sama seperti hero.
11. **Footer**

### Mengubah teks

Semua teks section ada di `components/landing/content.ts` (kecuali catatan tulisan tangan di `NotebookSketch.tsx` dan angka contoh di `DashboardMock.tsx`).

### Mengubah tautan

Semua tautan ada di `LINKS` dalam `components/landing/content.ts`:

| Kunci           | Nilai sekarang                     |
| --------------- | ---------------------------------- |
| `masuk`         | `/masuk`                           |
| `daftar`        | `/daftar`                          |
| `daftarPenitip` | `/daftar?peran=penitip`            |
| `daftarWarung`  | `/daftar?peran=warung`             |
| `cobaDemo`      | `/masuk?demo=1`                    |
| `kontak`        | `mailto:ammararsyad1205@gmail.com` |

### Ilustrasi buku tulis

Panel "Sebelum" memakai ilustrasi halaman buku tulis yang dibuat dengan HTML/CSS (`NotebookSketch.tsx`), bukan foto. Isi catatannya berupa teks HTML sehingga tetap bisa dibaca pembaca layar.

## Aksesibilitas & performa

- HTML semantik: `header`, `main`, `section` dengan heading berurutan, `footer`.
- Mockup HP, kartu permintaan, dan ringkasan diberi deskripsi teks untuk pembaca layar.
- Tab "Cara kerja" mengikuti pola WAI-ARIA Tabs (panah kiri/kanan, Home, End).
- Fokus keyboard terlihat, target sentuh minimal 44 px, kontras teks memenuhi WCAG AA.
- Scroll halus dimatikan untuk pengguna dengan `prefers-reduced-motion`.
- Animasi tanpa library (CSS + IntersectionObserver, lihat `components/landing/motion/`): demo hero (daftar warung → ajukan titip → cap DISETUJUI), linimasa "Cara kerja" yang diputar ulang saat tab berganti, dan elemen yang muncul saat di-scroll. Hanya `transform`/`opacity` (CLS 0). HTML server selalu berisi keadaan akhir, jadi konten tetap tampil tanpa JavaScript; dengan `prefers-reduced-motion` semua animasi dilewati.
- Responsif tanpa scroll horizontal di lebar 360–1440 px.
- Skor Lighthouse (mobile, build produksi lokal): **Performance 95, Accessibility 100, Best Practices 100, SEO 100**.

## Tautan

- Website live: `[TAUTAN WEBSITE LIVE]`
