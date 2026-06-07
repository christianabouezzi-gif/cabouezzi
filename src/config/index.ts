import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Christian Abou-Ezzi — Biomedical Engineer",
  author: "Christian Abou-Ezzi",
  description:
    "Biomedical Engineer based in Boston MA, USA. I specialize in Medical Device and Signal Processing.",
  lang: "en",
  siteLogo: "/christian_large.jpeg",
  navLinks: [
    // { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/christian-abou-ezzi-202a50241/#:~:text=www.linkedin.com/in/christian%2Dabou%2Dezzi%2D202a50241"},
    { text: "Github", href: "https://github.com/users/christianabouezzi-gif/projects/1/views/1" },
    { text: "Email", href: "mailto:christian.abouezzi@gmail.com" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Christian Abou-Ezzi",
    specialty: "Biomedical Engineer",
    summary:
      "Biomedical Engineer based in Boston MA, USA. I specialize in Medical Device and Signal Processing.",
    email: "christian.abouezzi@gmail.com",
  },
  experience: [
    {
      company: "Zalmart",
      position: "Lead Android Developer",
      startDate: "May 2018",
      endDate: "Sept 2020",
      summary: [
        "Implemented advanced memory management and code optimization techniques, resulting in a reduction in application load time by 40% and a decrease in crashes by 25%. This significantly improved user experience and increased user retention by 20%.",
        "I led a team of developers in building and integrating new features using Jetpack Android components such as LiveData and ViewModel. This enabled us to build scalable and maintainable applications, reducing the crash rate by 20% and speeding up the time to delivery of new features by 15%.",
        "Integrated Google Pay for in-app purchases, resulting in a 35% increase in mobile transaction revenue. Additionally, implemented Firebase Analytics to gain insights into user behavior, enabling data-driven optimizations and a 30% increase in user retention.",
      ],
    },
    {
      company: "Bankit",
      position: "Mobile Developer",
      startDate: "Feb 2017",
      endDate: "May 2018",
      summary: [
        "I designed and developed a mobile application using Flutter, allowing it to be deployed on both Android and iOS with a single codebase. This reduced development time by 50% and maintenance costs by 30%, facilitating a consistent user experience on both platforms.",
        "I integrated biometric authentication and data encryption, significantly improving the security of user data. This implementation resulted in a 40% increase in user trust and a 25% reduction in unauthorized access attempts.",
      ],
    },
    {
      company: "Driveer",
      position: "Frontend Developer",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary:
        "Developed and integrated a real-time vehicle tracking system using WebSockets, improving accuracy and data update in the application. This functionality increased user satisfaction by 30% and reduced customer service inquiries by 25%.",
    },
  ],
  projects: [
    {
      name: "Organoid SDP Incubation Device",
      summary: "An MRI-safe incubation device maintaining neuronal firing in live human brain organoids during sodium MRI.",
      linkPreview: "/",
      linkSource: "",
      image: "/cad_SDP.jpeg",
    },
    {
      name: "Digital Signal Processing",
      summary: "Advanced discrete-time filter design in MATLAB, featuring high-order filters for FDM audio recovery and image filtering.",
      linkPreview: "/",
      linkSource: "",
      image: "/Mystery_sound_spectro.jpeg",
    },
    {
      name: "Computational Fourier Optics",
      summary: "A MATLAB-based optical engineering suite featuring a 4f microscope simulation & OCT image reconstruction system.",
      linkPreview: "/",
      linkSource: "",
      image: "/Microscopy.jpeg",
    },
    {
      name: "Quantitative Microscopy & Cellular Assays",
      summary: "A MATLAB-based image processing for cell counting alongside time-dependent fluorescence assays.",
      linkPreview: "/",
      linkSource: "",
      image: "/RFU.jpeg",
    },
    {
      name: "Mechatronics & Physical Computing Lab Showcase",
      summary: "A suite of hands-on hardware engineering projects combining Arduino microcontrollers, circuit wiring, and sensor integration.",
      linkPreview: "/",
      linkSource: "",
      image: "/210_circuit.jpeg",
    },
  ],
  about: {
    description: `
      Hi, I’m Christian Abou-Ezzi, a Biomedical Engineer fron Boston University. I'm interested in signal processing, medical devices, and clnical engineering, with hands-on experince in MATLAB, Python, and embedded systems like Arduino. I enjoy working on projects that apply engineering and data analysis to real world biological and medical systems, such as ECG signal procesing, audio filtering, and sensor based device development.
      
      I'm currently looking to grow my experince in medical technology, clinical engineering, and biomedical signal processing roles.
    `,
    image: "/christian_large.jpeg",
  },
};

// #5755ff
