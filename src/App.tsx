import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import TechStack from "./components/TechStack";
import photo from "./assets/Bechir.jpeg";
import { projects } from "./data/Projects.json";
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <img
                src={photo}
                alt="Bechir Ferjani"
                className="w-44 h-44 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Bechir Ferjani
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Full Stack Developer | Software Engineer
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              A passionate software engineer with expertise in full-stack
              development, cloud technologies, and a strong foundation in
              computer science from ISI Ariana. Currently pursuing an
              engineering degree at Esprit.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/Ferjaboss"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bechir-ferjani/"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:bechir.ferjani@outlook.fr"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
            <div className="prose lg:prose-lg mx-auto text-gray-700">
              <p className="mb-6">
                My journey with technology began at the age of 3, when I first
                discovered the world of computers through gaming. I vividly
                remember playing Need for Speed Porsche, which sparked my
                curiosity and fascination with how technology works. What
                started as a love for gaming quickly turned into a deep desire
                to understand and experiment with the inner workings of
                computers and software.
              </p>

              <p className="mb-6">
                By the age of 5, I was already tinkering with electronics,
                though not always successfully—I once blew up a 6V engine by
                plugging it into a socket! But these early experiments taught me
                valuable lessons about curiosity and resilience. By 7, I had
                disassembled and successfully reassembled an entire Pentium 4
                computer, a milestone that solidified my confidence in working
                with technology.
              </p>

              <p className="mb-6">
                As I grew older, I continued to explore new skills and tools. I
                became proficient in 3D modeling using SolidWorks, mastered
                video editing and Photoshop, and even learned to type in both
                Latin and Arabic scripts at over 80 words per minute—often
                without looking at the keyboard. Each year brought new
                challenges and opportunities to learn, and I embraced them all
                with enthusiasm.
              </p>

              <p>
                I believe my early start with technology, combined with my
                natural curiosity and drive to experiment, has shaped me into a
                talented and versatile problem-solver. Whether it’s building
                full-stack applications, exploring cloud technologies, or diving
                into new programming languages, I approach every challenge with
                the same passion and determination that I had as a child sitting
                in front of my first computer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50" id="projects">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              image={project.image}
              link={project.link}
            />
          ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Skills
          </h2>
          <TechStack />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Bechir Ferjani. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
