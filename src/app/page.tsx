import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, IconMark, Section } from "@/components/ui";
import { faqs, methodPillars, site, testimonials } from "@/lib/site";

const planPoints = [
  {
    title: "30–40 minute workouts",
    detail: "Open the app, press play, get on with your day.",
  },
  {
    title: "Purposeful progression",
    detail: "A plan that builds week to week — not random workouts.",
  },
  {
    title: "Practical nutrition",
    detail: "Real food habits that work with family dinners and date night.",
  },
  {
    title: "Community support",
    detail: "Coaching and women who show up the same way you do.",
  },
] as const;

function DumbbellIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8v8M18 8v8M8 10h8M8 14h8M4 10v4M20 10v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M8 3v7a2 2 0 002 2h0a2 2 0 002-2V3M10 12v9M16 3v6h2a2 2 0 012 2v1a3 3 0 01-3 3h-1v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 11a3 3 0 100-6 3 3 0 000 6zM17 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM3.5 20a5.5 5.5 0 0111 0M14 20a4.5 4.5 0 016.5-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const pillarIcons = [<DumbbellIcon key="d" />, <ForkIcon key="f" />, <PeopleIcon key="p" />];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed, mockup-inspired */}
      <section className="relative min-h-[88vh] overflow-hidden bg-ink text-cream">
        {/* Photo slot: hero — Hollie with dumbbells / home gym */}
        <Image
          src="/images/hollie-vip.jpg"
          alt="Hollie Nicholson training with dumbbells"
          fill
          priority
          className="object-cover object-[60%_center] opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/90 to-cream/20" />
        <div className="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-5 pb-20 pt-24 sm:px-8 lg:justify-center lg:px-12">
          <div className="max-w-xl text-ink">
            <h1 className="animate-rise font-serif text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {site.tagline}
            </h1>
            <p className="animate-rise-delay mt-6 max-w-md text-base leading-relaxed text-ink/70">
              Progressive strength training and practical nutrition for women
              who want to build muscle, feel confident, and live stronger —
              without giving up real life.
            </p>
            <div className="animate-rise-delay-2 mt-9 flex flex-wrap gap-3">
              <Button href="/programs/collective">Explore STRONG →</Button>
              <Button href="/start" variant="ghost">
                Try a Free Workout
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 border-t border-ink/10 bg-cream/80 backdrop-blur-sm">
          <p className="mx-auto max-w-6xl px-5 py-3 text-center text-[10px] font-semibold tracking-[0.28em] uppercase text-ink/55 sm:px-8 lg:px-12 sm:text-left">
            Progressive strength{" "}
            <span className="mx-2 text-ink/25">/</span> Practical nutrition{" "}
            <span className="mx-2 text-ink/25">/</span> Real life
          </p>
        </div>
      </section>

      <Section className="py-20 text-center lg:py-24">
        <Eyebrow>Same effort. A clearer outcome.</Eyebrow>
        <h2 className="mx-auto mt-4 max-w-2xl font-serif text-4xl leading-tight sm:text-5xl">
          You&apos;re putting in the work. Let&apos;s make it count.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted leading-relaxed">
          You do not need another extreme reset. You need progressive lifting, a
          simple way to eat, and enough support to actually stay with it.
        </p>
      </Section>

      {/* The STRONG Approach — blush wash like the mockup */}
      <section id="method" className="scroll-mt-24 bg-blush">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
          <div className="text-center">
            <Eyebrow>The STRONG Approach</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Lift. Nourish. Belong.
            </h2>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {methodPillars.map((pillar, i) => (
              <div key={pillar.name} className="text-center md:text-left">
                <div className="mx-auto flex justify-center md:justify-start">
                  <IconMark>{pillarIcons[i]}</IconMark>
                </div>
                <h3 className="mt-5 font-serif text-2xl">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clear plan / app section */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            {/* Photo slot: app / training plan visual */}
            <Image
              src="/images/hollie-blueprint.jpg"
              alt="Hollie demonstrating a workout from the STRONG plan"
              fill
              className="object-cover object-[center_15%]"
            />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>Inside the plan</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A clear plan. A stronger you.
            </h2>
            <ul className="mt-10 space-y-6">
              {planPoints.map((item) => (
                <li key={item.title} className="flex gap-4 border-t border-ink/10 pt-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Section id="results" className="scroll-mt-24 py-20 lg:py-28">
        <div className="text-center">
          <Eyebrow>From the women inside</Eyebrow>
          <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
            Stronger looks different on everyone.
          </h2>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t) => (
            <blockquote key={t.name} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blush font-serif text-2xl text-ink">
                {t.name.slice(0, 1)}
              </div>
              <p className="mt-6 font-serif text-xl leading-snug">“{t.quote}”</p>
              <footer className="mt-5 text-[11px] font-semibold tracking-[0.16em] uppercase text-muted">
                {t.name} · {t.role}
              </footer>
            </blockquote>
          ))}
        </div>
      </Section>

      {/* Membership CTA — navy block */}
      <section className="bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-10 lg:px-14 lg:py-24">
            <h2 className="font-serif text-4xl sm:text-5xl">
              Make STRONG part of your life.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
              The STRONG Collective is the core membership — progressive
              programs, live and on-demand workouts, nutrition guidance, and
              community. Seasonal challenges and limited in-person training are
              here when you need a shorter on-ramp.
            </p>
            <div className="mt-8">
              <Button href="/programs/collective" variant="light">
                Explore Membership →
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link href="/programs" className="text-teal hover:underline">
                Current Challenges →
              </Link>
              <Link
                href="/contact?interest=In-person training"
                className="text-teal hover:underline"
              >
                In-Person Training →
              </Link>
              <Link href="/athletes" className="text-teal hover:underline">
                Athlete Collective →
              </Link>
            </div>
          </div>
          <div className="relative min-h-[360px]">
            {/* Photo slot: membership lifestyle / gear */}
            <Image
              src="/images/hollie-goblet.jpg"
              alt="Strength training equipment"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Meet Hollie */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="order-2 px-5 py-16 sm:px-10 lg:order-1 lg:px-14">
            <Eyebrow>Meet Hollie</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              Real experience. A stronger you.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted">
              Certified trainer and nutrition coach. Mom of three. About 20
              years of coaching women through midlife, motherhood, and busy
              careers. Members say she is real — not an influencer — and she
              understands juggling work, family, and the body God has given her.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="ghost">
                More About Hollie →
              </Button>
            </div>
          </div>
          <div className="relative order-1 min-h-[480px] lg:order-2">
            {/* Photo slot: Hollie portrait */}
            <Image
              src="/images/hollie-portrait.jpg"
              alt="Hollie Nicholson"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </section>

      {/* Lead magnet — blush */}
      <section className="bg-blush">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:px-12 lg:py-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl">
              Your first STRONG workout starts here.
            </h2>
            <p className="mt-3 text-sm text-ink/70">
              One free workout and a few tips — try how Hollie trains before you
              commit to anything.
            </p>
          </div>
          <LeadForm
            kind="free-workout"
            interest="Free Full-Body Blueprint"
            cta="Send My Workout →"
            success="Check your inbox — Hollie will send your workout shortly."
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-serif text-4xl sm:text-5xl">FAQs</h2>
              <p className="mt-4 text-sm text-muted">
                Straight answers before you join.
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <Faq items={faqs.general} />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative min-h-[50vh] overflow-hidden bg-ink text-cream">
        {/* Photo slot: closing lifestyle / outdoors */}
        <Image
          src="/images/hollie-mint.jpg"
          alt=""
          fill
          className="object-cover object-[center_30%] opacity-45"
        />
        <div className="absolute inset-0 bg-ink/50" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-6xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl">
            Your next chapter starts STRONG.
          </h2>
          <div className="mt-8">
            <Button href="/programs/collective" variant="light">
              Find Your Starting Point →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
