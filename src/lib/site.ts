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
  { href: "/shop", label: "Shop" },
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
    imagePosition: "center top",
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
    imagePosition: "center top",
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
    imagePosition: "center 12%",
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
    imagePosition: "center top",
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

export const shop = {
  disclosure:
    "Some of these are affiliate links. Hollie may earn a small commission if you buy — at no extra cost to you. She only recommends what she uses.",
  essentials: [
    {
      name: "Dumbbells",
      spec: "10–75 lbs",
      blurb: "The one piece you actually need. A necessity to build a STRONG body.",
      href: "https://amzn.to/3TFaMw5",
      cta: "Shop dumbbells",
      image: "/images/hollie-goblet.jpg",
      imagePosition: "center 20%",
    },
    {
      name: "Loop bands",
      spec: "0–125 lbs resistance",
      blurb: "Cable-machine work from a corner of your house. These show up in almost every STRONG week.",
      href: "https://amzn.to/40tO5wU",
      cta: "Shop loop bands",
      image: "/images/hollie-band.jpg",
      imagePosition: "center top",
    },
  ],
  gear: [
    {
      name: "Mini loop bands",
      spec: "Set of 5",
      blurb: "Glutes, activation, and travel days. Includes an instruction guide and carry bag.",
      href: "https://amzn.to/3nixMF0",
    },
    {
      name: "Fabric resistance bands",
      spec: "3 levels · non-slip",
      blurb: "Stay put when you move. Three levels of effort as you get stronger.",
      href: "https://amzn.to/3JN08yK",
    },
    {
      name: "Slam balls",
      spec: "10–40 lbs",
      blurb: "The fun extra. Perfect when you want to add power work to a home gym.",
      href: "https://amzn.to/42BVmwH",
    },
    {
      name: "Adjustable bench",
      spec: "Full-body bench",
      blurb: "When you are ready to level up presses, rows, and supported work.",
      href: "https://amzn.to/3K3HtjF",
    },
    {
      name: "Door anchor",
      spec: "Multi-point strap",
      blurb: "Turn any door into a cable station. Comes with a storage bag.",
      href: "https://amzn.to/3lIFk3x",
    },
    {
      name: "Wall anchor",
      spec: "Stainless steel mount",
      blurb: "A more permanent home-gym setup for band work.",
      href: "https://amzn.to/3ZjSKAG",
    },
    {
      name: "Weight clips",
      spec: "July Body · 10% off",
      blurb: "Make small jumps in weight without buying a new pair. Use code STRONGWITHHOLLIE.",
      href: "https://julybody.com/products/july-body-dumbbell-clips",
      code: "STRONGWITHHOLLIE",
    },
  ],
  protein: [
    {
      name: "Clean Simple Eats",
      spec: "Protein powder",
      blurb: "Hollie's everyday scoop. Use code HOLLIEN at checkout.",
      href: "https://cleansimpleeats.com/collections/protein-powder",
      code: "HOLLIEN",
    },
    {
      name: "Just Ingredients",
      spec: "Chocolate grass-fed whey",
      blurb: "A clean whey if dairy sits well with you.",
      href: "https://justingredients.us/",
    },
    {
      name: "Prime Protein",
      spec: "Dairy-free grass-fed beef",
      blurb: "The dairy-free option that still hits your protein target.",
      href: "https://www.equipfoods.com/products/prime-protein",
    },
    {
      name: "Legion",
      spec: "Supplements",
      blurb: "Use code HOLLIEN for discounts on the rest of the stack.",
      href: "https://legionathletics.com/products/supplements/?r=my7lk&utm_campaign=bc&utm_source=bc_hollien_my7lk",
      code: "HOLLIEN",
    },
  ],
} as const;

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
