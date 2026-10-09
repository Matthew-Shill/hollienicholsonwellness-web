import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const styles = {
    solid:
      "bg-blush text-cream border-blush hover:bg-ink hover:border-ink",
    ghost:
      "bg-transparent text-current border-current hover:bg-blush hover:text-cream hover:border-blush",
    light:
      "bg-cream text-ink border-cream hover:bg-blush hover:text-cream hover:border-blush",
  }[variant];

  const classNameFull = `inline-flex items-center justify-center border px-6 py-3 text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${styles} ${className}`;
  const external = href.startsWith("http://") || href.startsWith("https://");

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classNameFull}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classNameFull}>
      {children}
    </Link>
  );
}

export function Eyebrow({
  children,
  tone = "blush",
}: {
  children: ReactNode;
  tone?: "blush" | "moss" | "teal" | "cream";
}) {
  const toneClass = {
    blush: "text-blush",
    moss: "text-moss",
    teal: "text-teal",
    cream: "text-cream/70",
  }[tone];
  const barClass = {
    blush: "bg-moss",
    moss: "bg-blush",
    teal: "bg-teal",
    cream: "bg-blush",
  }[tone];

  return (
    <p className={`text-[11px] tracking-[0.32em] uppercase ${toneClass}`}>
      <span
        className={`mb-3 block h-0.5 w-10 ${barClass}`}
        aria-hidden
      />
      {children}
    </p>
  );
}

export function FramedMark({
  title,
  caption,
  className = "",
}: {
  title: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={`framed px-6 py-5 text-center ${className}`}>
      <p className="text-sm sm:text-base tracking-[0.28em] uppercase">
        {title}
      </p>
      {caption ? (
        <span className="framed-caption bg-inherit">{caption}</span>
      ) : null}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 sm:px-8 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
