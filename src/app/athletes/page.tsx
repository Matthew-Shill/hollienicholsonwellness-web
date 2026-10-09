import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm } from "@/components/Forms";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "STRONG Athlete Collective",
  description:
    "Youth strength and athletic development for multi-sport athletes. Currently in beta with families inside the STRONG community.",
};

export default function AthletesPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-cream">
        {/* Photo slot: Athlete Collective hero — replace with Hollie coaching youth athletes */}
        <Image
          src="/images/hollie-band.jpg"
          alt="Strength training session"
          fill
          priority
          className="object-cover object-[center_20%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/30" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              Beta program
            </p>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
              STRONG Athlete Collective
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
              Youth strength and athletic development for boys and girls who
              play multiple sports. Built on one idea: build the athlete, then
              teach them to use it.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              For parents
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Strength first. Sport second.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-5 text-base leading-relaxed text-muted">
            <p>
              Kids do not need another sport-specific drill session. They need
              strength, coordination, and movement control that transfers to
              whatever they play next season.
            </p>
            <p>
              The Athlete Collective is currently in beta with children of
              current STRONG members. It is not a paid product yet — logistics
              are still being worked out — but parents who want early access can
              join the waitlist below.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-ink/10 sm:grid-cols-3">
          {[
            {
              title: "Two full-body workouts",
              copy: "Per cycle. Progressive strength that builds the base every athlete needs.",
            },
            {
              title: "One performance workout",
              copy: "Per cycle. Speed, power, and athletic movement layered on top of strength.",
            },
            {
              title: "Multi-sport ready",
              copy: "Built for kids who bounce between volleyball, hockey, tennis, and everything else.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-cream px-6 py-10 sm:px-8">
              <p className="text-[11px] tracking-[0.28em] uppercase text-teal">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            {/* Photo slot: Athlete Collective coaching — replace with Hollie and youth athletes */}
            <Image
              src="/images/hollie-goblet.jpg"
              alt="Coaching strength training"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              The philosophy
            </p>
            <h2 className="mt-4 font-serif text-4xl">
              “Build the athlete, then teach them to use it.”
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              We focus on strength, coordination, and movement quality before
              sport-specific skills. That foundation supports whatever sport
              they choose — and helps them stay healthy while they grow.
            </p>
          </div>
        </div>
      </section>

      <Section id="waitlist" className="py-20 lg:py-28">
        <div className="grid gap-12 border border-teal/40 bg-paper p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              Waitlist
            </p>
            <h2 className="mt-4 font-serif text-4xl">
              Want early access when it opens?
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Leave your name and email. Hollie will reach out as the Athlete
              Collective moves from beta into a paid program — likely in the
              next month or two.
            </p>
          </div>
          <LeadForm
            kind="athletes"
            interest="STRONG Athlete Collective"
            cta="Join the waitlist"
            success="You’re on the list. Hollie will reach out when Athlete Collective opens beyond beta."
          />
        </div>
      </Section>
    </>
  );
}
