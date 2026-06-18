import HeroSlider from "@/components/home/HeroSlider";
import QuickLinks from "@/components/home/QuickLinks";
import Welcome from "@/components/home/Welcome";
import WhyChoose from "@/components/home/WhyChoose";
import EducationLevels from "@/components/home/EducationLevels";
import EnrollmentBanner from "@/components/home/EnrollmentBanner";
import NewsEvents from "@/components/home/NewsEvents";
import Testimonials from "@/components/home/Testimonials";
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
      <QuickLinks />
      <Welcome />
      <WhyChoose />
      <EnrollmentBanner />
      <EducationLevels />
      <NewsEvents />
      <Testimonials />
      <Partners />
    </>
  );
}
