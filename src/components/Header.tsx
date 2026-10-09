"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-cream/95 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <div className="leading-none">
            <p className="font-serif text-2xl tracking-tight text-ink sm:text-[1.65rem]">
              STRONG
            </p>
            <p className="mt-0.5 text-[9px] font-semibold tracking-[0.2em] uppercase text-ink/50">
              By Hollie Nicholson
            </p>
          </div>
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-semibold tracking-[0.18em] uppercase text-ink/60 transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/programs/collective"
            className="bg-ink px-4 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-cream transition-colors hover:bg-teal"
          >
            Start Here →
          </Link>
        </nav>

        <button
          type="button"
          className="lg:hidden text-[11px] font-semibold tracking-[0.18em] uppercase"
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
                className="text-sm font-semibold tracking-[0.16em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/programs/collective"
              onClick={() => setOpen(false)}
              className="mt-2 bg-ink px-4 py-3 text-center text-[11px] font-semibold tracking-[0.18em] uppercase text-cream"
            >
              Start Here →
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
