export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Cambodia Blockchain Summit",
    description:
      "Collaborated with the IT team to design and develop the official website for Blockchain Summit Cambodia. The site features event information, schedule, speakers, and registration details.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/TeHenglay/cbs-site",
    demo: "https://www.blockchaincambodia.net/",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
  
  {
    id: 2,
    name: "TWELVE AM",
    description:
      "12AM is a project that me and my team are working on for the development as a project praticum in Year 2 of IT Engineering. The project is about E-commerce. It is a website that you can customize your Shirt ,Hooder or Jersey.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/TeHenglay/12TwelveAM",
    demo: "https://12am.laszlo.icu/",
    image: require(".//../../public/projects/Twelve-am.png"),
    available: true,
  },
  {
    id: 3,
    name: "CIPHER EXPLORER",
    description:
      "Cipher Explorer is a sleek demo website by Twelve Studio that showcases encryption and decryption concepts with interactive Caesar and RSA cipher tools, along with a supporting project document.",
    technologies: ["JavaScript", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/TeHenglay/Cipher-Explorer",
    demo: "https://cipher.laszlo.icu/",
    image: require(".//../../public/projects/Cipher.png"),
    available: true,
  },
  {
    id: 4,
    name: "TWELVE MUSIC",
    description:
      "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
    technologies: ["JavaScript", "Tailwind CSS", "HTML"],
    github: "https://github.com/victorcodess/flixify",
    demo: "https://flixify.victorwilliams.me/",
    image: require(".//../../public/projects/flixify.png"),
    available: true,
  },
 
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
