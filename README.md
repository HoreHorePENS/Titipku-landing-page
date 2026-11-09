# Titipku — Landing Page

Titipku mempertemukan **penitip** (produsen camilan dan UMKM) dengan **warung** yang membuka titipan: warung kelontong, kantin, koperasi, dan toko oleh-oleh. Penitip mencari warung dan mengajukan titip dari HP. Warung menerima atau menolak, lalu mendapat bagi hasil dari barang yang laku. Setelah barang diantar, stok, barang terjual, dan tagihan tercatat di Titipku.

Repositori ini berisi landing page Titipku (route `/`) untuk lomba GTNIC 2026.

## Tech stack

- [Next.js](https://nextjs.org/) App Router, dirender statis
- TypeScript
- Tailwind CSS v4, dengan design token di `app/globals.css`
- `next/font`: Plus Jakarta Sans, IBM Plex Mono (angka), Caveat (tulisan tangan)

## Menjalankan

Butuh Node.js 20 atau lebih baru.

```bash
npm install
```

```bash
npm run dev
```

Lalu buka http://localhost:3000. Perintah lain: `npm run build`, `npm run start`, `npm run lint`.

## Struktur

```
app/
  layout.tsx              Layout root, font, metadata dasar
  globals.css             Design token, utilitas, animasi
  (marketing)/page.tsx    Halaman "/" dan metadata Open Graph
components/landing/
  content.ts              Semua teks dan tautan
  ui.tsx                  Container, tombol, judul section
  SiteHeader.tsx, SiteFooter.tsx
  Hero.tsx                Hero dengan demo cari warung → disetujui
  AudienceStrip.tsx       Untuk siapa
  ProblemSection.tsx      Masalahnya (sebelum/sesudah)
  NotebookSketch.tsx      Ilustrasi buku tulis (HTML/CSS)
  HowItWorksSection.tsx   Cara kerja, tab Penitip/Warung
  StepCards.tsx           Kartu visual tiap langkah
  BenefitsSection.tsx     Untung buat dua-duanya
  FeaturesSection.tsx     Fitur
  FaqSection.tsx          Pertanyaan umum
  TeamSection.tsx         Tim
  ClosingCta.tsx          CTA penutup
  ShopListMock.tsx        Mockup layar "Cari warung"
  RequestCardMock.tsx     Kartu permintaan titip di HP warung
  ProductCard.tsx         Kartu sisa/retur/terjual
  ProductFormMock.tsx     Formulir produk (langkah 1 penitip)
  ShopFormMock.tsx        Formulir pendaftaran warung (langkah 1 warung)
  MapSnippet.tsx          Potongan peta dekoratif dengan pin
  FormField.tsx           Isian formulir untuk mockup
  RoleCtas.tsx            Pasangan tombol penitip/warung (hero, CTA penutup)
  DashboardMock.tsx       Ringkasan untuk penitip
  motion/
    MatchDemo.tsx         Animasi hero
    RoleTabs.tsx          Tab yang dapat diakses keyboard
    MotionController.tsx  Animasi saat scroll dan FAQ
    HeaderScrollState.tsx Garis bawah header sticky setelah scroll
public/landing/
  produk/                 Foto produk (WebP, maks. 320×320 px)
  tim/                    Foto tim (WebP, maks. lebar 1200 px)
```

## Section

1. **Header**: menu Cara kerja, Manfaat, FAQ; tombol Masuk dan Daftar.
2. **Hero**: tombol untuk penitip dan warung, serta demo daftar warung sampai permintaan disetujui.
3. **Untuk siapa** (`#untuk-siapa`): jenis usaha penitip dan warung.
4. **Masalahnya** (`#masalah`): buku tulis dibandingkan dengan daftar warung di HP.
5. **Cara kerja** (`#cara-kerja`): lima langkah untuk penitip dan untuk warung.
6. **Untung buat dua-duanya** (`#manfaat`)
7. **Fitur** (`#fitur`)
8. **Pertanyaan umum** (`#faq`)
9. **Tim** (`#tim`): jika foto belum ada di `public/landing/tim/`, kartu menampilkan inisial.
10. **CTA penutup** dan footer

## Mengubah konten

Teks ada di `components/landing/content.ts`, kecuali catatan tulisan tangan (`NotebookSketch.tsx`) dan angka contoh di `DashboardMock.tsx`. Tautan diatur lewat `LINKS`:

| Kunci           | Nilai                              |
| --------------- | ---------------------------------- |
| `masuk`         | `/masuk`                           |
| `daftar`        | `/daftar`                          |
| `daftarPenitip` | `/daftar?peran=penitip`            |
| `daftarWarung`  | `/daftar?peran=warung`             |

## Aksesibilitas dan performa

- HTML semantik dengan heading berurutan; mockup diberi deskripsi untuk pembaca layar.
- Tab Cara kerja mengikuti pola WAI-ARIA Tabs (panah kiri/kanan, Home, End).
- Fokus keyboard terlihat, target sentuh minimal 44 px, kontras WCAG AA.
- Animasi tanpa library dan hanya memakai `transform`/`opacity`. HTML server selalu berisi keadaan akhir, sehingga konten tetap tampil tanpa JavaScript. Dengan `prefers-reduced-motion`, animasi dan scroll halus dimatikan.
- Tanpa scroll horizontal di lebar 360–1440 px.
- Lighthouse mobile (build produksi lokal): Performance 95, Accessibility 100, Best Practices 100, SEO 100.

## Tautan

- Website live: `[TAUTAN WEBSITE LIVE]`
