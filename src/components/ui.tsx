import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost" | "light" | "teal";
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
      "bg-ink text-cream border-ink hover:bg-teal hover:border-teal",
    teal:
      "bg-teal text-cream border-teal hover:bg-teal-deep hover:border-teal-deep",
    ghost:
      "bg-transparent text-current border-current hover:bg-ink hover:text-cream hover:border-ink",
    light:
      "bg-cream text-ink border-cream hover:bg-white",
  }[variant];

  const classNameFull = `inline-flex items-center justify-center border px-6 py-3.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${styles} ${className}`;
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
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`text-[11px] font-semibold tracking-[0.28em] uppercase ${
        light ? "text-teal" : "text-ink/55"
      }`}
    >
      {children}
    </p>
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

export function IconMark({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex h-12 w-12 items-center justify-center text-ink">
      {children}
    </div>
  );
}
