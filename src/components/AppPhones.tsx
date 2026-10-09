import type { ReactNode } from "react";

/**
 * Stylized Trainerize-style white-label app UI (not a screenshot of her live app).
 * Swap for real Trainerize/app store screenshots when Hollie provides them.
 */
export function AppPhones() {
  return (
    <div className="relative mx-auto flex h-full min-h-[480px] max-w-md items-end justify-center gap-4 px-4 py-10 sm:gap-6 lg:max-w-none lg:justify-start lg:px-10 lg:py-16">
      <PhoneFrame className="z-10 translate-y-4 rotate-[-6deg]" label="Today">
        <WorkoutHome />
      </PhoneFrame>
      <PhoneFrame className="z-20 rotate-[4deg]" label="Workout">
        <WorkoutDetail />
      </PhoneFrame>
    </div>
  );
}

function PhoneFrame({
  children,
  className = "",
  label,
}: {
  children: ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`w-[180px] shrink-0 overflow-hidden rounded-[1.75rem] border-[5px] border-ink bg-ink shadow-2xl shadow-ink/25 sm:w-[200px] ${className}`}
      aria-label={`App preview — ${label}`}
    >
      <div className="relative bg-paper text-ink">
        <div className="mx-auto mt-2 h-4 w-20 rounded-full bg-ink/90" />
        <div className="min-h-[340px] px-3 pb-4 pt-3 sm:min-h-[380px]">{children}</div>
        <div className="mx-auto mb-2 h-1 w-16 rounded-full bg-ink/20" />
      </div>
    </div>
  );
}

function WorkoutHome() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-teal">
            STRONG
          </p>
          <p className="font-serif text-lg leading-tight">Today</p>
        </div>
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blush text-[10px] font-semibold">
          HN
        </div>
      </div>
      <div className="rounded-xl bg-ink px-3 py-3 text-cream">
        <p className="text-[9px] tracking-[0.14em] uppercase text-teal">
          This week
        </p>
        <p className="mt-1 font-serif text-base">Lower Body Strength</p>
        <p className="mt-1 text-[11px] text-cream/70">38 min · Progressive</p>
      </div>
      <p className="text-[9px] font-semibold tracking-[0.16em] uppercase text-muted">
        Up next
      </p>
      {[
        { day: "Tue", name: "Upper Push", meta: "34 min" },
        { day: "Wed", name: "Full Body Burn", meta: "30 min" },
        { day: "Fri", name: "Live with Hollie", meta: "5:45 AM ET" },
      ].map((row) => (
        <div
          key={row.day}
          className="flex items-center gap-2 rounded-lg border border-ink/8 bg-cream px-2.5 py-2"
        >
          <span className="w-7 text-[10px] font-semibold text-teal">{row.day}</span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12px] font-medium">{row.name}</p>
            <p className="text-[10px] text-muted">{row.meta}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WorkoutDetail() {
  const moves = [
    { name: "Goblet squat", sets: "3 × 10" },
    { name: "RDL", sets: "3 × 8" },
    { name: "Split squat", sets: "3 × 8/leg" },
    { name: "Hip thrust", sets: "3 × 12" },
    { name: "Core finisher", sets: "2 rounds" },
  ];

  return (
    <div className="space-y-3">
      <p className="text-[9px] font-semibold tracking-[0.18em] uppercase text-teal">
        Workout
      </p>
      <p className="font-serif text-lg leading-tight">Lower Body Strength</p>
      <div className="flex gap-2 text-[10px] text-muted">
        <span className="rounded-full bg-blush px-2 py-0.5 text-ink">38 min</span>
        <span className="rounded-full bg-blush px-2 py-0.5 text-ink">Dumbbells</span>
      </div>
      <div className="space-y-1.5 pt-1">
        {moves.map((m, i) => (
          <div
            key={m.name}
            className="flex items-center gap-2 rounded-lg border border-ink/8 bg-cream px-2.5 py-2"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[9px] text-cream">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-medium">{m.name}</p>
              <p className="text-[10px] text-muted">{m.sets}</p>
            </div>
            <span className="text-[10px] text-teal">▶</span>
          </div>
        ))}
      </div>
    </div>
  );
}
