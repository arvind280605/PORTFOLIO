import {
  python,
  sql,
  excel,
  powerbi,   // ✅ Power BI
  cit,       // ✅ CIT logo
  homeIcon   // ✅ import the Home icon
} from "../assets";


// Navigation Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

// Services
export const services = [
  { title: "Python Programming", icon: python },
  { title: "SQL Databases", icon: sql },
  { title: "Excel Analytics", icon: excel },
];

// Technologies
export const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "Excel", icon: excel },
  { name: "Power BI", icon: powerbi },  // ✅ added here
];

// Experiences
export const experiences = null;

    


// Projects (clickable cards)
export const projects = [
  {
    name: "Netflix Power BI Dashboard",
    description:
      "Analyzed Netflix dataset with Power BI to track movies vs TV shows, country trends, and top genres.",
    tags: [
      { name: "PowerBI", color: "blue-text-gradient" },
      { name: "Excel", color: "green-text-gradient" },
    ],
    image: powerbi, // ✅ now it will display powerbi.png
    source_code_link: "https://github.com/arvind280605"
  },
  {
    name: "Sales Data Analysis (Excel & SQL)",
    description:
      "Used SQL queries and Excel to analyze sales data, identify revenue trends, and generate insights.",
    tags: [
      { name: "SQL", color: "pink-text-gradient" },
      { name: "Excel", color: "green-text-gradient" },
    ],
    image: excel,
    source_code_link: "https://github.com/arvind280605",
  },
];

// Testimonials
export const testimonials = [
  {
    name: "Ananya",
    testimonial: "This portfolio is amazing!",
    designation: "Student",
    company: "Coimbatore Institute of Technology",
    image: "/src/assets/image.webp",
  },
  {
    name: "adharsh",
    testimonial: "Great work and very professional!",
    designation: "Data Analyst",
    company: "XYZ Corp",
    image: "/src/assets/third testimonial.webp",
  },
  {
    name: "rahul",
    testimonial: "Loved the design and functionality!",
    designation: "Developer",
    company: "Tech Solutions",
    image: "/src/assets/Tars Ken.webp",
  },
];
