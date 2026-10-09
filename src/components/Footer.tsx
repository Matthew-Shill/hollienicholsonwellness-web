import Link from "next/link";
import { footerNav, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink/10 bg-cream text-ink">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <p className="font-serif text-3xl tracking-tight">STRONG</p>
          <p className="mt-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-ink/45">
            By Hollie Nicholson
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            Progressive strength and practical nutrition for women who want a
            body they actually want to live in.
          </p>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-ink/45">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-ink/45">
            Get in touch
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.emailHref} className="hover:text-teal">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-teal"
              >
                Facebook
              </a>
            </li>
          </ul>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            {site.serviceArea}
          </p>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-5 text-[11px] tracking-[0.12em] uppercase text-ink/40 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
