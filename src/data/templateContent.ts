// Template buyers: edit this file first.
// Most visible labels, links, theme assets, and portfolio slots live here.

export const quickActions = [
  { label: "Intro", icon: "bell", aria: "Portfolio intro" },
  { label: "Skills", icon: "spark", aria: "Skills" },
  { label: "Process", icon: "grid", aria: "Process" },
  { label: "Resume", icon: "clock", aria: "Resume" }
];

export const portfolioStats = [
  { label: "Projects", value: "24", icon: "gem" },
  { label: "Clients", value: "18", icon: "coin" },
  { label: "Rating", value: "5.0", icon: "crystal" }
];

export const menuCards = [
  {
    eyebrow: "Selected",
    title: "Work",
    className: "tall social",
    image: "/assets/cards/work-neko.png",
    href: "/work",
    alert: true
  },
  {
    eyebrow: "Deep Dive",
    title: "Case Study",
    className: "wide arena",
    image: "/assets/cards/case-study-pastry.png",
    href: "#",
    alert: true
  },
  {
    eyebrow: "What I Do",
    title: "Services",
    className: "inventory",
    image: "/assets/cards/services-pattern.png",
    href: "#"
  },
  {
    eyebrow: "Profile",
    title: "About",
    className: "squad",
    image: "/assets/cards/about-couple.png",
    href: "#"
  },
  {
    eyebrow: "Start Here",
    title: "Contact",
    className: "story",
    image: "/assets/cards/contact-cute.png",
    href: "#",
    alert: true
  }
];

export const themes = [
  { id: "academy", label: "Academy Blue", swatch: "linear-gradient(135deg, #66dcff, #8ea5ff)" },
  { id: "neon", label: "Neon Midnight", swatch: "linear-gradient(135deg, #05162c, #12d8ff)" },
  { id: "sakura", label: "Sakura Dawn", swatch: "linear-gradient(135deg, #ff9ec8, #88dfff)" },
  { id: "violet", label: "Violet Arcade", swatch: "linear-gradient(135deg, #6d4dff, #17d8c7)" },
  { id: "solar", label: "Solar Pop", swatch: "linear-gradient(135deg, #ffd84d, #1fc6d8)" }
];

export const themeIds = themes.map((theme) => theme.id);

export const workProjects = [
  { title: "Project 01", image: "/assets/work/work-strip.png", className: "slot-1", objectPosition: "6% 12%" },
  { title: "Project 02", image: "/assets/work/work-strip.png", className: "slot-2", objectPosition: "21% 12%" },
  { title: "Project 03", image: "/assets/work/work-strip.png", className: "slot-3", objectPosition: "36% 12%" },
  { title: "Project 04", image: "/assets/work/work-strip.png", className: "slot-4", objectPosition: "51% 12%" },
  { title: "Project 05", image: "/assets/work/work-strip.png", className: "slot-5", objectPosition: "66% 12%" },
  { title: "Project 06", image: "/assets/work/work-strip.png", className: "slot-6", objectPosition: "81% 12%" },
  { title: "Project 07", image: "/assets/work/work-strip.png", className: "slot-7", objectPosition: "95% 12%" }
];
