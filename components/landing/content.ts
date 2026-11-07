/**
 * Teks dan tautan landing page. Ubah nilainya di sini tanpa perlu menyentuh
 * komponen. Teks dengan `mobile`/`desktop` tampil sesuai lebar layar.
 */

/** Semua tautan landing page. */
export const LINKS = {
  masuk: "/masuk",
  daftar: "/daftar",
  daftarPenitip: "/daftar?peran=penitip",
  daftarWarung: "/daftar?peran=warung",
  cobaDemo: "/masuk?demo=1",
  kontak: "mailto:ammararsyad1205@gmail.com",
} as const;

/** Judul & deskripsi halaman (tab browser, mesin pencari, Open Graph). */
export const META = {
  title: "Titipku — Titip jual tanpa keliling tanya satu-satu",
  description:
    "Titipku mempertemukan penitip (produsen camilan dan UMKM) dengan warung yang membuka titipan. Penitip mengajukan titip dari HP, warung menerima atau menolak, lalu stok, barang terjual, dan tagihan tercatat untuk keduanya.",
  ogTitle: "Titipku — Penitip ketemu warung yang membuka titipan",
} as const;

/* ------------------------------------------------------------------ */
/* Header, CTA penutup, footer                                         */
/* ------------------------------------------------------------------ */

export const HEADER = {
  nav: [
    { href: "#cara-kerja", label: "Cara kerja" },
    { href: "#manfaat", label: "Manfaat" },
    { href: "#faq", label: "FAQ" },
  ],
  navLabel: "Navigasi utama",
  masuk: "Masuk",
  daftar: "Daftar",
} as const;

export const CLOSING_CTA = {
  title: "Mulai titip, atau buka titipan di warungmu.",
} as const;

export const FOOTER = {
  brand: "Titipku",
  tagline: "Dibuat untuk GTNIC 2026",
  kontak: "Kontak",
} as const;

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const HERO = {
  eyebrow: "Untuk penitip dan warung",
  title: "Titip jual tanpa keliling tanya satu-satu",
  subtitle:
    "Penitip menemukan warung yang membuka titipan, warung mendapat pemasukan tambahan. Pengajuan, persetujuan, sampai pantau barang titipan, semuanya dari HP.",
  ctaPenitip: "Cari warung untuk titip",
  ctaWarung: "Daftarkan warung saya",
  cobaDemo: "Coba Demo",
  note: "Jalan di HP Android biasa. Tetap bisa mencatat saat sinyal lemah.",
  /** Deskripsi visual hero untuk pembaca layar. */
  visualLabel:
    "Contoh alur Titipku: penitip melihat daftar warung yang membuka titipan di sekitar Rungkut, Surabaya, lalu mengajukan titip ke Warung Bu Sri. Di HP warung, permintaan titip dari Keripik Pisang Rina berisi 40 bungkus disetujui.",
} as const;

/* ------------------------------------------------------------------ */
/* Mockup "Cari warung" (ShopListMock) dan permintaan titip            */
/* ------------------------------------------------------------------ */

export type Shop = {
  name: string;
  area: string;
  /** Jenis produk yang diterima. */
  accepts: string;
  open: boolean;
};

export const SHOP_LIST = {
  time: "09.12",
  title: "Cari warung",
  search: "Rungkut, Surabaya",
  city: "Surabaya",
  chips: [
    { label: "Buka titipan", active: false },
    { label: "Makanan ringan", active: true },
  ],
  acceptsPrefix: "Menerima",
  openLabel: "Buka titipan",
  fullLabel: "Penuh",
  action: "Ajukan titip",
  shops: [
    { name: "Warung Bu Sri", area: "Rungkut", accepts: "Keripik, kue kering", open: true },
    { name: "Kantin SMPN 3", area: "Gubeng", accepts: "Camilan, minuman", open: false },
    { name: "Koperasi Kantor Pos", area: "Genteng", accepts: "Camilan, frozen food", open: true },
    {
      name: "Toko Oleh-oleh Barokah",
      area: "Wonokromo",
      accepts: "Keripik, sambal kemasan",
      open: true,
    },
  ] satisfies Shop[],
  label:
    "Layar Cari warung di Titipku untuk area Rungkut, Surabaya: Warung Bu Sri (Rungkut) buka titipan, Kantin SMPN 3 (Gubeng) penuh, Koperasi Kantor Pos (Genteng) buka titipan, Toko Oleh-oleh Barokah (Wonokromo) buka titipan.",
} as const;

export const REQUEST = {
  device: "HP warung · Warung Bu Sri",
  title: "Permintaan titip baru",
  fromLabel: "Dari",
  from: "Keripik Pisang Rina",
  productsLabel: "Produk",
  products: "Keripik Pisang Original 100 g, Balado 100 g",
  qtyLabel: "Jumlah",
  qty: "40 bungkus",
  pending: "Menunggu",
  approved: "Disetujui",
  reject: "Tolak",
  accept: "Terima",
  stamp: "DISETUJUI",
} as const;

/* ------------------------------------------------------------------ */
/* Untuk siapa                                                         */
/* ------------------------------------------------------------------ */

export const AUDIENCE = {
  title: "Dibuat untuk dua sisi titip jual",
  groups: [
    {
      title: "Penitip",
      desc: "Produsen camilan dan UMKM yang ingin menitipkan produknya.",
      items: ["Keripik & camilan", "Kue kering", "Sambal & bumbu kemasan", "Frozen food"],
    },
    {
      title: "Warung",
      desc: "Tempat yang membuka titipan dan mendapat bagi hasil.",
      items: ["Warung kelontong", "Kantin sekolah/kantor", "Koperasi", "Toko oleh-oleh"],
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Masalahnya                                                          */
/* ------------------------------------------------------------------ */

export const PROBLEM = {
  title: "Mau titip saja harus keliling dulu",
  before: { mobile: "Sebelum", desktop: "Sebelum · buku tulis" },
  after: { mobile: "Sesudah", desktop: "Sesudah · Titipku, cari dari HP" },
  notebookCaption: "Ilustrasi: catatan titipan di buku tulis",
  points: [
    {
      title: "Tidak perlu datang hanya untuk bertanya",
      desktop: "Lihat warung yang membuka titipan langsung dari HP.",
      mobile: "Lihat warung yang buka titipan dari HP.",
    },
    {
      title: "Warung tetap yang memutuskan",
      desktop: "Setiap permintaan titip bisa diterima atau ditolak oleh warung.",
      mobile: "Setiap permintaan bisa diterima atau ditolak.",
    },
    {
      title: "Barang titipan tetap terpantau",
      desktop: "Stok, barang terjual, dan tagihan tercatat untuk tiap warung.",
      mobile: "Stok, terjual, dan tagihan tercatat.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Cara kerja                                                          */
/* ------------------------------------------------------------------ */

export type StepCardId =
  | "search"
  | "apply"
  | "deliver"
  | "monitor"
  | "register"
  | "review"
  | "sell"
  | "share";

export type Step = { title: string; desc: string; mobile: string; card: StepCardId };

export const HOW_IT_WORKS = {
  title: "Dari cari warung sampai bagi hasil",
  subtitle: "Pilih peranmu untuk melihat langkahnya. Semuanya dikerjakan dari HP.",
  tabsLabel: "Pilih peran",
  tracks: [
    {
      id: "penitip",
      tab: "Penitip",
      steps: [
        {
          title: "Cari warung yang membuka titipan",
          desc: "Saring berdasarkan area dan jenis produk. Langsung terlihat warung yang masih menerima titipan.",
          mobile: "Saring per area dan jenis produk.",
          card: "search",
        },
        {
          title: "Ajukan titip dari HP",
          desc: "Pilih produk dan jumlahnya, lalu kirim permintaan ke warung tanpa perlu datang dulu.",
          mobile: "Kirim permintaan tanpa datang dulu.",
          card: "apply",
        },
        {
          title: "Antar barang setelah disetujui",
          desc: "Begitu warung menerima, antar barangnya. Jumlah titipan langsung tercatat.",
          mobile: "Antar saat warung sudah setuju.",
          card: "deliver",
        },
        {
          title: "Pantau stok, terjual, dan tagihan",
          desc: "Lihat sisa di rak, barang terjual, dan tagihan tiap warung, lalu hubungi warung bila perlu.",
          mobile: "Sisa, terjual, dan tagihan tercatat.",
          card: "monitor",
        },
      ],
    },
    {
      id: "warung",
      tab: "Warung",
      steps: [
        {
          title: "Daftarkan warung dan jenis titipan yang diterima",
          desc: "Isi lokasi dan jenis produk yang mau diterima. Tandai penuh saat rak sedang tidak ada tempat.",
          mobile: "Isi lokasi dan jenis produk.",
          card: "register",
        },
        {
          title: "Terima atau tolak permintaan",
          desc: "Lihat produk dan jumlahnya dulu. Warung yang memutuskan.",
          mobile: "Warung yang memutuskan.",
          card: "review",
        },
        {
          title: "Jual barang titipan",
          desc: "Pajang di rak seperti biasa. Stok dan barang terjual tercatat di Titipku.",
          mobile: "Pajang di rak seperti biasa.",
          card: "sell",
        },
        {
          title: "Dapat bagi hasil sesuai kesepakatan",
          desc: "Pemasukan tambahan dari setiap barang titipan yang laku, sesuai kesepakatan dengan penitip.",
          mobile: "Pemasukan tambahan dari barang yang laku.",
          card: "share",
        },
      ],
    },
  ],
} as const satisfies {
  title: string;
  subtitle: string;
  tabsLabel: string;
  tracks: readonly { id: string; tab: string; steps: readonly Step[] }[];
};

/**
 * Isi kartu visual tiap langkah "Cara kerja" (data contoh). `label` dibacakan
 * pembaca layar sebagai ringkasan kartu.
 */
export const STEP_CARDS = {
  search: {
    label:
      "Contoh: pencarian warung di Rungkut, Surabaya. Warung Bu Sri buka titipan, Kantin SMPN 3 penuh.",
  },
  apply: {
    label:
      "Contoh: permintaan titip ke Warung Bu Sri berisi Keripik Pisang Original 20 bungkus dan Balado 20 bungkus, total 40 bungkus, sudah terkirim.",
    title: "Ajukan titip ke Warung Bu Sri",
    items: [
      { name: "Pisang Original 100 g", qty: "20" },
      { name: "Pisang Balado 100 g", qty: "20" },
    ],
    totalLabel: "Jumlah",
    total: "40 bungkus",
    sent: "Permintaan terkirim ✓",
  },
  deliver: {
    label:
      "Contoh: permintaan titip dari Keripik Pisang Rina, 40 bungkus, sudah disetujui Warung Bu Sri. Barang siap diantar.",
    note: "Siap diantar ke Warung Bu Sri",
  },
  monitor: {
    label:
      "Contoh: Keripik Pisang Original di Warung Bu Sri, sisa di rak 6, retur 2, terjual 17 senilai Rp51.000.",
  },
  register: {
    label:
      "Contoh: profil Warung Bu Sri di Rungkut, menerima keripik dan kue kering, status buka titipan.",
    name: "Warung Bu Sri",
    area: "Rungkut, Surabaya",
    accepts: ["Keripik", "Kue kering"],
    toggle: "Buka titipan",
  },
  review: {
    label:
      "Contoh: permintaan titip baru dari Keripik Pisang Rina, 40 bungkus, menunggu keputusan warung: tolak atau terima.",
  },
  sell: {
    label:
      "Contoh: barang titipan di rak Warung Bu Sri. Pisang Original terjual 17, Pisang Balado terjual 16, Singkong Pedas terjual 9.",
    title: "Titipan di rak",
    soldLabel: "terjual",
    items: [
      { name: "Pisang Original", sold: "17" },
      { name: "Pisang Balado", sold: "16" },
      { name: "Singkong Pedas", sold: "9" },
    ],
  },
  share: {
    label:
      "Contoh: penjualan barang titipan Rp143.000 di Warung Bu Sri, bagi hasil sesuai kesepakatan dengan penitip.",
    rows: [{ label: "Penjualan titipan", value: "Rp143.000" }],
    note: "Bagi hasil sesuai kesepakatan",
  },
} as const satisfies Record<StepCardId, { label: string; [key: string]: unknown }>;

/* ------------------------------------------------------------------ */
/* Manfaat (#manfaat)                                                  */
/* ------------------------------------------------------------------ */

export const BENEFITS = {
  title: "Untung buat dua-duanya",
  columns: [
    {
      role: "Penitip",
      title: "Tambah titik jualan tanpa keliling",
      points: [
        "Cari warung berdasarkan area",
        "Ajukan titip dari HP",
        "Pantau stok, terjual, dan tagihan di setiap warung",
      ],
    },
    {
      role: "Warung",
      title: "Rak terisi, pemasukan bertambah",
      points: [
        "Tentukan sendiri titipan yang diterima",
        "Terima atau tolak setiap permintaan",
        "Dapat bagi hasil dari barang yang laku, tanpa modal stok",
      ],
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Fitur (#fitur)                                                      */
/* ------------------------------------------------------------------ */

export const FEATURES = {
  title: "Yang dipakai tiap minggu",
  main: {
    title: "Cari warung",
    desktop:
      "Daftar warung di sekitar area yang dipilih, lengkap dengan jenis produk yang diterima dan status titipannya.",
    mobile: "Lihat warung di sekitar yang membuka titipan, lalu ajukan titip dari HP.",
    checks: [
      "Saring berdasarkan area dan jenis produk",
      "Label Buka titipan atau Penuh di setiap warung",
      "Ajukan titip langsung dari kartu warung",
    ],
  },
  small: [
    {
      title: "Pengajuan & persetujuan",
      desktop: "Permintaan titip berisi produk dan jumlahnya. Warung menerima atau menolak.",
      mobile: "Warung menerima atau menolak.",
    },
    {
      title: "Pantau barang titipan",
      desktop: "Sisa di rak, retur, dan barang terjual tercatat untuk setiap warung.",
      mobile: "Sisa, retur, dan terjual per warung.",
    },
    {
      title: "Nota & tagihan",
      desktop: "Tagihan dihitung dari barang terjual; sisa yang belum dibayar ikut di nota berikutnya.",
      mobile: "Tagihan dihitung dari barang terjual.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* FAQ (#faq)                                                          */
/* ------------------------------------------------------------------ */

export const FAQ = {
  title: "Pertanyaan umum",
  items: [
    {
      q: "Apakah warung harus mendaftar?",
      a: "Ya, warung mendaftar agar muncul di pencarian penitip dan bisa menerima atau menolak permintaan titip.",
    },
    {
      q: "Apakah warung bisa menolak titipan?",
      a: "Bisa. Setiap permintaan titip harus disetujui warung lebih dulu.",
    },
    {
      q: "Apakah penitip perlu datang ke warung untuk bertanya?",
      a: "Tidak. Penitip melihat warung yang membuka titipan dan mengajukan permintaan dari HP. Penitip datang saat mengantar barang yang sudah disetujui.",
    },
    {
      q: "Bagaimana pembagian hasilnya?",
      a: "Sesuai kesepakatan penitip dan warung. Titipku mencatat barang terjual dan tagihannya.",
    },
    {
      q: "Apakah perlu menginstal aplikasi?",
      a: "Tidak. Titipku dibuka dari browser di HP atau laptop.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Data setiap akun dipisahkan dan hanya bisa dibuka oleh pemiliknya.",
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Tim                                                                 */
/* ------------------------------------------------------------------ */

/** Data tim untuk section "Tim di balik Titipku" (#tim). */
export const TEAM_INFO = {
  namaTim: "HoreHore",
  institusi: "Politeknik Elektronika Negeri Surabaya",
} as const;

/**
 * Foto potret WebP di public/landing/tim/ (maks. lebar 1200 px, tanpa EXIF).
 * Jika file belum ada saat build, kartu menampilkan inisial nama.
 */
export const TEAM = [
  { nama: "Daffi' Achmad Wijayanto", peran: "Frontend", foto: "/landing/tim/anggota-1.webp" },
  { nama: "Muhammad Farid Al Hasan", peran: "Backend", foto: "/landing/tim/anggota-2.webp" },
  { nama: "Andi Muhammad Ammar Arsyad", peran: "Frontend", foto: "/landing/tim/anggota-3.webp" },
] as const;
