// One-off seed: adds slug/content/category to legacy news rows and inserts the
// SEO blog articles into the database. Run with DATABASE_URL set.
import pg from "pg";
import crypto from "node:crypto";

const { Client } = pg;

const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();

const img = {
  transport: "https://res.cloudinary.com/wqxtmkjt/image/upload/q_auto,f_auto/stemhsa/gallery/img_0261",
  bootcamp: "https://res.cloudinary.com/wqxtmkjt/image/upload/q_auto,f_auto/stemhsa/heroes/lab3",
  admission: "https://res.cloudinary.com/wqxtmkjt/image/upload/q_auto,f_auto/stemhsa/heroes/academics-primary",
  robotics: "https://res.cloudinary.com/wqxtmkjt/image/upload/q_auto,f_auto/stemhsa/heroes/academics-junior",
};

const posts = [
  {
    title: "Reliable Student Transport",
    slug: "reliable-student-transport",
    category: "News",
    dateLabel: "January 5, 2025",
    image: img.transport,
    excerpt:
      "Reliable and efficient student transport services launched, ensuring safe and timely travel to and from school.",
    content:
      "Safety on the road starts before the school day begins.\n\nHopewell STEM Academy has launched dependable student transport services covering routes across Nakuru, so families can trust that their children arrive on time and return home safely.\n\nEvery vehicle is supervised, seat-belted and tracked, giving parents peace of mind throughout the school year.",
  },
  {
    title: "Holiday Robotics Bootcamp",
    slug: "holiday-robotics-bootcamp",
    category: "News",
    dateLabel: "April 7 – 17, 2025",
    image: img.bootcamp,
    excerpt:
      "Join us and ignite your child's imagination with robotics during our hands-on holiday bootcamp.",
    content:
      "Learning never stops at Hopewell STEM Academy — even during the holidays.\n\nOur hands-on robotics bootcamp invites students to design, build and program their own robots, guided by expert STEM facilitators.\n\nThrough daily engineering challenges, coding sessions and friendly robot battles, children develop problem-solving skills, creativity and teamwork while having a great time.",
  },
  {
    title: "Admissions Ongoing 2025",
    slug: "admissions-ongoing-2025",
    category: "News",
    dateLabel: "2025",
    image: img.admission,
    excerpt:
      "Enrol now and let your child learn cutting-edge technology, problem solving and collaboration skills.",
    content:
      "New families are joining Hopewell STEM Academy every term.\n\nWe offer playgroup, primary school and junior high school programmes built around hands-on STEM learning — coding, robotics, science and engineering taught through real projects.\n\nContact our admissions team to arrange a campus visit, assessment and interview, and secure your child's place today.",
  },
  {
    title: "Robotics Team Victory",
    slug: "robotics-team-victory",
    category: "News",
    dateLabel: "January 25, 2025",
    image: img.robotics,
    excerpt:
      "Our robotics team secured first place in the National Robotics Championship.",
    content:
      "Hopewell STEM Academy's robotics team has done it again.\n\nThe team secured first place at the National Robotics Championship, outperforming schools from across Kenya with an original, competition-ready robot built entirely by our students.\n\nThis victory reflects our approach: giving every learner a chance to build, code and innovate — and then backing them to shine on the national stage.",
  },
  {
    title: "Why Hopewell STEM Academy Is One of the Best Schools in Nakuru, Kenya",
    slug: "why-hopewell-stem-academy-is-one-of-the-best-schools-in-nakuru",
    category: "Blog",
    dateLabel: "September 8, 2026",
    image: img.robotics,
    excerpt:
      "What makes a school 'the best' isn't just results — it's how children are taught. Here's why parents rank Hopewell STEM Academy among the best schools in Nakuru.",
    content:
      "When parents search for the best schools in Nakuru, they are really asking one question: which school will give my child the strongest start in life?\n\nAt Hopewell STEM Academy, we believe the answer is a hands-on STEM education delivered by teachers who genuinely know each child. Located in Pipeline, Nakuru, we serve families from across the county who want more than rote learning.\n\nOur classrooms look different. Learners build and program robots, run science investigations, write their first code and present their work — not just once a term, but every single week. Friday is our famous STEM Day, when the whole school engages in project-based innovation.\n\nWe combine this modern, technology-rich curriculum with the values parents expect from a private school in Nakuru: discipline, mentoring, safe transport, nutritious meals and open communication with the family.\n\nBecause classes are small, teachers track each child's progress closely. Struggles are caught early and strengths are stretched. That is why our students excel in national STEM competitions and why families recommend us to friends and relatives.\n\nChoosing a school is one of the biggest decisions a parent makes. We warmly invite you to visit Pipeline, meet our team and see for yourself why Hopewell STEM Academy is consistently counted among the best STEM schools in Nakuru and Kenya.",
  },
  {
    title: "What Is STEM Education and Why It Matters for Kenyan Schools",
    slug: "what-is-stem-education-and-why-it-matters-for-kenyan-schools",
    category: "Blog",
    dateLabel: "September 5, 2026",
    image: img.transport,
    excerpt:
      "STEM stands for Science, Technology, Engineering and Mathematics. Learn why Kenya's top STEM schools teach it through hands-on projects — and what it means for your child.",
    content:
      "STEM education is the teaching of Science, Technology, Engineering and Mathematics as connected, hands-on subjects — not as four separate lists of facts.\n\nIn a STEM school in Kenya like Hopewell STEM Academy, your child might design a solar-powered model in science class, program it using code learned the same week, and present the working prototype to their classmates. Learning becomes memorable because children do, not just read.\n\nWhy does this matter? Kenya's economy is digitalising quickly. Careers in medicine, software, engineering, agriculture and business increasingly require technological skills. Children who learn to think like scientists and engineers early develop problem-solving habits that serve them for life.\n\nResearch consistently shows project-based STEM learning improves critical thinking, collaboration and confidence. Students who build things are braver with new challenges — an advantage in national exams and beyond.\n\nAt Hopewell, STEM runs from playgroup through junior high. Even our youngest learners explore through discovery play, while older students take dedicated robotics, coding and advanced science lessons in our computer lab.\n\nThe future belongs to innovators. A quality STEM school gives Kenyan children the tools to shape it.",
  },
  {
    title: "How to Choose the Right School in Nakuru: A Parent's Guide",
    slug: "how-to-choose-the-right-school-in-nakuru",
    category: "Blog",
    dateLabel: "September 1, 2026",
    image: img.admission,
    excerpt:
      "From curriculum and class sizes to transport and values — a simple checklist to help Nakuru parents choose the best school for their child.",
    content:
      "With so many schools in Nakuru, how does a parent choose wisely? Start with your child in mind, then work through this checklist.\n\n1. Look beyond exam results. Good results matter, but the best schools in Nakuru also develop curiosity, resilience and character. Ask what kind of learner your child will become.\n\n2. Inspect the teaching approach. Is learning active or passive? A school that uses labs, projects, clubs and technology — like Hopewell STEM Academy's robotics and coding programmes — prepares children for the way the world actually works.\n\n3. Check class sizes. Smaller classes mean more individual attention, more speaking up and stronger teacher-child relationships.\n\n4. Consider the whole day. Safe transport, nutritious meals, sports, clubs and after-school activities all shape your child's experience. Visit at pick-up time and watch how the school really operates.\n\n5. Walk the campus. Meet the teachers, look at the classrooms and the computer lab, and ask how the school handles safety, discipline and communication with parents.\n\n6. Talk to current parents. Honest feedback from families already enrolled is worth more than any brochure.\n\n7. Match the values. The school you choose should reflect the discipline, faith and character you want for your family.\n\nChoosing well takes effort, but the right school changes a child's future. If you are comparing schools in Nakuru, we would be delighted to show you around Hopewell STEM Academy and answer your questions — no pressure, just facts.",
  },
];

const now = new Date().toISOString();

for (let i = 0; i < posts.length; i++) {
  const post = posts[i];
  const result = await client.query(
    `UPDATE "NewsPost"
       SET "title" = $1, "excerpt" = $2, "image" = $3, "dateLabel" = $4,
           "slug" = $5, "content" = $6, "category" = $7, "published" = true,
           "sortOrder" = $8, "updatedAt" = $9
     WHERE "slug" = $5 OR ("title" = $1 AND "slug" IS NULL)`,
    [
      post.title,
      post.excerpt,
      post.image,
      post.dateLabel,
      post.slug,
      post.content,
      post.category,
      i,
      now,
    ]
  );

  if (result.rowCount === 0) {
    await client.query(
      `INSERT INTO "NewsPost"
        ("id", "title", "excerpt", "image", "dateLabel", "slug", "content", "category",
         "published", "sortOrder", "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, true, $9, $10, $10)
       ON CONFLICT ("slug") DO NOTHING`,
      [
        crypto.randomUUID(),
        post.title,
        post.excerpt,
        post.image,
        post.dateLabel,
        post.slug,
        post.content,
        post.category,
        i,
        now,
      ]
    );
    console.log(`[created] ${post.slug}`);
  } else {
    console.log(`[sync'd] ${post.slug}`);
  }
}

const count = await client.query('SELECT COUNT(*)::int AS n FROM "NewsPost"');
console.log(`Total news posts: ${count.rows[0].n}`);
await client.end();