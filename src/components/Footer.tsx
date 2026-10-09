import Image from "next/image";
import Link from "next/link";
import { footerNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <Image
            src="/brand/logo.png"
            alt={site.name}
            width={420}
            height={80}
            className="h-11 w-auto"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
            Progressive strength and practical nutrition for women who want a
            body they actually want to live in — and parents raising the next
            generation of athletes.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-teal">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
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
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase text-teal">
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
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/55">
            {site.serviceArea}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-[11px] tracking-[0.14em] uppercase text-cream/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="hover:text-cream">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
