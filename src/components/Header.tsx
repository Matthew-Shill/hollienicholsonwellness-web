"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          {/* Logo slot: swap public/brand/logo.png when final mark is chosen */}
          <Image
            src="/brand/logo.png"
            alt={`${site.name} — ${site.tagline}`}
            width={420}
            height={80}
            className="h-9 w-auto invert sm:h-10"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase text-ink/65 transition-colors hover:text-teal"
              >
                {item.label}
              </Link>
            ))}
          <Link
            href="/programs/collective"
            className="bg-teal px-4 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-cream transition-colors hover:bg-teal-deep"
          >
            Start here
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-[11px] font-semibold tracking-[0.2em] uppercase"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div className="border-t border-ink/10 px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold tracking-[0.18em] uppercase"
                >
                  {item.label}
                </Link>
              ))}
            <Link
              href="/programs/collective"
              onClick={() => setOpen(false)}
              className="mt-2 bg-teal px-4 py-3 text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-cream"
            >
              Start here
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
