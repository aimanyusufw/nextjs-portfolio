import { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";

export const careerEducation = [
  {
    title: "Terbuka University - Bachelor’s Degree",
    link: "https://ut.ac.id",
    image: "Logo_Universitas_Terbuka.svg.png",
    role: "Information Systems Student",
    from: "June 2024",
    until: "Now",
  },
  {
    title: "Bullion Ecosystem International ",
    link: "https://bullionecosystem.com/",
    image: "/bullion.png",
    role: "Server Monitoring Staff",
    from: "April 2023",
    until: "Now",
  },
  {
    title: "Bullion Ecosystem International ",
    link: "https://bullionecosystem.com/",
    image: "/bullion.png",
    role: "Internship",
    from: "October 2023",
    until: "Maret 2024",
  },
  {
    title: "Senior High School 4 Kendal ",
    link: "https://smkn4kendal.sch.id/",
    image: "/logo-smk-4.png",
    role: "Student",
    from: "July 2021",
    until: "Jun 2024",
  },
];

interface SocialMedia {
  name: string;
  icon: IconType;
  url: string;
}

export const socialMedia: SocialMedia[] = [
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/aimanyw_/",
  },
  { name: "Tik Tok", icon: FaTiktok, url: "https://www.tiktok.com/@aimanyw_" },
  {
    name: "Linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=61554416981074",
  },
  { name: "X", icon: FaXTwitter, url: "https://x.com/aimanyus_" },
];
