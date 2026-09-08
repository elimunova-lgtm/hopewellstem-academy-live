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
  slug?: string;
  category?: string;
  content?: string;
};

export const news: NewsItem[] = [
  {
    title: "Reliable Student Transport",
    date: "January 5, 2025",
    excerpt:
      "Reliable and efficient student transport services launched, ensuring safe and timely travel to and from school.",
    image: images.news.transport,
    slug: "reliable-student-transport",
    category: "News",
    content:
      "Safety on the road starts before the school day begins.\n\nHopewell STEM Academy has launched dependable student transport services covering routes across Nakuru, so families can trust that their children arrive on time and return home safely.\n\nEvery vehicle is supervised, seat-belted and tracked, giving parents peace of mind throughout the school year.",
  },
  {
    title: "Holiday Robotics Bootcamp",
    date: "April 7 – 17, 2025",
    excerpt:
      "Join us and ignite your child's imagination with robotics during our hands-on holiday bootcamp.",
    image: images.news.bootcamp,
    slug: "holiday-robotics-bootcamp",
    category: "News",
    content:
      "Learning never stops at Hopewell STEM Academy — even during the holidays.\n\nOur hands-on robotics bootcamp invites students to design, build and program their own robots, guided by expert STEM facilitators.\n\nThrough daily engineering challenges, coding sessions and friendly robot battles, children develop problem-solving skills, creativity and teamwork while having a great time.",
  },
  {
    title: "Admissions Ongoing 2025",
    date: "2025",
    excerpt:
      "Enrol now and let your child learn cutting-edge technology, problem solving and collaboration skills.",
    image: images.news.admission,
    slug: "admissions-ongoing-2025",
    category: "News",
    content:
      "New families are joining Hopewell STEM Academy every term.\n\nWe offer playgroup, primary school and junior high school programmes built around hands-on STEM learning — coding, robotics, science and engineering taught through real projects.\n\nContact our admissions team to arrange a campus visit, assessment and interview, and secure your child's place today.",
  },
  {
    title: "Robotics Team Victory",
    date: "January 25, 2025",
    excerpt:
      "Our robotics team secured first place in the National Robotics Championship.",
    image: images.news.robotics,
    slug: "robotics-team-victory",
    category: "News",
    content:
      "Hopewell STEM Academy's robotics team has done it again.\n\nThe team secured first place at the National Robotics Championship, outperforming schools from across Kenya with an original, competition-ready robot built entirely by our students.\n\nThis victory reflects our approach: giving every learner a chance to build, code and innovate — and then backing them to shine on the national stage.",
  },
  {
    title: "Why Hopewell STEM Academy Is One of the Best Schools in Nakuru, Kenya",
    date: "September 8, 2026",
    excerpt:
      "What makes a school 'the best' isn't just results — it's how children are taught. Here's why parents rank Hopewell STEM Academy among the best schools in Nakuru.",
    image: images.news.robotics,
    slug: "why-hopewell-stem-academy-is-one-of-the-best-schools-in-nakuru",
    category: "Blog",
    content:
      "When parents search for the best schools in Nakuru, they are really asking one question: which school will give my child the strongest start in life?\n\nAt Hopewell STEM Academy, we believe the answer is a hands-on STEM education delivered by teachers who genuinely know each child. Located in Pipeline, Nakuru, we serve families from across the county who want more than rote learning.\n\nOur classrooms look different. Learners build and program robots, run science investigations, write their first code and present their work — not just once a term, but every single week. Friday is our famous STEM Day, when the whole school engages in project-based innovation.\n\nWe combine this modern, technology-rich curriculum with the values parents expect from a private school in Nakuru: discipline, mentoring, safe transport, nutritious meals and open communication with the family.\n\nBecause classes are small, teachers track each child's progress closely. Struggles are caught early and strengths are stretched. That is why our students excel in national STEM competitions and why families recommend us to friends and relatives.\n\nChoosing a school is one of the biggest decisions a parent makes. We warmly invite you to visit Pipeline, meet our team and see for yourself why Hopewell STEM Academy is consistently counted among the best STEM schools in Nakuru and Kenya.",
  },
  {
    title: "What Is STEM Education and Why It Matters for Kenyan Schools",
    date: "September 5, 2026",
    excerpt:
      "STEM stands for Science, Technology, Engineering and Mathematics. Learn why Kenya's top STEM schools teach it through hands-on projects — and what it means for your child.",
    image: images.news.transport,
    slug: "what-is-stem-education-and-why-it-matters-for-kenyan-schools",
    category: "Blog",
    content:
      "STEM education is the teaching of Science, Technology, Engineering and Mathematics as connected, hands-on subjects — not as four separate lists of facts.\n\nIn a STEM school in Kenya like Hopewell STEM Academy, your child might design a solar-powered model in science class, program it using code learned the same week, and present the working prototype to their classmates. Learning becomes memorable because children do, not just read.\n\nWhy does this matter? Kenya's economy is digitalising quickly. Careers in medicine, software, engineering, agriculture and business increasingly require technological skills. Children who learn to think like scientists and engineers early develop problem-solving habits that serve them for life.\n\nResearch consistently shows project-based STEM learning improves critical thinking, collaboration and confidence. Students who build things are braver with new challenges — an advantage in national exams and beyond.\n\nAt Hopewell, STEM runs from playgroup through junior high. Even our youngest learners explore through discovery play, while older students take dedicated robotics, coding and advanced science lessons in our computer lab.\n\nThe future belongs to innovators. A quality STEM school gives Kenyan children the tools to shape it.",
  },
  {
    title: "How to Choose the Right School in Nakuru: A Parent's Guide",
    date: "September 1, 2026",
    excerpt:
      "From curriculum and class sizes to transport and values — a simple checklist to help Nakuru parents choose the best school for their child.",
    image: images.news.admission,
    slug: "how-to-choose-the-right-school-in-nakuru",
    category: "Blog",
    content:
      "With so many schools in Nakuru, how does a parent choose wisely? Start with your child in mind, then work through this checklist.\n\n1. Look beyond exam results. Good results matter, but the best schools in Nakuru also develop curiosity, resilience and character. Ask what kind of learner your child will become.\n\n2. Inspect the teaching approach. Is learning active or passive? A school that uses labs, projects, clubs and technology — like Hopewell STEM Academy's robotics and coding programmes — prepares children for the way the world actually works.\n\n3. Check class sizes. Smaller classes mean more individual attention, more speaking up and stronger teacher-child relationships.\n\n4. Consider the whole day. Safe transport, nutritious meals, sports, clubs and after-school activities all shape your child's experience. Visit at pick-up time and watch how the school really operates.\n\n5. Walk the campus. Meet the teachers, look at the classrooms and the computer lab, and ask how the school handles safety, discipline and communication with parents.\n\n6. Talk to current parents. Honest feedback from families already enrolled is worth more than any brochure.\n\n7. Match the values. The school you choose should reflect the discipline, faith and character you want for your family.\n\nChoosing well takes effort, but the right school changes a child's future. If you are comparing schools in Nakuru, we would be delighted to show you around Hopewell STEM Academy and answer your questions — no pressure, just facts.",
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
    date: "August 2026",
    text: "The STEM program at Hopewell has transformed my daughter's approach to learning. The hands-on science and coding classes have sparked a real interest in technology — and she comes home excited about STEM Fridays.",
  },
  {
    name: "John Kipchoge",
    initials: "JK",
    date: "July 2026",
    text: "The robotics program here is outstanding. My son has developed incredible problem-solving skills and confidence, and he loves the Debate & Mjadala club. The focus on practical applications truly prepares students for the future.",
  },
  {
    name: "Elizabeth Omondi",
    initials: "EO",
    date: "June 2026",
    text: "From the Swimming club on a gentle afternoon to the structured academic day, my children are happy at Hopewell. The innovative teaching methods have helped them grow into confident, critical thinkers.",
  },
  {
    name: "Grace Kimani",
    initials: "GK",
    date: "May 2026",
    text: "The extracurricular activities and STEM clubs give my children opportunities to explore their interests. Games Day on Thursdays is the highlight of their week, and the science fair projects are impressively well organised.",
  },
  {
    name: "Peter Maina",
    initials: "PM",
    date: "December 2025",
    text: "The teachers' dedication to student success is remarkable. They provide regular feedback and are always available to address parents' concerns. The academic standards are high but achievable.",
  },
  {
    name: "David Mutua",
    initials: "DM",
    date: "November 2025",
    text: "The school's integration of technology in learning is impressive. The computer and coding classes have given my son skills that are relevant in today's digital world.",
  },
  {
    name: "Sarah Anyango",
    initials: "SA",
    date: "March 2025",
    text: "As a working parent, the supervised transport and clear communication give me total peace of mind. My daughter's safety and wellbeing are clearly the school's highest priority.",
  },
  {
    name: "Brian Otieno",
    initials: "BO",
    date: "June 2024",
    text: "What stands out is the blend of academics and character. The Scouts & Environmental club has made my son more responsible and eager to learn. Hopewell truly builds the whole child.",
  },
];

export type Partner = { name: string; logo: string };

export const partners: Partner[] = [
  { name: "E.M.I.T Centre", logo: images.partners.emit },
  { name: "InfinitiTech Solutions", logo: images.partners.infinititech },
  { name: "African Shipping", logo: images.partners.as },
];
