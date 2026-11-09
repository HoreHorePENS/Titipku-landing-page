import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { TEAM, TEAM_INFO } from "./content";
import { container, SectionTitle } from "./ui";

// Only reference photos that exist at build time, to avoid 404s.
function hasFile(src: string): boolean {
  return fs.existsSync(path.join(process.cwd(), "public", src));
}

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
  photo: hasFile(member.photo) ? member.photo : null,
}));

export function TeamSection() {
  return (
    <section id="tim" aria-labelledby="tim-title" className="border-t border-line">
      <div className={`${container} flex flex-col gap-8 py-12 md:gap-12 md:py-20`}>
        <div data-reveal="" className="flex flex-col gap-2 md:gap-3">
          <SectionTitle id="tim-title">Tim di balik Titipku</SectionTitle>
          <p className="max-w-[640px] text-[15px] leading-[23px] text-ink-muted md:text-lg md:leading-7">
            Dibuat oleh Tim {TEAM_INFO.teamName} dari {TEAM_INFO.institution} untuk GTNIC 2026.
          </p>
        </div>

        <ul className="grid gap-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {MEMBERS.map((member) => (
            <li key={member.name} data-reveal="" className="max-w-[320px]">
              <div className="flex flex-col gap-3 transition-transform duration-200 ease-out motion-safe:lg:hover:-translate-y-1">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-primary">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      quality={80}
                      sizes="(max-width: 360px) 100vw, 320px"
                      className="object-cover object-[center_top]"
                    />
                  ) : (
                    <span
                      role="img"
                      aria-label={member.name}
                      className="flex size-full items-center justify-center text-5xl font-extrabold tracking-[0.02em] text-white"
                    >
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <div className="flex flex-col gap-0.5">
                  <h3 className="text-[17px] leading-6 font-bold">{member.name}</h3>
                  <p className="text-sm font-semibold text-primary">{member.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
