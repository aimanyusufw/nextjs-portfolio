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
  { name: "X", icon: FaXTwitter, url: "https://x.com/aimanyw_" },
];

export const portfolios = [
  {
    image: "/img/horizon.png",
    title: "Horizon Home - Listing Website",
    excrept:
      "Website frontend template for creating a property listing website using Next.js and additional libraries such as react-icons, next-intl, and others. ",
    tag: ["realestate", "nextjs 14", "nextIntl", "tailwind css"],
    preview: "https://realestate-red-three.vercel.app/en",
    source: "https://github.com/aimanyusufw/realestate-web-frontend",
    created_at: {
      from: "Sep 18, 2024",
      to: "Sep 30, 2024",
    },
  },
  {
    image: "/img/factoid.png",
    title: "Factoid - Blog Website",
    excrept:
      "A template for creating website articles using the Laravel framework, along with additional packages to simplify content management with Filament.",
    tag: ["blog", "laravel", "filament", "tailwind css"],
    preview: "https://factoid.aimanyusuf.me/",
    source: "https://github.com/aimanyusufw/laravel-article-website",
    created_at: {
      from: "Jun 19, 2024",
      to: "Jul 13, 2024",
    },
  },
];

export const accordionItems = [
  {
    question: "Can you develop industrial-scale applications?",
    answer:
      "Of course, I can develop applications on an industrial scale. I will ensure that every application I create works well, regardless of the scale.",
  },
  {
    question: "Can you develop Android/iOS applications?",
    answer:
      "Yes, I can. I am experienced in using Flutter or React Native to develop Android and iOS applications.",
  },
  {
    question: "How many years of experience do you have?",
    answer:
      "Approximately 4 years. I have been involved in the technology field since I was in vocational high school.",
  },
  {
    question: "How can I collaborate with you?",
    answer:
      "You can simply contact me via social media or email at aimanyusufdev@gmail.com. After that, we can discuss your project in more detail.",
  },
];
