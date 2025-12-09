import {
  python,
  sql,
  excel,
  powerbi,   // ✅ Power BI
  cit,       // ✅ CIT logo
  homeIcon, 
  AI,
  bike,
  Tars Ken,
  third testimonial,
  image,
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
  { title: "Power BI Dashboards", icon: powerbi },   // ✅ Add this
  { title: "AI / Machine Learning", icon: AI },      // ✅ Add your new AI icon
];

// Technologies
export const technologies = [
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "Excel", icon: excel },
  { name: "Power BI", icon: powerbi },
  { name: "Artificial Intelligence", icon: AI },
// ✅ added here
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
  name: "Fake News & AI Text Detection System",
  description:
    "An advanced NLP and deep learning system built with Streamlit that detects fake news, AI-generated text, and plagiarism-like patterns from typed input, file uploads, voice input, or web-scraped content. Supports chunk-level processing, real-time visualizations, and automated PDF report generation.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "NLP", color: "green-text-gradient" },
    { name: "Deep Learning", color: "pink-text-gradient" },
    { name: "PyTorch", color: "yellow-text-gradient" },
    { name: "Streamlit", color: "orange-text-gradient" },
  ],
  image: AI,
  source_code_link: "https://github.com/arvind280605/FakeNews_AI_Detector",
},

  
{
  name: "Smart Bike Rental & Tracking System",
  description:
    "A full-stack bike rental system built using Node.js, Express, and MongoDB. Users can register, log in, view bike availability across 5 stations, rent and return bikes, track ride history, and manage their profile. The entire system is deployed on Render with real-time database updates.",
  tags: [
    { name: "Node.js", color: "blue-text-gradient" },
    { name: "Express.js", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
    { name: "Full-Stack", color: "yellow-text-gradient" },
    { name: "HTML/CSS/JS", color: "orange-text-gradient" },
  ],
    image: bike,// I can generate a Smart Bike PNG if you want
  source_code_link: "https://github.com/arvind280605/Smart-bike-rental-and-tracking-system",
  live_demo: "https://smart-bike-rental-and-tracking-system.onrender.com",
},

 {
  name: "Power BI Weather Dashboard",
  description:
    "A real-time weather monitoring dashboard built in Power BI using live data from WeatherAPI. Includes current weather, 7-day forecast, AQI indicators, rain probability, UV index, humidity, wind speed, and sunrise/sunset metrics. Designed with a modern dark-themed UI and interactive visuals.",
  tags: [
    { name: "Power BI", color: "blue-text-gradient" },
    { name: "WeatherAPI", color: "green-text-gradient" },
    { name: "Power Query", color: "pink-text-gradient" },
    { name: "DAX", color: "yellow-text-gradient" },
    { name: "Data Visualization", color: "orange-text-gradient" },
  ],
  image: powerbi,   // ⭐ your custom Power BI image
  source_code_link: "https://github.com/arvind280605/Weather_API_Powerbi_Dashboard",
},
 
{
  name: "Insurance Policy & Fraud Prediction System",
  description:
    "A machine learning and deep learning-based project that predicts fraudulent insurance claims using an LSTM model and advanced preprocessing. Built with Python, TensorFlow, and Scikit-Learn, the system includes a Streamlit dashboard for interactive predictions and visual insights.",
  tags: [
    { name: "Python", color: "blue-text-gradient" },
    { name: "Machine Learning", color: "green-text-gradient" },
    { name: "Deep Learning", color: "pink-text-gradient" },
    { name: "TensorFlow", color: "yellow-text-gradient" },
    { name: "Streamlit", color: "orange-text-gradient" },
  ],
   image: AI,
// you can replace this with a custom insurance/fraud icon
  source_code_link: "https://github.com/arvind280605/Insurance-Policy-and-Fraud-Prediction",
},

{
  name: "Hirex – Job Search Web Application",
  description:
    "Hirex is a user-friendly job searching web application that helps users find relevant job opportunities based on preferred job titles and filters. It fetches job listings from multiple platforms and allows one-click redirection to the official job site for applying.",
  tags: [
    { name: "HTML", color: "blue-text-gradient" },
    { name: "CSS", color: "green-text-gradient" },
    { name: "JavaScript", color: "pink-text-gradient" },
    { name: "Web Application", color: "yellow-text-gradient" },
    { name: "GitHub", color: "orange-text-gradient" },
  ],
  image: AI,// replace with your project image or icon
  source_code_link: "https://github.com/arvind280605/Hirex.git",
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
