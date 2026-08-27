import type { Metadata } from "next";
import Image from "next/image";
import { Button, Eyebrow, FramedMark, Section } from "@/components/ui";
import { methodPillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Hollie",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hollie-kitchen.jpg"
          alt="Hollie Nicholson"
          fill
          priority
          className="object-cover object-top opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl items-end px-5 pb-16 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl lg:text-7xl">
              Hey, I&apos;m Hollie.
            </h1>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/80 sm:text-base">
              Trainer. Nutrition coach. Creator of the STRONG Method. Midwest mom
              of three who believes you deserve a body you actually want to live in.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <FramedMark
              title="The short version"
              caption="Since 2009"
              className="bg-cream"
            />
          </div>
          <div className="lg:col-span-6 space-y-5 text-base leading-relaxed text-muted">
            <p>
              I have been working in fitness since 2009. I started as a group
              fitness junkie — spin, bootcamp, HIIT — then got certified as a
              trainer in 2014 so I could coach women 1:1 between nap times and
              snack breaks.
            </p>
            <p>
              Like most women, I tried everything: running, CrossFit, cardio
              classes, every shiny trend. My body never looked or felt the way I
              wanted it to until I pulled back on the cardio, lifted heavy, and
              simplified how I eat.
            </p>
            <p>
              In 2020 I traded a fifth-grade classroom for a Zoom screen. The
              plan was to go back as a school principal after eight years at
              home. STRONG took off. I couldn&apos;t go back. What started with
              40 women in a garage is now a movement.
            </p>
          </div>
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            <Image
              src="/images/hollie-curl.jpg"
              alt="Hollie curling dumbbells"
              fill
              className="object-cover"
            />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>What I believe</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Fitness should fit your life — not take it over.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              You don&apos;t need hours in the gym, perfect meals, or six
              workouts a week. You need structure, simplicity, support, and a
              coach who actually gets midlife, hormones, parenting, and
              overwhelm.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              I&apos;m also a French fry–loving, dessert-ordering, early-to-bed
              mom who always has an afternoon Diet Coke in hand. We eat ice
              cream with the kids. We go on date night. And we still get
              STRONG.
            </p>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <Eyebrow>The STRONG Method</Eyebrow>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
          Lean. Strong. Sustainable.
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {methodPillars.map((pillar, i) => (
            <div key={pillar.name} className="border-t border-ink/20 pt-6">
              <p className="text-[11px] tracking-[0.28em] uppercase text-muted">
                0{i + 1}
              </p>
              <h3 className="mt-3 font-serif text-2xl">{pillar.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-xl font-serif text-2xl">
          Let me be the last trainer you ever need.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/programs">See programs</Button>
          <Button href="/start" variant="ghost">
            Try two free weeks
          </Button>
        </div>
      </Section>
    </>
  );
}
