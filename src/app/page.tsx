import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, site, testimonials } from "@/lib/site";

const offerings = [
  {
    name: "STRONG Collective",
    eyebrow: "Core membership",
    blurb:
      "Progressive strength programs, live and on-demand workouts, app access, nutrition guidance, and community support for women who are done guessing.",
    href: "/programs/collective",
    cta: "Explore membership",
    image: "/images/hollie-rack.jpg",
    imagePosition: "center 12%",
  },
  {
    name: "Seasonal programs",
    eyebrow: "Winter STRONG · Spring STRONG",
    blurb:
      "Shorter challenges that introduce our training and nutrition approach — including the 14-Day LeanBody Project and Lift to Lean sessions.",
    href: "/programs",
    cta: "See current sessions",
    image: "/images/hollie-squat.jpg",
    imagePosition: "center top",
  },
  {
    name: "In-person training",
    eyebrow: "Noblesville, Indiana",
    blurb:
      "Limited 1:1 personal training locally, with supporting at-home programming so the work continues between sessions.",
    href: "/contact?interest=In-person training",
    cta: "Ask about availability",
    image: "/images/hollie-goblet.jpg",
    imagePosition: "center 20%",
  },
  {
    name: "STRONG Athlete Collective",
    eyebrow: "Beta · Youth athletes",
    blurb:
      "Strength and athletic development for multi-sport kids. Build the athlete, then teach them to use it. Currently in beta — not a paid offer yet.",
    href: "/athletes",
    cta: "Join the waitlist",
    image: "/images/hollie-band.jpg",
    imagePosition: "center top",
  },
] as const;

const pricing = [
  {
    name: "Free workout",
    price: "$0",
    detail: "Try how Hollie trains before you commit.",
    href: "/start",
    cta: "Send me the workout",
    featured: false,
  },
  {
    name: "LeanBody Challenge",
    price: "$19",
    detail: "14 days of follow-along workouts and simple eats.",
    href: "/programs/lean-body",
    cta: "Start the challenge",
    featured: false,
  },
  {
    name: "STRONG Collective",
    price: "From $79/mo",
    detail: "The membership. Progressive training, live classes, app, community.",
    href: "/programs/collective",
    cta: "Join the Collective",
    featured: true,
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — full-bleed. Photo slot: hero lifestyle / Hollie training */}
      <section className="relative min-h-[92vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hero-squat.jpg"
          alt="Hollie coaching strength training"
          fill
          priority
          className="object-cover object-[68%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:px-8 lg:justify-center lg:px-12 lg:pb-24">
          <div className="max-w-2xl">
            <div className="animate-rise">
              <Eyebrow light>Hollie Nicholson Wellness</Eyebrow>
              <div className="rule-grow mt-4 h-0.5 w-16 bg-teal" />
            </div>
            <h1 className="animate-rise-delay mt-6 font-serif text-[3.25rem] leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="animate-rise-delay-2 mt-6 max-w-lg text-base leading-relaxed text-cream/80 sm:text-lg">
              Progressive strength training and practical nutrition for women
              35–55 who want muscle, confidence, and routines that fit real
              life — not another plan that falls apart by Thursday.
            </p>
            <div className="animate-rise-delay-2 mt-10 flex flex-wrap gap-3">
              <Button href="/programs/collective" variant="teal">
                Join the Collective
              </Button>
              <Button href="/start" variant="ghost">
                Get a free workout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services / offerings */}
      <Section id="offerings" className="scroll-mt-24 py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>What you can join</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            Clear offerings. No guesswork.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            STRONG helps women build muscle and sustainable habits through
            progressive training and coaching. Parents can also explore youth
            athletic development in beta.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {offerings.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group grid overflow-hidden border border-ink/10 bg-paper transition-colors hover:border-teal/50"
            >
              <div className="relative aspect-[16/10]">
                {/* Photo slot: {item.name} */}
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: item.imagePosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                <p className="absolute bottom-4 left-5 text-[11px] font-semibold tracking-[0.22em] uppercase text-cream">
                  {item.eyebrow}
                </p>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="font-serif text-3xl">{item.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.blurb}
                </p>
                <p className="mt-6 text-[11px] font-semibold tracking-[0.2em] uppercase text-teal">
                  {item.cta} →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* 3. Testimonials */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow light>Results from real women</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
            Stronger looks different on everyone.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote
                key={t.name}
                className="border border-white/15 bg-ink p-7"
              >
                <p className="font-serif text-xl leading-snug text-cream">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-[11px] font-semibold tracking-[0.18em] uppercase text-teal">
                  {t.name} · {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing */}
      <Section id="pricing" className="scroll-mt-24 py-20 lg:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Pricing</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Start free. Stay when it fits.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            Primary path: a freebie or a short challenge, then the STRONG
            Collective when you&apos;re ready for the full plan.
          </p>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {pricing.map((tier) => (
            <div
              key={tier.name}
              className={`flex flex-col border p-8 ${
                tier.featured
                  ? "border-teal bg-ink text-cream"
                  : "border-ink/10 bg-paper"
              }`}
            >
              <p
                className={`text-[11px] font-semibold tracking-[0.22em] uppercase ${
                  tier.featured ? "text-teal" : "text-muted"
                }`}
              >
                {tier.name}
              </p>
              <p className="mt-4 font-serif text-4xl">{tier.price}</p>
              <p
                className={`mt-3 flex-1 text-sm leading-relaxed ${
                  tier.featured ? "text-cream/75" : "text-muted"
                }`}
              >
                {tier.detail}
              </p>
              <div className="mt-8">
                <Button
                  href={tier.href}
                  variant={tier.featured ? "teal" : "ghost"}
                  className="w-full"
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-muted">
          Lift to Lean seasonal sessions and limited in-person training are
          available separately.{" "}
          <Link href="/programs" className="text-teal underline-offset-2 hover:underline">
            View all programs
          </Link>
          .
        </p>
      </Section>

      {/* 5. Team */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-2">
          <div className="relative min-h-[480px]">
            {/* Photo slot: Hollie portrait */}
            <Image
              src="/images/hollie-portrait.jpg"
              alt="Hollie Nicholson"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>The coach</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Hollie Nicholson
            </h2>
            <p className="mt-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-teal">
              Trainer · Nutrition coach · Mom of three
            </p>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              About 20 years in training. Former teacher. Real life — career,
              motherhood, and still taking care of the body God has given her.
              Members say she is not an influencer. She is a coach who gets it.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                More about Hollie
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact form */}
      <Section id="contact" className="scroll-mt-24 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Eyebrow>Contact</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Tell me where you want to start.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Freebie, Collective, seasonal session, or Athlete waitlist —
              Hollie replies within 48 hours.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {site.serviceArea}
            </p>
            <a
              href={site.emailHref}
              className="mt-8 inline-block text-sm font-semibold text-teal hover:text-teal-deep"
            >
              {site.email}
            </a>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* 7. FAQ */}
      <section id="faq" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-4 font-serif text-4xl">
                Common questions, straight answers.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Faq items={[...faqs.general, ...faqs.collective]} />
            </div>
          </div>
        </div>
      </section>

      {/* 8. About / story */}
      <Section id="about" className="scroll-mt-24 py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <Eyebrow>The story</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Built for busy women. Expanding for athletes.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 space-y-4 text-sm leading-relaxed text-muted">
            <p>
              Founded by certified personal trainer and nutrition coach Hollie
              Nicholson, STRONG combines structured workouts, live and on-demand
              training, nutrition education, and community support.
            </p>
            <p>
              The approach is progressive: a clear plan, purpose, and
              progression — 30–40 minute workouts, approachable nutrition, and
              coaching that respects work and family. No exaggerated promises.
              No influencer fluff.
            </p>
            <p>
              STRONG Athlete Collective is in beta with kids of current members.
              Philosophy: build the athlete, then teach them to use it.
            </p>
          </div>
        </div>
      </Section>

      {/* 9. How it works */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <Eyebrow light>How it works</Eyebrow>
          <h2 className="mt-4 max-w-xl font-serif text-4xl sm:text-5xl">
            From first hello to a plan that sticks.
          </h2>
          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Start somewhere",
                copy: "Grab the free workout, join a seasonal challenge, or go straight into the Collective.",
              },
              {
                step: "02",
                title: "Open the app",
                copy: "Workouts are written and waiting. Thirty to forty minutes. Dumbbells. Done.",
              },
              {
                step: "03",
                title: "Keep showing up",
                copy: "Check in, get coached, and let progressive training do what random workouts never did.",
              },
            ].map((item) => (
              <div key={item.step} className="border-t border-teal pt-6">
                <p className="text-[11px] font-semibold tracking-[0.28em] uppercase text-teal">
                  {item.step}
                </p>
                <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  {item.copy}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap gap-3">
            <Button href="/start" variant="teal">
              Get the free workout
            </Button>
            <Button href="/programs/collective" variant="ghost">
              Join the Collective
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
