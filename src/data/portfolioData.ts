import { Project, Certificate, Achievement, SocialLink } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Sudoku Solver",
    description: "Developed a robust C++ application to solve any standard 9x9 Sudoku puzzle using an optimized recursive backtracking algorithm. Enhanced performance by integrating constraint-based checks to prune invalid paths early, significantly reducing computational overhead.",
    image: "/assets/projects/sudoko.png",
    technologies: ["C++", "Backtracking Algorithm"],
    liveUrl: "https://sudoku-gjjr.onrender.com/",
    githubUrl: "https://github.com/Deepak-Tirumalasetty/sudoku"
  },
  {
    id: 2,
    title: "Amazon Sales Dashboard ",
    description: "Designed and developed an interactive dashboard in Tableau to visualize Amazon sales trends across categories, regions, and time periods. Performed end-to-end data preparation, including cleaning, transformation, filtering, and aggregation, to derive actionable insights from raw sales data.",
    image: "/assets/projects/amazon_sales.png",
    technologies: ["Tableau", "Data Visualization", "Data Cleaning & Transformation"],
    liveUrl: ".",
    githubUrl: "."
  },
  {
    id: 3,
    title: "Brawn Fitness - Web Application",
    description: "Built out a clean, intuitive user interface featuring engaging visuals, interactive components, and a fully responsive layout for seamless use across devices. Implemented key sections including workout programs, membership plans, user testimonials, and a contact form to enhance overall user experience.",
    image: "/assets/projects/brawn.png",
    technologies: ["HTML","CSS","React","JavaScript"],
    liveUrl: "https://brawn-y69h.onrender.com/",
    githubUrl: "https://github.com/Deepak-Tirumalasetty/Brawn"
  },
  {
    id: 4,
    title: "Netflix Movie Recommendation System",
    description: "Engineered a movie recommendation system utilizing Python, Pandas, and Natural Language Processing techniques. Employed content-based filtering through TF-IDF vectorization and cosine similarity to generate relevant suggestions. Enhanced recommendation quality by interpreting user reviews and metadata, while streamlining data workflows for performance on large-scale datasets.",
    image: "/assets/projects/movie.png",
    technologies: ["Python","Pandas","NLP techniques","Cosine similarity"],
    liveUrl: ".",
    githubUrl: "."
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Created a full-stack web application leveraging the MERN stack. The project features a React-powered frontend delivering an interactive user experience, paired with a Node.js/Express backend and MongoDB for efficient data handling.  Integrated RESTful APIs and CRUD operations to support smooth and dynamic functionality.",
    image: "/assets/projects/task_management.png",
    technologies: ["React","NodeJs","MongoDB","Express","JavaScript"],
    liveUrl: "https://mern-front-l3qo.onrender.com/",
    githubUrl: "https://github.com/Deepak-Tirumalasetty/mern-front"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Data Structures and Algorithms",
    issuer: "GeeksforGeeks",
    date: "June 2024",
    url: "file:///D:/certificates/DSA_certificate.pdf",
    image: "/assets/certs/dsa.png"
  },
  {
    id: 2,
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "Coursera",
    date: "December 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/CV35VJGC3DTM",
    image: "/assets/certs/supervised.png"
  },
  {
    id: 3,
    name: "Data Analysis with Tableau Coursera",
    issuer: "Coursera",
    date: "November 2024",
    url: "https://www.coursera.org/account/accomplishments/certificate/5709BPVRJH8R",
    image: "/assets/certs/tableau.png"
  },
  {
    id: 4,
    name: "Fundamentals of Network Communication",
    issuer: "Coursera",
    date: "November 2023",
    url: "https://www.coursera.org/account/accomplishments/certificate/2N5DYG2L66Z9",
    image: "/assets/certs/network.png"
  }
];

export const achievements: Achievement[] = [
  
  {
    id: 1,
    title: "Leet Code",
    description: "Solved 99 coding problems on LeetCode, enhancing data structures and algorithm skills.",
    date: "2025",
    image: "/assets/achivements/leetcode.jpg"
  },
  {
    id: 2,
    title: "Volunteer Internship - Bhumi NGO (Ignite Shelters Program)",
    description: "Completed a 44-hour volunteer internship with Bhumi NGO, contributing to the Kanini project under the Ignite Shelters Program.",
    date: "2024",
    image: "/assets/achivements/bhumi.png"
  },
  {
    id: 3,
    title: "Capture The Flag (CTF) - HACKATHON",
    description: "Achieved a top 10 rank out of 100–200 participants in a cybersecurity competition by successfully tackling advanced challenges in cryptography, reverse engineering, and digital forensics.",
    date: "2023.",
    image: "/assets/achivements/capture-the-flag.png"
  },
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/Deepak-Tirumalasetty",
    icon: "Github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/deepaktirumalasetty/",
    icon: "Linkedin"
  },
  {
    id: 3,
    platform: "Twitter",
    url: "",
    icon: "Twitter"
  },
  {
    id: 4,
    platform: "Email",
    url: "mailto:deepaktirumalasetty25@gmail.com",
    icon: "Mail"
  }
];

export const aboutMe = {
  name: "Deepak Tirumalasetty",
  title: "Software Developer | Machine Learning Developer",
  introduction: "I'm a passionate software and machine learning developer dedicated to creating smart, scalable solutions. I enjoy transforming complex challenges into clean, efficient, and impactful code.",
  details: "I'm a passionate student developer exploring software and machine learning. I enjoy building projects and learning by solving real-world problems with code.",
  profileImage: "",
  skills: [
    "JavaScript/TypeScript", 
    "React/Next.js", 
    "Node.js/Express", 
    "Python/Django", 
    "MongoDB/PostgreSQL", 
    "AWS/GCP", 
    "Docker/Kubernetes", 
    "CI/CD"
  ],
  resumeUrl: ""
};