import Reveal from "@/components/Reveal";
import { SectionHeading } from "@/components/ui";

const schedule = [
  {
    time: "7:30 am",
    title: "Warm Welcome & Arrival",
    text: "Teachers greet every child at the gate — a calm, happy start with supervised drop-off.",
  },
  {
    time: "8:10 am",
    title: "Lessons Commence",
    text: "Interactive lessons in English, maths and sciences in small groups, with real attention for every child.",
  },
  {
    time: "10:20 am",
    title: "Break Time",
    text: "A lively, fully supervised break with play, movement and friendships on the school yard.",
  },
  {
    time: "12:50 pm",
    title: "Lunch & Rest",
    text: "A nourishing, supervised meal prepared fresh each day, followed by a short, quiet rest.",
  },
  {
    time: "2:00 pm",
    title: "Lessons Continue",
    text: "Afternoon classes with guided practice, projects and one-on-one support — running right through until 3:00 pm.",
  },
  {
    time: "3:00 pm",
    title: "Clubs & Activities",
    text: "From 3:00 to 4:00 pm pupils join Debate & Mjadala, Scouts & Environmental, the STEM club or our Swimming club.",
  },
  {
    time: "4:00 pm",
    title: "Home Time & Supervised Transport",
    text: "Safe, well-maintained buses take every child home under staff supervision.",
  },
];

const highlights = [
  { label: "Thursday is Games Day", note: "Sports, games and teamwork on the field" },
  { label: "Friday is STEM Day", note: "Robotics, labs, coding and inventions" },
];

export default function DayInLife() {
  return (
    <section className="section bg-cream">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            eyebrow="A Day at Hopewell"
            title="One Day, Shaped for Growth"
            intro="From the moment your child arrives until they wave goodbye, every hour is designed to build curiosity, confidence and character."
          />
        </Reveal>

        <div className="relative mx-auto mt-12 max-w-2xl">
          <span
            className="absolute left-[1.55rem] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold-300 via-gold to-gold-500 sm:left-[2.15rem]"
            aria-hidden="true"
          />
          <ol className="space-y-6">
            {schedule.map((step, index) => (
              <li key={step.time} className="relative grid gap-4 sm:grid-cols-[3rem_1fr] sm:gap-6">
                <Reveal delay={index * 40} className="relative z-10 flex items-start justify-start">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-white font-display text-sm font-bold text-brand shadow-card-soft sm:h-14 sm:w-14">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </Reveal>
                <Reveal delay={index * 40} className="relative">
                  <div className="rounded-2xl border border-brand-100 bg-white p-5 shadow-card-soft transition hover:-translate-y-1 hover:shadow-card">
                    <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-700 ring-1 ring-gold/30">
                      {step.time}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-bold text-brand">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 flex max-w-2xl flex-col items-stretch justify-center gap-4 sm:flex-row">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-gold/40 bg-white p-5 shadow-card-soft"
              >
                <span
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-brand-950 shadow-card-soft"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <p className="font-display text-base font-bold text-brand">{item.label}</p>
                  <p className="text-sm text-slate-600">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}