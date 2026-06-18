export type Person = {
  name: string;
  role: string;
  image?: string;
  bioImage?: string;
};

const img = (file: string) => `/images/${file}`;

export const directors: Person[] = [
  {
    name: "Mr. Ezekiel Manyara",
    role: "General Director",
    image: img("easy.jpg"),
    bioImage: img("ezzym.jpg"),
  },
  {
    name: "Ms. Susan Nyawira",
    role: "General Director",
    image: img("nyawira.jpg"),
    bioImage: img("mrs.nyawira.jpg"),
  },
  {
    name: "Dr. Mary Mwangi",
    role: "STEM Trainer & Director — Curriculum, Instruction & Assessment",
    image: img("dr.jpg"),
    bioImage: img("dr. mary.jpg"),
  },
];

export const teachingStaff: Person[] = [
  { name: "Md. Purity Njeri", role: "Head Teacher", image: img("purity.png") },
  {
    name: "Mr. Daniel Watene",
    role: "Deputy Head Teacher & Class Teacher, Grade 1",
    image: img("daniel.png"),
  },
  { name: "Md. Agnes Nduta", role: "Class Teacher, PP2", image: img("agnes.png") },
  { name: "Md. Irene", role: "Class Teacher, PP1" },
  { name: "Mr. Timothy Mbugua", role: "Class Teacher, Grade 5", image: img("Timo.png") },
  { name: "Mr. John Nzau", role: "Class Teacher, Grade 3" },
  { name: "Md. Beth Waithera", role: "Class Teacher, Grade 2", image: img("beth.png") },
  { name: "Mr. Samuel Kairu", role: "Class Teacher, Grade 7", image: img("kairu.png") },
  { name: "Md. Mary", role: "Class Teacher, Grade 8", image: img("md mary.png") },
  { name: "Mr. Joseph Mwaura", role: "ICT & STEM Instructor", image: img("josee.png") },
  { name: "Mr. Larry Marongo", role: "ICT & STEM Instructor", image: img("larry.png") },
  { name: "Mr. James M.", role: "Class Teacher, Grade 9" },
  { name: "Md. Annex Onduso", role: "Class Teacher, Grade 4" },
  { name: "Md. Esther Nyambura", role: "Class Teacher, Grade 6" },
  { name: "Md. Anastacia Rotich", role: "Class Teacher, PP1", image: img("anastacia.png") },
];

export const nonTeachingStaff: Person[] = [
  { name: "Md. Anne Boaz", role: "Secretary", image: img("ann.png") },
  { name: "Md. Maureen Mwaura", role: "In-charge of News & Media", image: img("maureen.png") },
  { name: "Md. Sylvia Wangeci", role: "Supervisor", image: img("sylivia.png") },
  { name: "Md. Sarah Kibunja", role: "Cateress", image: img("sarah.png") },
  { name: "Mr. Vincent", role: "Gatekeeper", image: img("vinny.png") },
  { name: "Mr. David", role: "Grounds Keeper", image: img("davy.png") },
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
