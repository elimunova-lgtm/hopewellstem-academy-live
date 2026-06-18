import { images } from "./images";

export type Slide = {
  image: string;
  title: string;
  subtitle: string;
};

export const heroSlides: Slide[] = [
  {
    image: images.heroSlides[0],
    title: "Welcome to Hopewell STEM Academy",
    subtitle: "One Team, One Purpose, Student Success",
  },
  {
    image: images.heroSlides[1],
    title: "Excellence in Education",
    subtitle: "Shaping tomorrow's innovators and leaders",
  },
  {
    image: images.heroSlides[2],
    title: "Inspiring Innovation",
    subtitle: "Hands-on STEM learning that builds bright futures",
  },
];

export type QuickLink = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export const whyChoose = [
  {
    title: "Advanced STEM Curriculum",
    description:
      "A comprehensive, competency-based curriculum that integrates cutting-edge technology, hands-on experiments and real-world applications.",
    icon: "FaFlask",
  },
  {
    title: "Innovation Labs",
    description:
      "State-of-the-art robotics workshops, coding labs and science facilities where students learn through project-based experimentation.",
    icon: "FaRobot",
  },
  {
    title: "Expert STEM Faculty",
    description:
      "Experienced educators with industry expertise in science, technology, engineering and mathematics deliver world-class instruction.",
    icon: "FaChalkboardTeacher",
  },
  {
    title: "Future-Ready Skills",
    description:
      "Programs in artificial intelligence, machine learning and digital literacy build essential 21st-century skills.",
    icon: "FaMicrochip",
  },
  {
    title: "Clubs & Societies",
    description:
      "A vibrant range of clubs including Robotics, Coding Society, Science Olympiad and the Mathematics Club fosters collaboration.",
    icon: "FaUsers",
  },
  {
    title: "Global Recognition",
    description:
      "Our students excel in national STEM competitions and earn places at leading universities, reflecting our pursuit of excellence.",
    icon: "FaGlobeAfrica",
  },
];

export type Level = {
  title: string;
  blurb: string;
  description: string;
  image: string;
  href: string;
  features: string[];
};

export const educationLevels: Level[] = [
  {
    title: "Playgroup",
    blurb: "Where young minds begin their journey of discovery and wonder.",
    description:
      "Young minds are like newly formed galaxies — full of energy, expansive and curious. Our nurturing playgroup builds an early STEM foundation through creative play.",
    image: images.levels.playgroup,
    href: "/academics/playgroup",
    features: ["Discovery Learning", "Nurturing Environment", "Early STEM Foundation"],
  },
  {
    title: "Primary School",
    blurb: "Where creativity meets technology in hands-on learning experiences.",
    description:
      "We envision every learner becoming a world-class scientist, technologist, engineer or mathematician through advanced labs and project-based learning.",
    image: images.levels.primary,
    href: "/academics/primary",
    features: ["Advanced Labs", "Robotics Program", "Project-Based Learning"],
  },
  {
    title: "Junior High School",
    blurb: "Developing tomorrow's leaders through comprehensive education.",
    description:
      "Preparing young minds for advanced academic challenges through comprehensive STEM education and leadership development.",
    image: images.levels.junior,
    href: "/academics/junior-high",
    features: ["Advanced Sciences", "Coding & Technology", "Collaborative Learning"],
  },
];

export type NewsItem = {
  title: string;
  date: string;
  excerpt: string;
  image: string;
};

export const news: NewsItem[] = [
  {
    title: "Reliable Student Transport",
    date: "January 5, 2025",
    excerpt:
      "Reliable and efficient student transport services launched, ensuring safe and timely travel to and from school.",
    image: images.news.transport,
  },
  {
    title: "Holiday Robotics Bootcamp",
    date: "April 7 – 17, 2025",
    excerpt:
      "Join us and ignite your child's imagination with robotics during our hands-on holiday bootcamp.",
    image: images.news.bootcamp,
  },
  {
    title: "Admissions Ongoing 2025",
    date: "2025",
    excerpt:
      "Enrol now and let your child learn cutting-edge technology, problem solving and collaboration skills.",
    image: images.news.admission,
  },
  {
    title: "Robotics Team Victory",
    date: "January 25, 2025",
    excerpt:
      "Our robotics team secured first place in the National Robotics Championship.",
    image: images.news.robotics,
  },
];

export type EventItem = {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  image: string;
};

export const events: EventItem[] = [
  {
    title: "School Fun Day",
    date: "April 4, 2025",
    time: "9:00 AM",
    description:
      "An exciting day filled with activities including water slides, bouncy castles and a fashion show. Bring your friends and family for a day of fun.",
    location: "School Grounds",
    image: images.events.funday,
  },
  {
    title: "STEM Holiday Bootcamp",
    date: "April 7, 2025",
    time: "10:00 AM",
    description:
      "A hands-on holiday programme introducing students to robotics, coding and engineering challenges.",
    location: "Innovation Hub",
    image: images.events.bootcamp,
  },
  {
    title: "Annual Sports Day",
    date: "March 22, 2025",
    time: "8:00 AM",
    description:
      "A day of athletic competition, team sports and physical activities celebrating our students' sporting achievements.",
    location: "School Sports Ground",
    image: images.events.sports,
  },
  {
    title: "STEM Career Fair",
    date: "April 15, 2025",
    time: "11:00 AM",
    description:
      "Meet industry professionals and explore STEM career opportunities with over 20 companies and universities present.",
    location: "School Hall",
    image: images.events.career,
  },
];

export type Testimonial = {
  name: string;
  initials: string;
  date: string;
  text: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Margaret Wanjiru",
    initials: "MW",
    date: "February 15, 2024",
    text: "The STEM program at Hopewell has transformed my daughter's approach to learning. The teachers are exceptional, and the hands-on learning has sparked a real interest in science and technology.",
  },
  {
    name: "John Kipchoge",
    initials: "JK",
    date: "January 20, 2024",
    text: "The robotics program here is outstanding. My son has developed incredible problem-solving skills and confidence. The focus on practical applications truly prepares students for the future.",
  },
  {
    name: "Elizabeth Omondi",
    initials: "EO",
    date: "January 5, 2024",
    text: "The innovative teaching methods and focus on practical learning have helped my children develop critical thinking skills. The school's commitment to excellence is evident in everything they do.",
  },
  {
    name: "Peter Maina",
    initials: "PM",
    date: "December 12, 2023",
    text: "The teachers' dedication to student success is remarkable. They provide regular feedback and are always available to address parents' concerns. The academic standards are high but achievable.",
  },
  {
    name: "Grace Kimani",
    initials: "GK",
    date: "December 8, 2023",
    text: "The extracurricular activities and STEM clubs have given my children opportunities to explore their interests. The science fair projects are particularly impressive and well organised.",
  },
  {
    name: "David Mutua",
    initials: "DM",
    date: "November 15, 2023",
    text: "The school's integration of technology in learning is impressive. The computer programming classes have given my son skills that are relevant in today's digital world.",
  },
];

export type Partner = { name: string; logo: string };

export const partners: Partner[] = [
  { name: "E.M.I.T Centre", logo: images.partners.emit },
  { name: "InfinitiTech Solutions", logo: images.partners.infinititech },
  { name: "African Shipping", logo: images.partners.as },
];
