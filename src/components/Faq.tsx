"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export function Faq({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-baseline justify-between gap-6 py-5 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-serif">{item.q}</span>
              <span className="text-xs tracking-[0.2em] uppercase text-muted">
                {isOpen ? "Close" : "Open"}
              </span>
            </button>
            {isOpen ? (
              <p className="pb-6 max-w-2xl text-sm leading-relaxed text-muted">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
