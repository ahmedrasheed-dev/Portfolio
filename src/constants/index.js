

const navlinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
    type: "mode",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: true,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Sep 2026",
    title: "LeetCode Profile — 156+ Problems Solved",
    subtitle: "Consistent logic building, array manipulation, tree traversals, and dynamic programming.",
    image: "/images/leetcode.png",
    link: "https://leetcode.com/u/AhmadRasheed/",
    buttonText: "View LeetCode Profile",
  },
  {
    id: 2,
    date: "Sep 2026",
    title: "C++ Data Structures & Algorithms Repository",
    subtitle: "Clean, optimized C++ implementations of core data structures, algorithms, and graph theory.",
    image: "/images/github.jpg",
    link: "https://github.com/ahmedrasheed-dev/DSA-CPP",
    buttonText: "Explore C++ DSA Repo",
  },
  {
    id: 3,
    date: "Sep 2026",
    title: "GitHub Profile & Development Activity",
    subtitle: "Daily commits, full-stack projects, serverless architectures, and active open-source contribution.",
    image: "/images/blog3.png",
    link: "https://github.com/ahmedrasheed-dev",
    buttonText: "Visit GitHub Profile",
  },
];
const techStack = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "GSAP"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js","Hono", "Express.js", "NextAuth"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL", "SQL Server", "Redis"],
  },
  {
    category: "Cloud & Deployment",
    items: ["AWS S3", "AWS Lambda", "CloudFront", "Docker"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Postman", "Linux"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/ahmedrahseed-dev",
  },
  {
    id: 2,
    text: "Platform",
    icon: "/icons/atom.svg",
    bg: "#4bcb63",
    link: "https://ahmedrasheed.vercel.app",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/ahmedrasheed17",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/ahmadrasheed17/",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

// const gallery = [
//   {
//     id: 1,
//     img: "/images/gal1.png",
//   },
//   {
//     id: 2,
//     img: "/images/gal2.png",
//   },
//   {
//     id: 3,
//     img: "/images/gal3.png",
//   },
//   {
//     id: 4,
//     img: "/images/gal4.png",
//   },
// ];
const gallery = [
];

export {
  navlinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
};

// const WORK_LOCATION = {
//   id: 1,
//   type: "work",
//   name: "Work",
//   icon: "/icons/work.svg",
//   kind: "folder",
//   children: [
//     // ▶ Project 1
//     {
//       id: 5,
//       name: "Nike Ecommerce Website Application",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-10 left-5", // icon position inside Finder
//       windowPosition: "top-[5vh] left-5", // optional: Finder window position
//       children: [
//         {
//           id: 1,
//           name: "Nike Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 left-10",
//           description: [
//             "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
//             "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
//             "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
//             "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
//           ],
//         },
//         {
//           id: 2,
//           name: "nike.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
//           position: "top-10 right-20",
//         },
//         {
//           id: 4,
//           name: "nike.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/images/project-1.png",
//         },
//         {
//           id: 5,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://google.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },

//     // ▶ Project 2
//     {
//       id: 6,
//       name: "AI Resume Analyzer",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-52 right-80",
//       windowPosition: "top-[20vh] left-7",
//       children: [
//         {
//           id: 1,
//           name: "AI Resume Analyzer Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 right-10",
//           description: [
//             "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
//             "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
//             "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
//             "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
//           ],
//         },
//         {
//           id: 2,
//           name: "ai-resume-analyzer.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
//           position: "top-20 left-20",
//         },
//         {
//           id: 4,
//           name: "ai-resume-analyzer.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 left-80",
//           imageUrl: "/images/project-2.png",
//         },
//         {
//           id: 5,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://google.com",
//           position: "top-60 left-5",
//         },
//       ],
//     },

//     // ▶ Project 3
//     {
//       id: 7,
//       name: "Food Delivery App",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-10 left-80",
//       windowPosition: "top-[33vh] left-7",
//       children: [
//         {
//           id: 1,
//           name: "Food Delivery App Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 left-10",
//           description: [
//             "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
//             "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
//             "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
//             "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
//           ],
//         },
//         {
//           id: 2,
//           name: "food-delivery-app.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
//           position: "top-10 right-20",
//         },
//         {
//           id: 4,
//           name: "food-delivery-app.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/images/project-3.png",
//         },
//         {
//           id: 5,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://google.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },
//   ],
// };


const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1: Snappix
    {
      id: 5,
      name: "Snappix Video Platform",
      icon: "/images/folder.png",
      kind: "folder",
      position: "bottom-5 right-30",
      windowPosition: "top-[0vh] left-5",
      children: [
        {
          id: 1,
          name: "Snappix Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Snappix is a high-performance, full-stack video-sharing platform.",
            "It leverages a modern tech stack including React, Redux Toolkit, Node.js, Express, and MongoDB.",
            "The backend is powered by a serverless AWS infrastructure utilizing S3, Lambda, CloudFront, and CloudWatch.",
            "This architecture ensures scalable, secure, and lightning-fast video uploads and streaming via signed URLs.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ahmedrasheed-dev/Snappix",
          position: "top-10 right-20",
        },
        // {
        //   id: 4,
        //   name: "snappix.png",
        //   icon: "/images/image.png",
        //   kind: "file",
        //   fileType: "img",
        //   position: "top-52 right-80",
        //   imageUrl: "/images/project-snappix.png",
        // },
      ],
    },

    // ▶ Project 2: EdgeDL
    {
      id: 6,
      name: "EdgeDL Video Downloader",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-20",
      windowPosition: "top-[20vh] left-5",
      children: [
        {
          id: 1,
          name: "EdgeDL Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-6 left-6",
          description: [
            "EdgeDL is a versatile desktop video downloader application and browser extension.",
            "It was engineered using Electron, React, Node.js, and Plasmo to provide a seamless cross-platform experience.",
            "By integrating yt-dlp, it handles heavy media processing pipelines directly from the browser or desktop.",
            "This project showcases advanced knowledge of background scripts, manifest configurations, and desktop packaging.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ahmedrasheed-dev/EdgeDL",
          position: "top-6 left-48",
        },
        {
          id: 3,
          name: "edgedl1.png",
          icon: "/images/EdgeDL-App1.png",
          kind: "file",
          fileType: "img",
          position: "top-6 left-[360px]",
          imageUrl: "/images/EdgeDL-App1.png",
        },
        {
          id: 4,
          name: "edgedl2.png",
          icon: "/images/EdgeDL-App2.png",
          kind: "file",
          fileType: "img",
          position: "top-44 left-6",
          imageUrl: "/images/EdgeDL-App2.png",
        },
        {
          id: 5,
          name: "edgedl3.png",
          icon: "/images/EdgeDL-App3.png",
          kind: "file",
          fileType: "img",
          position: "top-44 left-48",
          imageUrl: "/images/EdgeDL-App3.png",
        },
        {
          id: 6,
          name: "edgedl-extension.png",
          icon: "/images/EdgeDL-ext.png",
          kind: "file",
          fileType: "img",
          position: "top-44 left-[360px]",
          imageUrl: "/images/EdgeDL-ext.png",
        },
      ],
    },

    // ▶ Project 3: TrueFeedback
    {
      id: 7,
      name: "TrueFeedback Web App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 bottom-0",
      windowPosition: "top-[40vh] left-5",
      children: [
        {
          id: 1,
          name: "TrueFeedback Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "TrueFeedback is an anonymous feedback web application designed for secure and honest communication.",
            "It is built entirely on the Next.js framework, ensuring excellent SEO, fast server-side rendering, and a smooth UX.",
            "User authentication is securely managed through NextAuth, while Nodemailer handles automated email integrations.",
            "It provides users with a safe, private space to gather constructive insights from their peers or audience.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ahmedrasheed-dev/TrueFeedback",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "truefeedback.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-truefeedback.png",
        },
      ],
    },

    // ▶ Project 4: Real-Time Chat App
    {
      id: 8,
      name: "Real-Time Chat Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-20",
      windowPosition: "top-[60vh] left-5",
      children: [
        {
          id: 1,
          name: "Chat App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "A dynamic real-time chat application built to facilitate instant messaging and live user interactions.",
            "Leverages WebSocket technology to ensure low-latency communication and instant message delivery without page reloads.",
            "Features a modern, responsive user interface combined with a robust backend architecture to handle concurrent connections.",
            "Demonstrates a strong understanding of full-stack event-driven programming and persistent data storage.",
          ],
        },
        {
          id: 2,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/ahmedrasheed-dev/RealTimeChat-App",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "chat-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-chatapp.png",
        },
      ],
    },
  ],
};


const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "ahmed.png",
      icon: "/images/ahmed.jpg",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/ahmed.jpg",
    },
    {
      id: 2,
      name: "ahmed-casual.png",
      icon: "/images/ahmed-casual.jpg",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/ahmed-casual.jpg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/ahmed.jpg",
      description: [
        "Hey! I’m Ahmed 👋, a full-stack software developer and CS undergrad at UMT Lahore.",
        "I specialize in the MERN stack, Next.js, and TypeScript, focusing on building scalable web applications and deploying them via AWS.",
        "I’m big on writing clean, optimized code, tweaking my Arch Linux setup, and I've ground through 400+ DSA problems to keep my logic sharp.",
        "Outside of the terminal, you'll find me hitting the gym, playing Watch Dogs 2, learning German, or practicing sleight-of-hand card tricks. 🃏",
      ],
    },
  ],
};
const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    }
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };