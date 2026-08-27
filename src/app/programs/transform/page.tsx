import type { Metadata } from "next";
import Image from "next/image";
import { Faq } from "@/components/Faq";
import { ContactForm } from "@/components/Forms";
import { Button, Eyebrow, Section } from "@/components/ui";
import { faqs, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "STRONG Transform",
};

export default function TransformPage() {
  return (
    <>
      <section className="relative min-h-[75vh] overflow-hidden bg-ink text-cream">
        <Image
          src="/images/hollie-protein.jpg"
          alt="Hollie preparing a protein shake"
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/20" />
        <div className="relative mx-auto flex min-h-[75vh] max-w-6xl items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-xl">
            <Eyebrow>16 weeks · 1:1</Eyebrow>
            <h1 className="mt-4 font-serif text-5xl sm:text-6xl">
              Transform your meals, metabolism, and mindset.
            </h1>
            <p className="mt-5 text-sm leading-relaxed text-cream/80">
              Custom nutrition coaching for women who are done with the same 10
              pounds and the same Monday restart.
            </p>
            <p className="mt-4 font-serif text-3xl">$1,699</p>
            <div className="mt-8">
              <Button href="#call" variant="light">
                Book a free discovery call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Cut the food noise. Keep the ice cream.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Hollie helps you eat in a way that fuels your body and your family
              — date nights, takeout, cake with the kids included. You will know
              what to eat without a separate meal plan for everyone else.
            </p>
          </div>
          <ul className="space-y-4 text-sm">
            {[
              "Boost metabolism so it works for you",
              "Lose body fat, not just scale weight",
              "Break the gain-and-lose loop",
              "Personalized meal ideas that fit your life",
              "Weekly guidance plus unlimited messaging",
              "Sleep, stress, hydration, and training alignment",
            ].map((item) => (
              <li key={item} className="border-b border-ink/10 pb-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:px-12">
          <blockquote className="max-w-3xl">
            <p className="font-serif text-3xl leading-snug sm:text-4xl">
              “{testimonials[5].quote}”
            </p>
            <footer className="mt-6 text-[11px] tracking-[0.18em] uppercase text-muted">
              {testimonials[5].name} · {testimonials[5].role}
            </footer>
          </blockquote>
        </div>
      </section>

      <Section id="call" className="py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Discovery call</Eyebrow>
            <h2 className="mt-4 font-serif text-4xl">
              Let&apos;s see if Transform is the right fit.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              This is 16 weeks of close work, so Hollie starts with a
              conversation. Tell her what you need. If you already know you are
              ready, say so in the message.
            </p>
          </div>
          <ContactForm defaultInterest="1:1 Transform coaching" />
        </div>
        <div className="mt-16">
          <Faq items={faqs.transform} />
        </div>
      </Section>
    </>
  );
}
