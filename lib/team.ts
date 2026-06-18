import { cldUrl } from "./cloudinary";

export type Person = {
  name: string;
  role: string;
  image?: string;
  bioImage?: string;
};

const img = (publicId: string) => cldUrl(publicId);

export const directors: Person[] = [
  {
    name: "Mr. Ezekiel Manyara",
    role: "General Director",
    image: img("stemhsa/gallery/easy"),
    bioImage: img("stemhsa/gallery/ezzym"),
  },
  {
    name: "Ms. Susan Nyawira",
    role: "General Director",
    image: img("stemhsa/gallery/nyawira"),
    bioImage: img("stemhsa/gallery/mrs.nyawira"),
  },
  {
    name: "Dr. Mary Mwangi",
    role: "STEM Trainer & Director — Curriculum, Instruction & Assessment",
    image: img("stemhsa/gallery/dr"),
    bioImage: img("stemhsa/gallery/dr. mary"),
  },
];

export const teachingStaff: Person[] = [
  { name: "Md. Purity Njeri", role: "Head Teacher", image: img("stemhsa/gallery/purity") },
  {
    name: "Mr. Daniel Watene",
    role: "Deputy Head Teacher & Class Teacher, Grade 1",
    image: img("stemhsa/gallery/daniel"),
  },
  { name: "Md. Agnes Nduta", role: "Class Teacher, PP2", image: img("stemhsa/gallery/agnes") },
  { name: "Md. Irene", role: "Class Teacher, PP1" },
  { name: "Mr. Timothy Mbugua", role: "Class Teacher, Grade 5", image: img("stemhsa/gallery/Timo") },
  { name: "Mr. John Nzau", role: "Class Teacher, Grade 3" },
  { name: "Md. Beth Waithera", role: "Class Teacher, Grade 2", image: img("stemhsa/gallery/beth") },
  { name: "Mr. Samuel Kairu", role: "Class Teacher, Grade 7", image: img("stemhsa/gallery/kairu") },
  { name: "Md. Mary", role: "Class Teacher, Grade 8", image: img("stemhsa/gallery/md mary") },
  { name: "Mr. Joseph Mwaura", role: "ICT & STEM Instructor", image: img("stemhsa/gallery/josee") },
  { name: "Mr. Larry Marongo", role: "ICT & STEM Instructor", image: img("stemhsa/gallery/larry") },
  { name: "Mr. James M.", role: "Class Teacher, Grade 9" },
  { name: "Md. Annex Onduso", role: "Class Teacher, Grade 4" },
  { name: "Md. Esther Nyambura", role: "Class Teacher, Grade 6" },
  { name: "Md. Anastacia Rotich", role: "Class Teacher, PP1", image: img("stemhsa/gallery/anastacia") },
];

export const nonTeachingStaff: Person[] = [
  { name: "Md. Anne Boaz", role: "Secretary", image: img("stemhsa/gallery/ann") },
  { name: "Md. Maureen Mwaura", role: "In-charge of News & Media", image: img("stemhsa/gallery/maureen") },
  { name: "Md. Sylvia Wangeci", role: "Supervisor", image: img("stemhsa/gallery/sylivia") },
  { name: "Md. Sarah Kibunja", role: "Cateress", image: img("stemhsa/gallery/sarah") },
  { name: "Mr. Vincent", role: "Gatekeeper", image: img("stemhsa/gallery/vinny") },
  { name: "Mr. David", role: "Grounds Keeper", image: img("stemhsa/gallery/davy") },
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
