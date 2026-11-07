/**
 * Semua tautan landing page diatur dari sini. Ubah nilainya tanpa perlu
 * menyentuh komponen.
 */
export const LINKS = {
  masuk: "/masuk",
  daftar: "/daftar",
  demo: "/masuk?demo=1",
  // TODO(kontak): ganti [EMAIL TIM] dengan alamat email tim yang asli.
  kontak: "mailto:ammararsyad1205@gmail.com",
} as const;

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
