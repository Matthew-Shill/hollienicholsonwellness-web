export const site = {
  name: "Hollie Nicholson Wellness",
  method: "STRONG",
  tagline: "Build the body you want to live in.",
  description:
    "Strength training and nutrition coaching for busy women. Follow-along workouts, a simple plan, and a trainer in your corner — without hours in the gym.",
  phone: "217-292-4252",
  phoneHref: "tel:2172924252",
  email: "Hollienicholsonfitness@gmail.com",
  emailHref: "mailto:Hollienicholsonfitness@gmail.com",
  facebook: "https://www.facebook.com/hollienicholsonwellness",
  live: {
    days: "Monday, Tuesday & Friday",
    time: "5:45 AM ET",
  },
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/live", label: "Live Studio" },
  { href: "/start", label: "Free Workouts" },
  { href: "/contact", label: "Contact" },
] as const;

export const programs = [
  {
    slug: "lean-body",
    eyebrow: "Starts August 31",
    name: "14-Day LeanBody Project",
    price: "$19",
    duration: "14 days",
    blurb: "Get back into a routine. Follow-along workouts, a simple eats guide, and a plan you actually finish.",
    href: "/programs/lean-body",
    cta: "Join for $19",
    image: "/images/hollie-squat.jpg",
    featured: true,
  },
  {
    slug: "lift-to-lean",
    eyebrow: "Next session September 14",
    name: "Lift to Lean",
    price: "$99",
    duration: "6 weeks",
    blurb: "A progressive 6-week plan to build strength, lose fat, and finally see your body change — at home.",
    href: "/programs/lift-to-lean",
    cta: "Start Lift to Lean",
    image: "/images/hollie-band.jpg",
    featured: false,
  },
  {
    slug: "vip",
    eyebrow: "Ongoing membership",
    name: "STRONG VIP",
    price: "From $79/mo",
    duration: "Month, quarter, or year",
    blurb: "Daily workouts, live coaching, yoga, and a community of women who are done starting over.",
    href: "/programs/vip",
    cta: "Join VIP",
    image: "/images/hollie-rack.jpg",
    featured: false,
  },
  {
    slug: "transform",
    eyebrow: "1:1 coaching",
    name: "STRONG Transform",
    price: "$1,699",
    duration: "16 weeks",
    blurb: "Custom nutrition coaching to change how you eat, fuel, and feel — without another diet.",
    href: "/programs/transform",
    cta: "Book a discovery call",
    image: "/images/hollie-protein.jpg",
    featured: false,
  },
] as const;

export const testimonials = [
  {
    quote:
      "STRONG is without a doubt the single most effective, efficient, and productive workout around. I've seen more change in my body over the last 2.5 years than a lifetime of working out ever produced.",
    name: "Nikki",
    role: "Mom & event planner",
  },
  {
    quote:
      "I’m stronger now than before I had kids. I started after my third baby feeling completely stuck. Since then, I’ve lost over 30 pounds. The workouts are quick, effective, and I can do them anywhere.",
    name: "Danielle",
    role: "Nurse, mom of 3",
  },
  {
    quote:
      "I tried everything — Burn Bootcamp, YouTube, nothing stuck. Now I just open the app and do the workout. I’ve lost over 60 pounds, even going through surgical menopause.",
    name: "Beth",
    role: "Educator, mom of 2",
  },
  {
    quote:
      "I lost 8 inches in 10 weeks. I feel so much stronger and able. I also love the daily devotionals. I recommend STRONG to everyone.",
    name: "Client",
    role: "STRONG VIP",
  },
  {
    quote:
      "Weights are not nearly as scary as I thought they were. My win is taking time for ME. Being a busy mom of 3 I almost always take care of everyone else — and this has boosted my mood, confidence, and energy.",
    name: "Client",
    role: "LeanBody Project",
  },
  {
    quote:
      "A couple of months in, I’ve lost 16 pounds in 7 weeks. Hollie is always there with practical, achievable action items. I’m wearing shorts I haven’t fit into for years.",
    name: "Heather",
    role: "1:1 nutrition coaching",
  },
] as const;

export const methodPillars = [
  {
    name: "Lift to Lean",
    detail:
      "Progressive strength training that reshapes your body without extreme cardio or burnout.",
  },
  {
    name: "40-20 Protocol",
    detail:
      "A simple daily rhythm: 40-minute strength workouts, 40g of protein per meal, 20g of fiber, and 20 minutes of walking.",
  },
  {
    name: "Daily Four Nutrition",
    detail:
      "Habit-based eating that works with family dinners, date nights, and real life — not against them.",
  },
] as const;

export const faqs = {
  general: [
    {
      q: "Is this for beginners?",
      a: "Yes. Every workout includes coaching, form cues, and modifications. Whether you are new to lifting or have been training for years, you will know exactly what to do.",
    },
    {
      q: "What equipment do I need?",
      a: "Dumbbells and resistance bands. That is it. No gym, no machines, no fancy setup. If you can spare a corner of a room, you can train.",
    },
    {
      q: "How long are the workouts?",
      a: "Most sessions are 30–40 minutes. LeanBody workouts are 30 minutes or less. Open the app, press play, and get on with your day.",
    },
    {
      q: "What if I miss a day?",
      a: "Life happens. The plan is built for busy weeks. You pick back up, follow the next workout, and keep going. Consistency over perfection.",
    },
  ],
  vip: [
    {
      q: "When are live workouts?",
      a: "Monday, Tuesday, and Friday at 5:45 AM ET on Zoom. If you cannot make it live, the recording is waiting for you in the app.",
    },
    {
      q: "How is this different from Peloton or YouTube?",
      a: "Those are libraries of random workouts. STRONG is a progressive plan that builds week to week, with a real coach (Hollie) and a community of women doing the same work.",
    },
    {
      q: "Can I cancel?",
      a: "Monthly memberships can be cancelled anytime. You will keep access through the billing period you already paid for.",
    },
  ],
  transform: [
    {
      q: "Do I have to book a discovery call?",
      a: "Yes for Transform. It is 16 weeks of 1:1 work, so Hollie uses the call to make sure it is the right fit for both of you.",
    },
    {
      q: "Is this only nutrition?",
      a: "Nutrition is the focus, but coaching also covers sleep, stress, hydration, and how your training supports your goals.",
    },
  ],
} as const;
