import React from 'react';
import { Code2, Palette, Database, Globe2, Brain, Rocket } from 'lucide-react';
import angular from './../assets/Skills/Angular.png';
import flutter from './../assets/Skills/Flutter.png';
import react from './../assets/Skills/React.png';
import tailwind from './../assets/Skills/Tailwind.png';
import typescript from './../assets/Skills/typescript.png';
import rest from './../assets/Skills/rest.png';
import springboot from './../assets/Skills/springboot.png';
import express from './../assets/Skills/express.png';
import mysql from './../assets/Skills/mysql.png';
import node from './../assets/Skills/nodejs.png';
import mongodb from './../assets/Skills/mongodb.png';
import aws from './../assets/Skills/aws.png';
import docker from './../assets/Skills/docker.png';
import kubernetes from './../assets/Skills/kubernetes.png';
import jenkins from './../assets/Skills/jenkins.png';
import go from './../assets/Skills/go.png';
import python from './../assets/Skills/python.png';
import oracle from './../assets/Skills/oracle.png';
import  php  from './../assets/Skills/php.png';
import  java  from './../assets/Skills/JAVA.png';
import  symfony  from './../assets/Skills/Symfony.png';
import  laravel  from './../assets/Skills/Laravel.png';
import  blade  from './../assets/Skills/blade.png';
import  twig  from './../assets/Skills/Twig.png';
import pg from './../assets/Skills/pgsql.png';
interface Skill {
  name: string;
  icon: React.ReactNode;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}
const TechStack: React.FC = () => {
  const technologies = {
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    'Currently Learning': ['Go', 'Python', 'AI/ML'],
  };

  const skillCategories: SkillCategory[] = [
    {
      name: "Frontend Development",
      skills: [
        { name: "React", icon: <img src={react} className="w-5 h-5 object-contain" /> },
        { name: "TypeScript", icon: <img src={typescript} className="w-5 h-5 object-contain" /> },
        { name: "Tailwind CSS", icon: <img src={tailwind} className="w-5 h-5 object-contain" /> },
        { name: "Material UI", icon: <Palette className="w-5 h-5 object-contain" /> },
        { name: "Angular", icon: <img src={angular} className="w-5 h-5 object-contain" /> },
        { name: "Flutter", icon: <img src={flutter} className="w-5 h-5 object-contain" /> },
        { name: "Blade", icon: <img src={blade} className="w-5 h-5 object-contain" /> },
        { name: "Twig", icon: <img src={twig} className="w-5 h-5 object-contain" /> }

      ]
    },
    {
      //     'Backend': ['Spring Boot', 'Node.js', 'Express'],
      name: "Backend Development",
      skills: [
        { name: "Java", icon: <img src={java} className="w-5 h-5 object-contain" /> },
        { name: "PHP", icon: <img src={php} className="w-5 h-5 object-contain" /> },
        { name: "Symfony", icon: <img src={symfony} className="w-5 h-5 object-contain" /> },
        { name: "Laravel", icon: <img src={laravel} className="w-5 h-5 object-contain" /> },
        { name: "Node js", icon: <img src={node} className="w-5 h-5 object-contain" /> },
        { name: "Spring Boot", icon: <img src={springboot} className="w-5 h-5 object-contain" /> },
        { name: "Express", icon: <img src={express} className="w-5 h-5 object-contain" /> }
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "MySQL", icon: <img src={mysql} className="w-5 h-5 object-contain" /> },
        { name: "MongoDB", icon: <img src={mongodb} className="w-5 h-5 object-contain" /> },
        { name: "Oracle 11g", icon: <img src={oracle} className="w-5 h-5 object-contain" /> },
        { name: "PostgreSQL", icon: <img src={pg} className="w-5 h-5 object-contain" /> }

      ]
    },
    {
      name: "Cloud & DevOps",
      skills: [
        { name: "AWS", icon: <img src={aws} className="w-5 h-5 object-contain" /> },
        { name: "Docker", icon: <img src={docker} className="w-5 h-5 object-contain" /> },
        { name: "Kubernetes", icon: <img src={kubernetes} className="w-5 h-5 object-contain" /> },
        { name: "Jenkins", icon: <img src={jenkins} className="w-5 h-5 object-contain" /> }
      ]
    },
    {
      name: "Currently Learning",
      skills: [
        { name: "Go", icon: <img src={go} className="w-5 h-5 object-contain" /> },
        { name: "Python", icon: <img src={python} className="w-5 h-5 object-contain" /> },
        { name: "AI/ML", icon: <Brain className="w-5 h-5 object-contain" /> }
      ]
    },
    {
      name: "Other Skills",
      skills: [
        { name: "Problem Solving", icon: <Brain className="w-5 h-5 object-contain" /> },
        { name: "Project Management", icon: <Rocket className="w-5 h-5 object-contain" /> },
        { name: "System Architecture", icon: <Code2 className="w-5 h-5 object-contain" /> },
        { name: "RESTful APIs", icon: <img src={rest} className="w-5 h-5 object-contain" /> },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {skillCategories.map((category, idx) => (
      <div 
        key={idx}
        className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{category.name}</h3>
        <div className="space-y-4">
          {category.skills.map((skill, skillIdx) => (
            <div key={skillIdx} className="flex items-center gap-2">
              {skill.icon}
              <span className="font-medium text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  );
};

export default TechStack;