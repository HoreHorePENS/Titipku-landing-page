// All landing page copy and links. Fields with `mobile`/`desktop` switch at the md breakpoint.

export const LINKS = {
  masuk: "https://titipku.faridpens.my.id/auth",
  daftar: "https://titipku.faridpens.my.id/auth",
  daftarPenitip: "https://titipku.faridpens.my.id/auth",
  daftarWarung: "https://titipku.faridpens.my.id/auth",
} as const;

export const META = {
  title: "Titipku — Titip jual tanpa keliling tanya satu-satu",
  description:
    "Titipku mempertemukan penitip (produsen camilan dan UMKM) dengan warung yang membuka titipan. Penitip mengajukan titip dari HP, warung menerima atau menolak, lalu stok, barang terjual, dan tagihan tercatat untuk keduanya.",
  ogTitle: "Titipku — Penitip ketemu warung yang membuka titipan",
} as const;

// Header, closing CTA, footer

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
} as const;

// Hero

export const HERO = {
  eyebrow: "Untuk penitip dan warung",
  title: "Titip jual tanpa keliling tanya satu-satu",
  subtitle:
    "Penitip menemukan warung yang membuka titipan, warung mendapat pemasukan tambahan. Pengajuan, persetujuan, sampai pantau barang titipan, semuanya dari HP.",
  ctaPenitip: "Cari warung untuk titip",
  ctaWarung: "Daftarkan warung saya",
  note: "Jalan di HP Android biasa. Tetap bisa mencatat saat sinyal lemah.",
  requestDevice: "HP toko · Toko Kelontong Pak Joko",
  visualLabel:
    "Contoh alur Titipku: penitip membuka peta lalu daftar toko mitra di Surabaya dan mengajukan titip ke Toko Kelontong Pak Joko. Di HP toko, permintaan titip dari Keripik Tempe Mbak Ani berisi 30 bungkus disetujui.",
} as const;

// Shop list and request card mockups

export type Shop = {
  name: string;
  category: string;
  address: string;
  note: string;
  status: "open" | "partner";
};

export const SHOP_LIST = {
  time: "09.12",
  app: {
    initial: "T",
    name: "Titipku",
    role: "Penitip",
    business: "Keripik Tempe Mbak Ani",
    avatar: "A",
  },
  badge: "Peta Titip Jual",
  title: "Peta Toko Mitra",
  subtitle: "Temukan toko fisik yang siap menerima barang titipan konsinyasi produk UMKM Anda.",
  views: { map: "Peta", list: "Daftar (2)" },
  search: "Cari toko berdasarkan nama, alamat, atau kata kunci",
  mapArea: "Sekitar Sukolilo",
  mapAttribution: "© OpenStreetMap contributors",
  chips: [
    { label: "Semua Toko", active: true },
    { label: "Warung Makan", active: false },
    { label: "Toko Kelontong", active: false },
  ],
  openLabel: "Bisa Dititipi",
  partnerLabel: "Mitra Aktif",
  whatsapp: "WhatsApp",
  action: "Titip Barang",
  nav: ["Beranda", "Bukti Nota", "Toko Mitra", "Tagihan", "Produk"],
  activeNav: "Toko Mitra",
  shops: [
    {
      name: "Toko Kelontong Pak Joko",
      category: "Toko Kelontong",
      address: "Jl. Kertajaya Indah No. 45, Sukolilo, Surabaya",
      note: "Toko kelontong lengkap untuk kebutuhan harian warga sekitar.",
      status: "open",
    },
    {
      name: "Warung Bu Sri",
      category: "Warung Makan",
      address: "Jl. Ngagel Jaya Selatan No. 21, Gubeng, Surabaya",
      note: "Warung makan & jajanan rumahan dekat kampus, ramai pembeli tiap sore.",
      status: "partner",
    },
  ] satisfies Shop[],
  label:
    "Layar Peta Toko Mitra di aplikasi Titipku untuk penitip, tampilan daftar: Toko Kelontong Pak Joko (Jl. Kertajaya Indah No. 45, Sukolilo, Surabaya) bisa dititipi; Warung Bu Sri (Jl. Ngagel Jaya Selatan No. 21, Gubeng, Surabaya) sudah menjadi mitra aktif.",
} as const;

export const REQUEST = {
  device: "HP warung · Warung Bu Sri",
  title: "Permintaan titip baru",
  fromLabel: "Dari",
  from: "Keripik Tempe Mbak Ani",
  productsLabel: "Produk",
  products: "Keripik Tempe Original 100 g, Pedas 100 g",
  qtyLabel: "Jumlah",
  qty: "30 bungkus",
  pending: "Menunggu",
  approved: "Disetujui",
  reject: "Tolak",
  accept: "Terima",
} as const;

// Audience

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
      desc: "Tempat yang membuka titipan dan mencatat penjualan dengan nota.",
      items: ["Warung kelontong", "Kantin sekolah/kantor", "Koperasi", "Toko oleh-oleh"],
    },
  ],
} as const;

// Problem

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

// How it works

export type StepCardId =
  | "product"
  | "search"
  | "apply"
  | "deliver"
  | "monitor"
  | "shop"
  | "accepts"
  | "review"
  | "sell"
  | "share";

export type Step = { title: string; desc: string; card: StepCardId };

export const HOW_IT_WORKS = {
  title: "Dari cari warung sampai nota penjualan",
  subtitle: "Pilih peranmu untuk melihat langkahnya. Semuanya dikerjakan dari HP.",
  tabsLabel: "Pilih peran",
  tracks: [
    {
      id: "penitip",
      tab: "Penitip",
      steps: [
        {
          title: "Daftarkan produkmu",
          desc: "Isi nama, ukuran, harga titip, dan umur simpan sekali saja. Data ini dipakai setiap kali mengajukan titip.",
          card: "product",
        },
        {
          title: "Cari warung terdekat",
          desc: "Lihat warung di sekitarmu lewat peta, lalu saring berdasarkan area dan jenis produk. Langsung tahu mana yang masih membuka titipan.",
          card: "search",
        },
        {
          title: "Ajukan titip dari HP",
          desc: "Pilih produk dan jumlahnya, lalu kirim permintaan. Tidak perlu datang hanya untuk bertanya.",
          card: "apply",
        },
        {
          title: "Antar setelah disetujui",
          desc: "Begitu warung menerima, antar barangnya. Jumlah titipan langsung tercatat.",
          card: "deliver",
        },
        {
          title: "Pantau dan tagih",
          desc: "Lihat sisa barang, yang terjual, dan tagihan di setiap warung, lalu hubungi warung bila perlu.",
          card: "monitor",
        },
      ],
    },
    {
      id: "warung",
      tab: "Warung",
      steps: [
        {
          title: "Daftarkan warungmu",
          desc: "Isi nama, kategori, alamat, dan foto warung, lalu tandai lokasinya di peta. Warungmu langsung muncul di pencarian penitip sekitar.",
          card: "shop",
        },
        {
          title: "Buka atau tutup titipan",
          desc: "Warung yang sedang menerima titipan tampil di peta penitip. Rak penuh? Tutup titipan sementara, lalu buka lagi kapan saja.",
          card: "accepts",
        },
        {
          title: "Terima atau tolak pengajuan",
          desc: "Lihat penitip, jumlah barang, dan nilai titipnya dulu. Warung yang memutuskan.",
          card: "review",
        },
        {
          title: "Cek detail titipan",
          desc: "Lihat produk, jumlah, masa simpan, dan harga titip dari setiap mitra. Hubungi penitip lewat WhatsApp bila perlu.",
          card: "sell",
        },
        {
          title: "Catat nota penjualan",
          desc: "Hitung barang terjual dan retur, pilih status bayar, lalu terbitkan nota. Kirim lewat WhatsApp atau cetak sebagai PDF.",
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

// `label` is read by screen readers as a summary of each card.
export const STEP_CARDS = {
  product: {
    label:
      "Contoh: formulir tambah produk Keripik Tempe Original 100 g dengan foto, harga titip Rp8.000, harga jual Rp10.000, masa simpan 90 hari, status aktif.",
    title: "Tambah Produk Baru",
    photo: { label: "Foto produk", actions: ["Ganti foto", "Ambil dari kamera", "Hapus"] },
    fields: [
      { label: "Nama Produk", value: "Keripik Tempe Original 100 g" },
      { label: "Harga Titip", value: "Rp8.000" },
      { label: "Harga Jual ke Konsumen (opsional)", value: "Rp10.000" },
      { label: "Masa Simpan (Hari)", value: "90" },
    ],
    active: "Status Produk Aktif",
    cancel: "Batal",
    submit: "Tambah Produk",
  },
  search: {
    label:
      "Contoh: peta toko mitra di sekitar Sukolilo, Surabaya. Toko Kelontong Pak Joko terdekat dan bisa dititipi.",
  },
  apply: {
    label:
      "Contoh: modal ajukan titip-jual ke Toko Kelontong Pak Joko berisi 3 produk pilihan senilai Rp25.000.",
    title: "Ajukan titip-jual",
    shop: "Toko Kelontong Pak Joko · Toko Kelontong",
    address: "Jl. Kertajaya Indah No. 45, Sukolilo, Surabaya",
    shopNeedsTitle: "Produk yang dicari toko",
    shopNeeds: "Toko kelontong lengkap untuk kebutuhan harian warga sekitar.",
    selectedLabel: "3 dipilih",
    sectionTitle: "Produk yang ingin dititipkan",
    items: [
      { name: "Keripik Tempe Daun Je...", price: "Rp8.500", qty: "1" },
      { name: "Keripik Tempe Original ...", price: "Rp8.000", qty: "1" },
      { name: "Keripik Tempe Pedas 1...", price: "Rp8.500", qty: "1" },
    ],
    noteLabel: "Pesan untuk toko (opsional)",
    notePlaceholder: "Contoh: Kemasan standing pouch, tahan 3 bulan. Bisa antar setiap Senin.",
    summaryQty: "3 pcs",
    summaryValueLabel: "Perkiraan nilai titip",
    summaryValue: "Rp25.000",
    cancel: "Batal",
    submit: "Kirim pengajuan",
  },
  deliver: {
    label:
      "Contoh: notifikasi pengajuan disetujui dari Toko Kelontong Pak Joko kini menjadi mitramu.",
    title: "Notifikasi",
    items: [
      {
        title: "Pengajuan disetujui",
        time: "2 mnt lalu",
        message: "Toko Kelontong Pak Joko kini menjadi mitramu.",
        action: "Lihat",
      },
      {
        title: "Pengajuan disetujui",
        time: "57 mnt lalu",
        message: "Warung Bu Sri kini menjadi mitramu.",
        action: "Lihat",
      },
    ],
  },
  monitor: {
    label:
      "Contoh: layar nota N-261110-0002 di Warung Bu Sri dengan status BELUM LUNAS, total tagihan Rp132.500 dan sisa piutang Rp132.500.",
    invoiceNo: "Nota N-261110-0002",
    statusBadge: "BELUM LUNAS",
    meta: "10 Nov 2026, 09.30 • Warung Bu Sri (Jl. Ngagel Jaya Selatan No. 21)",
    receivedBy: "Sri Wahyuni",
    partner: "Sri Wahyuni",
    sectionTitle: "RINCIAN BARANG TITIPAN",
    items: [
      { variant: "Daun Jeruk", desc: "100 g", sold: "3", subtotal: "Rp25.500" },
      { variant: "Original", desc: "100 g", sold: "7", subtotal: "Rp56.000" },
      { variant: "Pedas", desc: "100 g", sold: "6", subtotal: "Rp51.000" },
    ],
    totalLabel: "Total Tagihan:",
    totalValue: "Rp132.500",
    paidLabel: "Telah Dibayar:",
    paidValue: "Rp0",
    remainingLabel: "Sisa Piutang:",
    remainingValue: "Rp132.500",
    whatsapp: "WhatsApp",
    exportPdf: "Export PDF",
  },
  shop: {
    label:
      "Contoh: formulir pendaftaran Warung Bu Sri sebagai pemilik toko dengan nama, kategori Warung Makan, alamat, foto warung, dan penanda GPS di peta.",
    role: "Pemilik Toko",
    name: "Warung Bu Sri",
    category: "Warung Makan",
    photo: "warung.jpg",
    address: "Jl. Ngagel Jaya Selatan No. 21, Gubeng, Surabaya",
    gps: "Gunakan Lokasi GPS",
    submit: "Daftarkan Warung",
  },
  accepts: {
    label:
      "Contoh: kartu Warung Bu Sri dengan badge Warung Makan, Menerima Titipan di Peta, dan tombol Tutup Titipan Sementara.",
    shopName: "Warung Bu Sri",
    category: "Warung Makan",
    statusBadge: "Menerima Titipan di Peta",
    address: "Jl. Ngagel Jaya Selatan No. 21, Gubeng, Surabaya",
    coords: "Koordinat: -7.2905, 112.7521",
    action: "Tutup Titipan Sementara",
  },
  review: {
    label:
      "Contoh: kartu pengajuan Keripik Tempe Mbak Ani berisi 3 produk, 16 pcs senilai Rp132.500 dengan tombol Tolak, Setujui, dan Detail.",
    title: "Keripik Tempe Mbak Ani",
    statusBadge: "Menunggu persetujuan",
    meta: "Ani Lestari · 10 Nov 2026",
    summary: "3 produk · 16 pcs · nilai titip Rp132.500",
    reject: "Tolak",
    accept: "Setujui",
    detail: "Detail",
  },
  sell: {
    label:
      "Contoh: detail rencana titipan dari Keripik Tempe Mbak Ani berisi produk, masa simpan, harga titip, dan tombol buat nota penjualan.",
    partner: "Keripik Tempe Mbak Ani",
    meta: "Mitra aktif · diajukan 10 Nov 2026",
    owner: "Ani Lestari",
    address: "Jl. Sukolilo No. 12, Surabaya",
    sectionTitle: "Rencana titipan (3 produk)",
    items: [
      {
        name: "Keripik Tempe Original 100 g",
        details: "7 pcs · tahan 90 hari · jual Rp10.000",
        price: "Rp8.000",
      },
      {
        name: "Keripik Tempe Pedas 100 g",
        details: "6 pcs · tahan 90 hari · jual Rp10.000",
        price: "Rp8.500",
      },
    ],
    totalLabel: "16 pcs · total nilai titip",
    totalValue: "Rp132.500",
    action: "Buat nota penjualan",
  },
  share: {
    label:
      "Contoh: konfirmasi pembayaran nota penjualan untuk Keripik Tempe Mbak Ani dengan 16 terjual, 1 retur, total tagihan Rp132.500.",
    title: "Konfirmasi Pembayaran Nota",
    subtitle: "Tentukan status pembayaran hasil penjualan untuk Keripik Tempe Mbak Ani.",
    partner: "Keripik Tempe Mbak Ani (Ani Lestari)",
    sold: "16 bungkus / pcs",
    returned: "1 bks",
    total: "Rp132.500",
    statusLabel: "Status Pembayaran ke Penitip",
    statusValue: "Lunas (Langsung Dibayarkan Hari Ini)",
    methodLabel: "Metode Pembayaran",
    methodValue: "Tunai (Cash)",
    back: "← Kembali",
    submit: "Terbitkan Nota (Rp132.500)",
  },
} as const satisfies Record<StepCardId, { label: string; [key: string]: unknown }>;

// Benefits

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
        "Dapat pemasukan dari barang yang laku, tanpa modal stok",
      ],
    },
  ],
} as const;

// Features

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

// FAQ

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

// Team

export const TEAM_INFO = {
  teamName: "HoreHore",
  institution: "Politeknik Elektronika Negeri Surabaya",
} as const;

// Members without a photo in public/landing/tim/ get an initials placeholder.
export const TEAM = [
  { name: "Daffi' Achmad Wijayanto", role: "Frontend", photo: "/landing/tim/anggota-1.webp" },
  { name: "Muhammad Farid Al Hasan", role: "Backend", photo: "/landing/tim/anggota-2.webp" },
  { name: "Andi Muhammad Ammar Arsyad", role: "Frontend", photo: "/landing/tim/anggota-3.webp" },
] as const;
