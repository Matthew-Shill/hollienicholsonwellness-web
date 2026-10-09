import Image from "next/image";
import { Button, Eyebrow, Section } from "@/components/ui";
import { testimonials } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* Hero — face-forward photo slot: swap hollie-portrait when she sends a dedicated hero */}
      <section className="relative overflow-hidden bg-ink text-cream">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl lg:grid-cols-2">
          <div className="relative z-10 flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12">
            <Eyebrow tone="blush">
              Strength coaching for working professional women over 35
            </Eyebrow>
            <h1 className="mt-5 font-serif text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
              Build the body
              <br />
              you want to live
              <br />
              in.
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/75 sm:text-base">
              You have a career and a life. You cannot afford to waste time or
              energy on things that don&apos;t work. I&apos;ll show you what does.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/programs/collective" variant="light">
                Join the STRONG Collective
              </Button>
              <Button href="/#speaking" variant="ghost">
                Book Hollie to speak
              </Button>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-full">
            <Image
              src="/images/hollie-portrait.jpg"
              alt="Hollie Nicholson"
              fill
              priority
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-moss/25 bg-moss-soft">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 lg:gap-6">
          {[
            { value: "1,000+", label: "Women coached since 2020" },
            { value: "20 years", label: "Of training experience" },
            { value: "Trainer +", label: "Nutrition coach · Former teacher" },
            { value: "Keynote speaker", label: "Workplaces, schools, women’s events" },
          ].map((stat) => (
            <div key={stat.value}>
              <p className="font-serif text-2xl text-blush sm:text-3xl">{stat.value}</p>
              <p className="mt-2 text-[11px] tracking-[0.18em] uppercase text-moss">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Section className="py-20 lg:py-28">
        <Eyebrow>Why STRONG</Eyebrow>
        <h2 className="mt-4 max-w-2xl font-serif text-4xl sm:text-5xl">
          Muscle is not just about the mirror.
        </h2>
        <p className="mt-6 max-w-2xl text-muted leading-relaxed">
          You want to get toned. Feel better. Fit in your clothes. Good. Lifting
          does all of that. It is also your long-term health plan. The strength
          you build now is what carries you through every decade after this one.
        </p>
      </Section>

      <section className="bg-blush-soft">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          <div className="border-b border-blush/20 px-5 py-16 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-20">
            <Eyebrow>For you</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Train with me in the STRONG Collective
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              My membership for women who are done guessing. The workouts are
              written. You show up and lift.
            </p>
            <div className="mt-8">
              <Button href="/programs/collective" variant="ghost">
                See the Collective →
              </Button>
            </div>
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-12 lg:py-20">
            <Eyebrow>For your team or event</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl">
              Bring me in to speak
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Keynotes and workshops for businesses, schools, and organizations.
              Strong people do better work.
            </p>
            <div className="mt-8">
              <Button href="/#speaking" variant="ghost">
                See speaking →
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl lg:grid-cols-2">
          {/* Photo slot: Collective coaching — replace with lifting/coaching shot */}
          <div className="relative min-h-[420px]">
            <Image
              src="/images/hollie-rack.jpg"
              alt="Hollie coaching strength training"
              fill
              className="object-cover object-[center_12%]"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
            <p className="text-[11px] tracking-[0.32em] uppercase text-teal">
              The STRONG Collective
            </p>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Stop piecing it together yourself.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              You don&apos;t need another plan to figure out. You need one that
              is already built, by someone who has done this for 20 years.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-cream/85">
              <li>Five workouts a week, ready in the app.</li>
              <li>A new training cycle every few weeks, so you keep progressing.</li>
              <li>Simple nutrition habits. Stop overcomplicating dinner.</li>
              <li>Mini-courses by topic, for when you want to go deeper.</li>
            </ul>
            <div className="mt-8">
              <Button
                href="/programs/collective"
                variant="light"
                className="hover:border-teal hover:bg-teal hover:text-cream"
              >
                Join the Collective
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-moss-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow tone="moss">How it works</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Three steps. That&apos;s it.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Join",
                copy: "Sign up and you're in. No application. No waiting on me.",
              },
              {
                step: "02",
                title: "Open the app",
                copy: "This week's workouts are waiting. Pick your days and lift.",
              },
              {
                step: "03",
                title: "Check in",
                copy: "Tell us how it's going. Something is better than nothing, and we'll keep you moving.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t-2 border-moss pt-6">
                <p className="text-[11px] tracking-[0.28em] uppercase text-blush">
                  {item.step}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-0 lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-10 lg:px-12">
            <Eyebrow>About</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Hey there, I&apos;m Hollie.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              I&apos;m a certified personal trainer, nutrition coach, and
              wellness expert with over 16 years of experience. I help women
              transform their bodies and build real strength through effective,
              time-efficient strength training.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              As a mom of three, I understand what it&apos;s like to juggle
              family, a career, and your own goals. I created the STRONG Method
              to take the guesswork out of fitness — designed specifically for
              busy women who want results without giving up their lives.
            </p>
            <p className="mt-6 font-serif text-xl italic text-blush">
              Love Jesus. Lift Heavy. Be STRONG.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                More about Hollie →
              </Button>
            </div>
          </div>
          {/* Photo slot: About portrait */}
          <div className="relative min-h-[520px]">
            <Image
              src="/images/hollie-kitchen.jpg"
              alt="Hollie Nicholson"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      <section className="bg-blush-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow>From the women inside</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
            You are stronger than you think.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="border border-blush/25 bg-cream p-7">
                <p className="font-serif text-xl leading-snug">“{t.quote}”</p>
                <footer className="mt-6 text-[11px] tracking-[0.18em] uppercase text-moss">
                  {t.name} · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="speaking" className="scroll-mt-24 bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="max-w-2xl">
            <Eyebrow tone="blush">Speaking</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Strong people do better work.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-cream/75 sm:text-base">
              I speak to teams, schools, and women&apos;s organizations about
              what taking care of your body does for the rest of your life,
              including your job.
            </p>
            <div className="mt-8">
              <Button href="/contact?interest=speaking" variant="light">
                Book Hollie to speak
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-moss-soft">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow tone="moss">Not ready to join?</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Start here instead.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="border border-moss/30 bg-cream p-8 sm:p-10">
              <p className="text-[11px] tracking-[0.22em] uppercase text-blush">
                Free
              </p>
              <h3 className="mt-3 font-serif text-3xl">Full Body Metabolic Burn</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                One workout. Try how I train before you commit to anything.
              </p>
              <div className="mt-8">
                <Button href="/start" variant="ghost">
                  Send me the workout →
                </Button>
              </div>
            </div>
            <div className="border border-blush/30 bg-cream p-8 sm:p-10">
              <p className="text-[11px] tracking-[0.22em] uppercase text-blush">
                $19 · 14 days
              </p>
              <h3 className="mt-3 font-serif text-3xl">The LeanBody Challenge</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Two weeks of doing the basics with me. See what consistency feels
                like.
              </p>
              <div className="mt-8">
                <Button href="/programs/lean-body" variant="ghost">
                  Start the challenge →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center text-cream sm:px-8 lg:px-12 lg:py-28">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Stop starting over. Do the thing that works.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-cream/85 leading-relaxed">
            The STRONG Collective. From $79 a month.
          </p>
          <div className="mt-8">
            <Button href="/programs/collective" variant="light">
              Join the STRONG Collective
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
