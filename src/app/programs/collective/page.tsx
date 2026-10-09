import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs } from "@/lib/site";

export const metadata: Metadata = {
  title: "STRONG Collective",
  description:
    "Progressive strength programs, live and on-demand workouts, app access, nutrition guidance, and community support for women who want lasting results.",
};

const includes = [
  {
    name: "Progressive strength programs",
    value: "A clear plan that builds week to week — not random workouts.",
  },
  {
    name: "Live + on-demand workouts",
    value: "Train with Hollie live, or press play whenever life allows.",
  },
  {
    name: "App access",
    value: "This week's workouts, coaching, and community in one place.",
  },
  {
    name: "Nutrition guidance",
    value: "Practical habits. Real food. No tracking obsession.",
  },
  {
    name: "Community support",
    value: "Women showing up the same way you are — busy, real, consistent.",
  },
  {
    name: "Seasonal cycles",
    value: "Winter STRONG, Spring STRONG, and fresh programming as you stay.",
  },
] as const;

const steps = [
  {
    step: "01",
    title: "Join",
    copy: "Sign up and you're in. No application. No waiting list for the membership.",
  },
  {
    step: "02",
    title: "Open the app",
    copy: "This week's workouts are waiting. Pick your days and lift.",
  },
  {
    step: "03",
    title: "Keep progressing",
    copy: "New cycles, check-ins, and coaching so you do not start over every Monday.",
  },
] as const;

export default function CollectivePage() {
  return (
    <>
      {/* Collective hero — dark, purpose-led */}
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hollie-rack.jpg"
          alt="Hollie training in the STRONG studio"
          fill
          priority
          className="object-cover object-[center_12%] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-end px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Logo slot: STRONG wordmark — swap when final Collective mark is locked */}
            <p className="font-serif text-3xl tracking-tight text-teal sm:text-4xl">
              STRONG
            </p>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.28em] uppercase text-cream/55">
              The Collective
            </p>
            <h1 className="mt-8 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
              Train with purpose.
              <br />
              Live with strength.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-cream/75 sm:text-base">
              The core women&apos;s membership: progressive strength, live and
              on-demand workouts, app access, nutrition guidance, and a
              community that keeps you showing up.
            </p>
            <p className="mt-5 text-[11px] font-semibold tracking-[0.2em] uppercase text-teal">
              From $79 / month
            </p>
            <div className="mt-8">
              <Button href="#join" variant="light">
                Join the Collective →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>What&apos;s included</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Everything you need to stop guessing.
          </h2>
        </div>
        <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((item) => (
            <div key={item.name} className="bg-cream px-6 py-8 sm:px-8">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <Eyebrow>How membership works</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Three steps. That&apos;s it.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="border-t border-ink/20 pt-6">
                <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-teal">
                  {item.step}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            {/* Photo slot: Collective app / training lifestyle */}
            <Image
              src="/images/hollie-blueprint-2.jpg"
              alt="Training with the STRONG plan"
              fill
              className="object-cover object-[center_12%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>In the app</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Five workouts a week. Live classes when you can make them.
              Recordings when you can&apos;t. Nutrition that does not take over
              your kitchen. Coaching when life gets loud.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/80">
              <li>· Live Zoom · Mon / Tue / Fri · 5:45 AM ET</li>
              <li>· On-demand library for travel and busy weeks</li>
              <li>· Simple nutrition habits + deeper mini-courses</li>
            </ul>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-4xl">FAQs</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Faq items={[...faqs.collective, ...faqs.general.slice(0, 2)]} />
          </div>
        </div>
      </Section>

      <Section id="join" className="scroll-mt-24 pb-24">
        <div className="grid gap-12 border border-ink/10 bg-ink px-8 py-12 text-cream sm:px-12 lg:grid-cols-2">
          <div>
            <Eyebrow light>Join the Collective</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Workouts start as soon as you&apos;re in.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Share your email and Hollie will send checkout. Choose monthly,
              quarterly, or annual once you are ready.
            </p>
            <p className="mt-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-teal">
              $79 / mo · $209 / quarter · $749 / year
            </p>
          </div>
          <LeadForm
            kind="collective"
            interest="STRONG Collective"
            cta="Start enrollment →"
            success="Hollie will send checkout. Choose monthly, quarterly, or annual — workouts start immediately."
          />
        </div>
      </Section>
    </>
  );
}
