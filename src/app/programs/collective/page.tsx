import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Section } from "@/components/ui";
import { faqs, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "STRONG Collective",
  description:
    "Progressive strength programs, live and on-demand workouts, app access, nutrition guidance, and community support for women who want lasting results.",
};

const includes = [
  { name: "Five tailored workouts per week", value: "Progressive strength plus metabolic work" },
  { name: "Live Zoom classes", value: "Monday, Tuesday, Friday · 5:45 AM ET" },
  { name: "Weekly STRONG yoga", value: "Mobility, recovery, and joints that last" },
  { name: "App access", value: "The day's workout, community, and coaching" },
  { name: "Cardio + core library", value: "On-demand whenever you need it" },
  { name: "Nutrition guidance", value: "Practical habits that fit real life" },
];

export default function CollectivePage() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hollie-rack.jpg"
          alt="Hollie training in the STRONG studio"
          fill
          priority
          className="object-cover object-[center_12%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/30" />
        <div className="relative mx-auto flex min-h-[80vh] max-w-6xl items-end px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            {/* Logo slot: STRONG with cross — not final; triangle mark is merch-only. Swap when brand is locked. */}
            <Image
              src="/brand/strong-cross.jpg"
              alt="STRONG"
              width={320}
              height={120}
              className="mb-8 h-12 w-auto bg-cream p-2 sm:h-14"
            />
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              Membership
            </p>
            <h1 className="mt-4 font-serif text-5xl sm:text-7xl">
              STRONG Collective
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80">
              Progressive strength programs, live and on-demand workouts, app
              access, nutrition guidance, and a community of women who are done
              starting over.
            </p>
            <p className="mt-6 text-[11px] tracking-[0.22em] uppercase">
              $79 / month · $209 / quarter · $749 / year
            </p>
            <div className="mt-8">
              <Button
                href="#join"
                variant="light"
                className="hover:border-teal hover:bg-teal hover:text-cream"
              >
                Join the Collective
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
            Muscle is your 401(k)
          </p>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            After 35, you are either building it — or losing it.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Muscle is metabolism, strength, and longevity. The STRONG Collective
            is the daily deposit: progressive training, practical nutrition, and
            a coach who will not let you ghost yourself.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-2">
          {includes.map((item) => (
            <div key={item.name} className="bg-cream px-6 py-8">
              <h3 className="font-serif text-2xl">{item.name}</h3>
              <p className="mt-2 text-sm text-muted">{item.value}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Seasonal sessions like Winter STRONG and Spring STRONG keep the
          programming fresh while you stay in the Collective year-round.
        </p>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            {/* Photo slot: Collective lifestyle — replace with Hollie's membership photo */}
            <Image
              src="/images/hollie-vip.jpg"
              alt="Hollie"
              fill
              className="object-cover object-[center_12%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10">
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              How it works
            </p>
            <h2 className="mt-4 font-serif text-4xl">
              One app. One workout. One habit.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Open the app. Get to work. From start to done in 40 minutes or
              less. No Googling, no piecing together random videos, no wondering
              what to do on Thursday.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.slice(0, 4).map((t) => (
            <blockquote key={t.quote} className="border border-ink/10 bg-paper p-7">
              <p className="font-serif text-xl leading-snug">“{t.quote}”</p>
              <footer className="mt-5 text-[11px] tracking-[0.18em] uppercase text-muted">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <Section id="join" className="pb-24">
        <div className="grid gap-12 border border-teal/40 bg-paper p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              Enroll
            </p>
            <h2 className="mt-4 font-serif text-4xl">Workouts start immediately.</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Share your email and Hollie will send checkout. Choose monthly,
              quarterly, or annual once you are in.
            </p>
          </div>
          <LeadForm
            kind="collective"
            interest="STRONG Collective"
            cta="Start enrollment"
            success="Hollie will send checkout. Choose monthly, quarterly, or annual once you are in — workouts start immediately."
          />
        </div>
        <div className="mt-16">
          <Faq items={[...faqs.general, ...faqs.collective]} />
        </div>
      </Section>
    </>
  );
}
