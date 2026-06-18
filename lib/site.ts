import type { IconType } from "react-icons";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

export const site = {
  name: "Hopewell STEM Academy",
  shortName: "Hopewell STEM",
  motto: "One Team, One Purpose, Student Success",
  tagline: "Building tomorrow's leaders today",
  description:
    "Hopewell STEM Academy is a leading international STEM school in Nakuru, Kenya, offering world-class education in Science, Technology, Engineering and Mathematics through hands-on, innovative learning.",
  url: "https://hopewellstem.ac.ke",
  location: "Pipeline, Nakuru, Kenya",
  phone: "+254 112 183 663",
  phoneHref: "tel:+254112183663",
  whatsapp: "https://wa.me/254112183663",
  email: "officeathopewell@gmail.com",
  emailHref: "mailto:officeathopewell@gmail.com",
  elearning: "https://elearninghopewell.netlify.app",
  developer: {
    name: "InfinitiTech Solutions",
    url: "https://infinititechsolutions.org/",
  },
} as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  colorClass: string;
};

export const socials: SocialLink[] = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61552788992775",
    icon: FaFacebookF,
    colorClass: "hover:bg-[#1877F2]",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ihopewellstem",
    icon: FaInstagram,
    colorClass: "hover:bg-[#dc2743]",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UChDzJ2JDAtORk6_1WwUrk_w",
    icon: FaYoutube,
    colorClass: "hover:bg-[#FF0000]",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@hopewell.stem.academy",
    icon: FaTiktok,
    colorClass: "hover:bg-black",
  },
  {
    label: "X (Twitter)",
    href: "https://twitter.com/StemHopewell",
    icon: FaXTwitter,
    colorClass: "hover:bg-black",
  },
];

export type NavChild = { label: string; href: string };
export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const navigation: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Hopewell", href: "/about" },
      { label: "Meet the Directors", href: "/about/directors" },
      { label: "Meet the Staff", href: "/about/staff" },
      { label: "Our History", href: "/about/history" },
      { label: "Our Policies", href: "/about/policies" },
    ],
  },
  {
    label: "Discover HSA",
    href: "/discover",
    children: [
      { label: "STEM Initiative", href: "/discover/stem-initiative" },
      { label: "Sports", href: "/discover/sports" },
      { label: "Clubs", href: "/discover/clubs" },
      { label: "Guidance & Counselling", href: "/discover/guidance-counselling" },
      { label: "Fees & Transport", href: "/discover/fees-transport" },
      { label: "Computer Lab", href: "/discover/computer-lab" },
      { label: "Library", href: "/discover/library" },
      { label: "Events Ground", href: "/discover/events-ground" },
      { label: "School Uniform", href: "/discover/uniform" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Academics Overview", href: "/academics" },
      { label: "Playgroup", href: "/academics/playgroup" },
      { label: "Primary School", href: "/academics/primary" },
      { label: "Junior High School", href: "/academics/junior-high" },
    ],
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    children: [
      { label: "Overview", href: "/get-involved" },
      { label: "Gallery", href: "/get-involved/gallery" },
      { label: "Calendar", href: "/get-involved/calendar" },
    ],
  },
  { label: "Contact", href: "/contact" },
];
