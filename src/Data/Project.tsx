// src/data/Projects.ts
import tunartisan from "../assets/Projects/Tunartisan.jpg";
import audacity from "../assets/Projects/Audacity.png";
import aws from "../assets/Projects/aws.jpg";
import cement from "../assets/Projects/cementry.png";
import budgetta from "../assets/Projects/budgetta.jpg";
import chatbot from "../assets/Projects/AiChatbot.jpg";
import portfolio from "../assets/Projects/portfolio.png";

export interface Project {
    title: string;
    description: string;
    tech: string[];
    image: string;
    link?: string; // Optional because not all projects have a link
  }
  
  export const projects: Project[] = [
    {
      title: "Portfolio",
      description:
        "Dymamic portfolio website built with Laravel , Blade and MySQL",
      tech: ["Laravel", "Blade", "MySQL"],
      image: portfolio,
    },
    {
      title: "Tunartisan",
      description:
        "An artisan e-commerce platform built with Spring Boot and Angular. Implemented secure payment processing with Stripe and real-time chat functionality.",
      tech: ["Spring Boot", "Angular", "JWT", "Stripe", "MySQL", "WebSocket"],
      image: tunartisan,
      link: "https://tunartisan.com",
    },
    {
      title: "Audacity",
      description:
        "Pixel-perfect implementation of Figma designs for a UK trading company using React and modern UI libraries.",
      tech: ["React", "Tailwind CSS", "Material UI", "Figma", "Vite"],
      image: audacity,
    },
    {
      title: "MyDrive",
      description:
        "Personal cloud storage solution using AWS S3 for file storage and MongoDB for metadata management.",
      tech: ["Spring Boot", "Thymeleaf", "AWS SDK", "AWS S3", "MongoDB"],
      image: aws,
      link: "https://github.com/Ferjaboss/Springboot_AWS",
    },
    {
      title: "Cementry",
      description:
        "Mobile application for a cement company built during a hackathon, featuring location-based services.",
      tech: ["Flutter", "MongoDB", "OpenStreetMap"],
      image: cement,
      link : "https://github.com/Ferjaboss/CementMob"
    },
    {
      title: "Budgetta",
      description:
        "A budget tracking app built with Flutter and Hive for local storage.",
      tech: ["Flutter", "Hive", "Dart"],
      image: budgetta,
    },
    {
      title: "AI Chatbot",
      description:
        "A chatbot Agent that uses Ollama API to generate responses to user queries.",
      tech: ["Python", "Flask", "Ollama API", "React"],
      image: chatbot,
    }
  ];