import Image from "next/image";
import Link from "next/link";
import { Button, Eyebrow, FramedMark, Section } from "@/components/ui";
import { programs, site, testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Link
        href="/programs/lean-body"
        className="flex items-center justify-center gap-3 bg-blush px-5 py-2.5 text-center text-[11px] tracking-[0.22em] uppercase text-cream"
      >
        <span>14-Day LeanBody Project · Starts August 31 · $19</span>
        <span className="hidden sm:inline">Join now →</span>
      </Link>

      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero-squat.jpg"
          alt="Hollie coaching a goblet squat in her home studio"
          fill
          priority
          className="object-cover object-[70%_center] opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 py-16 sm:px-8 lg:justify-center lg:px-12">
          <div className="max-w-xl">
            <Eyebrow>Online strength for busy women</Eyebrow>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Lift weights.
              <br />
              Burn fat.
              <br />
              Get STRONG.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
              {site.tagline} Follow-along workouts, simple nutrition, and a
              trainer who gets what your life actually looks like.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/programs/lean-body" variant="light">
                Start the 14-day project
              </Button>
              <Button href="/start" variant="ghost">
                Get free workouts
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Eyebrow>The STRONG Method</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A plan you can live in.
            </h2>
          </div>
          <p className="lg:col-span-6 lg:col-start-7 text-muted leading-relaxed">
            You do not need another extreme reset. You need lifting, a simple
            way to eat, and enough support to actually do it. Open the app. Do
            the workout. Move on with your day.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-ink/10 sm:grid-cols-3">
          {[
            {
              title: "Fitness",
              copy: "Strength-based workouts in 40 minutes or less. Dumbbells. At home. Coached from start to finish.",
            },
            {
              title: "Nutrition",
              copy: "Real food. Simple habits. No tracking obsession. Eat in a way that supports fat loss and family life.",
            },
            {
              title: "Coaching",
              copy: "A real trainer in your corner — live classes, app coaching, or 1:1 when you want a custom plan.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-cream px-6 py-10 sm:px-8">
              <p className="text-[11px] tracking-[0.28em] uppercase">{item.title}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="relative min-h-[420px]">
            <Image
              src="/images/hollie-goblet.jpg"
              alt="Hollie holding a dumbbell in her studio"
              fill
              className="object-cover object-[center_22%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>Current project</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              14 days. One plan. $19.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              The kids are back in school. Now it is your turn. Four follow-along
              workouts a week, a LeanBody Eats guide, and Hollie coaching you
              through every session.
            </p>
            <ul className="mt-8 space-y-2 text-sm text-cream/80">
              <li>Upper · Lower · Full body · Cardio + core</li>
              <li>30 minutes or less, dumbbells only</li>
              <li>Starts August 31</li>
            </ul>
            <div className="mt-8">
              <Button href="/programs/lean-body" variant="light">
                I am in
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Ways to train</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">Choose your next step.</h2>
          </div>
          <Button href="/programs" variant="ghost">
            View all programs
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <Link
              key={program.slug}
              href={program.href}
              className="group overflow-hidden border border-ink/10 bg-paper"
            >
              <div className="relative aspect-square">
                <Image
                  src={program.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: program.imagePosition }}
                />
              </div>
              <div className="p-6 sm:p-8">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted">
                  {program.eyebrow} · {program.price}
                </p>
                <h3 className="mt-3 font-serif text-3xl">{program.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {program.blurb}
                </p>
                <p className="mt-5 text-[11px] tracking-[0.22em] uppercase">
                  {program.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-10 lg:px-12">
            <FramedMark
              title="Hollie Nicholson"
              caption="Trainer · Nutrition coach · Mom of three"
              className="mb-10 max-w-md bg-paper"
            />
            <h2 className="font-serif text-4xl sm:text-5xl">
              17 years of coaching. Zero interest in fluff.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Hollie is a certified trainer and nutrition coach — and a Midwest
              mom of three who feels most alive in the mountains and always has
              an afternoon Diet Coke in hand. She built STRONG for women who are
              done spinning their wheels.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                Meet Hollie
              </Button>
            </div>
          </div>
          <div className="relative min-h-[520px]">
            <Image
              src="/images/hollie-portrait.jpg"
              alt="Hollie Nicholson in her kitchen"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <Eyebrow>Results from real women</Eyebrow>
        <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
          Busy lives. Stronger bodies.
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote key={t.name} className="border border-ink/10 bg-paper p-7">
              <p className="font-serif text-xl leading-snug">“{t.quote}”</p>
              <footer className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      <section className="relative overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hollie-rack.jpg"
          alt="Hollie training with a resistance band"
          fill
          className="object-cover object-[center_12%] opacity-35"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 lg:px-12">
          <Eyebrow>STRONG Studio</Eyebrow>
          <h2 className="mt-4 max-w-lg font-serif text-4xl sm:text-6xl">
            Live with Hollie, {site.live.days}.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
            {site.live.time} on Zoom. Miss it? The recording is yours. Your first
            class is free.
          </p>
          <div className="mt-8">
            <Button href="/live" variant="light">
              Try a class
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
