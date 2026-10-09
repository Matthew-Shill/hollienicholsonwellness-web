import Image from "next/image";
import Link from "next/link";
import { AppPhones } from "@/components/AppPhones";
import { Faq } from "@/components/Faq";
import { LeadForm } from "@/components/Forms";
import { Button, Eyebrow, IconCircle, Section } from "@/components/ui";
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

/** Icons matched to Hollie's Method mockup: angled dumbbell, fork+knife, three people */
function DumbbellIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="rotate(-38 16 16)"
      >
        <rect x="3.5" y="11" width="4" height="10" rx="1" />
        <rect x="24.5" y="11" width="4" height="10" rx="1" />
        <rect x="7" y="12.5" width="3" height="7" rx="0.75" />
        <rect x="22" y="12.5" width="3" height="7" rx="0.75" />
        <path d="M10 16h12" />
      </g>
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 6v7a2 2 0 002 2h0a2 2 0 002-2V6" />
        <path d="M13 15v11" />
        <path d="M10 6v3M13 6v3M16 6v3" />
        <path d="M20 6v8h1.5a2 2 0 012 2v1.5A3.5 3.5 0 0120 21v2" />
      </g>
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <g
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="16" cy="11" r="3.25" />
        <path d="M9.5 24.5a6.5 6.5 0 0113 0" />
        <circle cx="8.5" cy="12.5" r="2.4" />
        <path d="M3.5 24a5 5 0 015.8-4.9" />
        <circle cx="23.5" cy="12.5" r="2.4" />
        <path d="M22.7 19.1A5 5 0 0128.5 24" />
      </g>
    </svg>
  );
}

const pillarIcons = [
  <DumbbellIcon key="d" />,
  <ForkIcon key="f" />,
  <PeopleIcon key="p" />,
];

export default function HomePage() {
  return (
    <>
      {/* Hero — split so Hollie stays visible (photo slot: replace with dedicated hero) */}
      <section className="bg-cream">
        <div className="mx-auto grid min-h-[88vh] max-w-6xl lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-xl">
              <h1 className="animate-rise font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
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
          <div className="relative min-h-[420px] lg:min-h-full">
            <Image
              src="/images/hollie-vip.jpg"
              alt="Hollie Nicholson training with dumbbells"
              fill
              priority
              className="object-cover object-[center_18%]"
            />
          </div>
        </div>
        <div className="border-t border-ink/10">
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
          Training, nutrition and support for a stronger you — progressive
          lifting, a simple way to eat, and enough coaching to actually stay
          with it.
        </p>
      </Section>

      {/* Method icons — cream circles on blush, vertical rules (Hollie mockup) */}
      <section id="method" className="scroll-mt-24 bg-blush">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-0">
            {methodPillars.map((pillar, i) => (
              <div
                key={pillar.name}
                className={`text-center sm:px-8 ${
                  i > 0 ? "sm:border-l sm:border-ink/15" : ""
                }`}
              >
                <IconCircle>{pillarIcons[i]}</IconCircle>
                <h3 className="mt-5 font-serif text-xl text-ink sm:text-2xl">
                  {pillar.name}
                </h3>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-ink/65">
                  {pillar.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainerize-style app UI + plan points */}
      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center lg:grid-cols-2">
          <div className="relative min-h-[480px] overflow-hidden bg-gradient-to-br from-blush/80 via-paper to-cream lg:min-h-[560px]">
            <AppPhones />
          </div>
          <div className="px-5 py-16 sm:px-10 lg:px-14">
            <Eyebrow>In the STRONG app</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl">
              A clear plan. A stronger you.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Members train inside Hollie&apos;s white-label Trainerize app —
              this week&apos;s workouts, videos, and check-ins in one place.
            </p>
            <ul className="mt-10 space-y-6">
              {planPoints.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-4 border-t border-ink/10 pt-5"
                >
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
