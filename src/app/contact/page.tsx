import type { Metadata } from "next";
import { ContactForm } from "@/components/Forms";
import { Eyebrow, Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

const interestMap: Record<string, string> = {
  "lean-body": "14-Day LeanBody Project",
  "lift-to-lean": "Lift to Lean",
  vip: "STRONG VIP",
  transform: "1:1 Transform coaching",
  live: "Live STRONG class",
  blueprint: "Free Full-Body Blueprint",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const params = await searchParams;
  const defaultInterest = params.interest
    ? interestMap[params.interest] ?? params.interest
    : undefined;

  return (
    <Section className="py-16 lg:py-24">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 font-serif text-5xl">Let&apos;s find your next step.</h1>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Questions about STRONG, which program is right, or how to get
            started? Hollie replies within 48 hours.
          </p>
          <ul className="mt-10 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className="hover:text-blush">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-blush">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blush"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ContactForm defaultInterest={defaultInterest} />
        </div>
      </div>
    </Section>
  );
}
