import HeroSlider from "@/components/home/HeroSlider";
import EnrollCTA from "@/components/home/EnrollCTA";
import QuickLinks from "@/components/home/QuickLinks";
import Welcome from "@/components/home/Welcome";
import WhyChoose from "@/components/home/WhyChoose";
import SafetyCare from "@/components/home/SafetyCare";
import EducationLevels from "@/components/home/EducationLevels";
import DayInLife from "@/components/home/DayInLife";
import AdmissionsSteps from "@/components/home/AdmissionsSteps";
import EnrollmentBanner from "@/components/home/EnrollmentBanner";
import NewsEvents from "@/components/home/NewsEvents";
import Testimonials from "@/components/home/Testimonials";
import SchoolFaq from "@/components/home/SchoolFaq";
import Partners from "@/components/home/Partners";
import HomePopups from "@/components/home/HomePopups";
import { getActivePopups } from "@/lib/cms";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const popups = await getActivePopups();

  return (
    <>
      <HomePopups popups={popups} />
      <HeroSlider />
      <EnrollCTA />
      <QuickLinks />
      <Welcome />
      <WhyChoose />
      <SafetyCare />
      <EducationLevels />
      <DayInLife />
      <AdmissionsSteps />
      <EnrollmentBanner />
      <NewsEvents />
      <Testimonials />
      <SchoolFaq />
      <Partners />
    </>
  );
}
