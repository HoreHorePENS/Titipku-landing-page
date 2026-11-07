import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { TEAM, TEAM_INFO } from "./content";
import { container, SectionTitle } from "./ui";

/** Foto hanya dipakai jika file-nya ada saat build (hindari 404). */
function hasFile(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

/** Inisial dari dua kata pertama nama, mis. "Daffi' Achmad …" → "DA". */
function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word.replace(/[^A-Za-z]/g, "").charAt(0))
    .join("")
    .toUpperCase();
}

const MEMBERS = TEAM.map((member) => ({
  ...member,
  photo: hasFile(member.foto) ? member.foto : null,
}));

export function TeamSection() {
  return (
    <section id="tim" aria-labelledby="tim-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-8 py-12 md:gap-12 md:py-20`}>
        <div className="flex flex-col gap-2 md:gap-3">
          <SectionTitle id="tim-title">Tim di balik Titipku</SectionTitle>
          <p className="max-w-[640px] text-[15px] leading-[23px] text-ink-muted md:text-lg md:leading-7">
            Dibuat oleh Tim {TEAM_INFO.namaTim} dari {TEAM_INFO.institusi} untuk GTNIC 2026.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <li key={member.nama} className="flex max-w-[320px] flex-col gap-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-primary">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.nama}
                    fill
                    quality={80}
                    sizes="(max-width: 360px) 100vw, 320px"
                    className="object-cover object-[center_top]"
                  />
                ) : (
                  <span
                    role="img"
                    aria-label={member.nama}
                    className="flex size-full items-center justify-center text-5xl font-extrabold tracking-[0.02em] text-white"
                  >
                    {initials(member.nama)}
                  </span>
                )}
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-[17px] leading-6 font-bold">{member.nama}</h3>
                <p className="text-sm font-semibold text-primary">{member.peran}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
