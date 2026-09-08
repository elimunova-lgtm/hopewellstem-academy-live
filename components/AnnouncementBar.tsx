import { intakeYear } from "@/lib/site";

const message = `Applications for the ${intakeYear} academic year are now open!  •  Join our upcoming Open Day  •  Enrol now and give your child a future-ready STEM education.`;

export default function AnnouncementBar() {
  return (
    <div className="overflow-hidden bg-accent py-2 text-sm font-medium text-white">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        <span className="px-8">{message}</span>
        <span className="px-8" aria-hidden="true">
          {message}
        </span>
      </div>
    </div>
  );
}
