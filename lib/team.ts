export type Person = {
  name: string;
  role: string;
  image?: string;
  bioImage?: string;
};

/**
 * NOTE: The original headshot public IDs referenced here were never uploaded
 * to the Cloudinary account (the account only holds 7 photos + logos +
 * flyers). Until the school supplies real headshots, staff and directors show
 * a clean initials avatar. To add a photo, upload it and set `image` here.
 */

export const directors: Person[] = [
  {
    name: "Mr. Ezekiel Manyara",
    role: "General Director",
  },
  {
    name: "Ms. Susan Nyawira",
    role: "General Director",
  },
  {
    name: "Dr. Mary Mwangi",
    role: "STEM Trainer & Director — Curriculum, Instruction & Assessment",
  },
];

export const teachingStaff: Person[] = [
  { name: "Md. Purity Njeri", role: "Head Teacher" },
  {
    name: "Mr. Daniel Watene",
    role: "Deputy Head Teacher & Class Teacher, Grade 1",
  },
  { name: "Md. Agnes Nduta", role: "Class Teacher, PP2" },
  { name: "Md. Irene", role: "Class Teacher, PP1" },
  { name: "Mr. Timothy Mbugua", role: "Class Teacher, Grade 5" },
  { name: "Mr. John Nzau", role: "Class Teacher, Grade 3" },
  { name: "Md. Beth Waithera", role: "Class Teacher, Grade 2" },
  { name: "Mr. Samuel Kairu", role: "Class Teacher, Grade 7" },
  { name: "Md. Mary", role: "Class Teacher, Grade 8" },
  { name: "Mr. Joseph Mwaura", role: "ICT & STEM Instructor" },
  { name: "Mr. Larry Marongo", role: "ICT & STEM Instructor" },
  { name: "Mr. James M.", role: "Class Teacher, Grade 9" },
  { name: "Md. Annex Onduso", role: "Class Teacher, Grade 4" },
  { name: "Md. Esther Nyambura", role: "Class Teacher, Grade 6" },
  { name: "Md. Anastacia Rotich", role: "Class Teacher, PP1" },
];

export const nonTeachingStaff: Person[] = [
  { name: "Md. Anne Boaz", role: "Secretary" },
  { name: "Md. Maureen Mwaura", role: "In-charge of News & Media" },
  { name: "Md. Sylvia Wangeci", role: "Supervisor" },
  { name: "Md. Sarah Kibunja", role: "Cateress" },
  { name: "Mr. Vincent", role: "Gatekeeper" },
  { name: "Mr. David", role: "Grounds Keeper" },
  { name: "Mr. Evans", role: "Grounds Keeper" },
];

export type Policy = {
  title: string;
  description: string;
  icon: string;
};

export const policies: Policy[] = [
  {
    title: "Code of Honour",
    description:
      "Hopewell STEM Academy upholds the highest standards of honour, respect and integrity. Both students and parents sign the Code of Honour annually.",
    icon: "FaShieldAlt",
  },
  {
    title: "Dress Code",
    description:
      "Students wear the official uniform, including during after-school programs. Sports shoes are permitted on games days.",
    icon: "FaCheck",
  },
  {
    title: "Code of Discipline",
    description:
      "Our responsibility-centred discipline model ensures a safe and structured learning environment for every student.",
    icon: "FaHandshake",
  },
  {
    title: "Student Handbook",
    description:
      "The Academy handbook outlines academic expectations, student conduct and the core values of Hopewell STEM Academy.",
    icon: "FaBook",
  },
  {
    title: "Communication Protocols",
    description:
      "Clear communication is essential. Our protocols guide parents and teachers in raising and addressing concerns effectively.",
    icon: "FaUsers",
  },
  {
    title: "Child Protection & Safety",
    description:
      "The safety and wellbeing of every child is our highest priority, supported by clear safeguarding procedures.",
    icon: "FaHeart",
  },
];