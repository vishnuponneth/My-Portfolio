import React from 'react';
import { Github, Linkedin, Mail, Phone, Code, CircuitBoard, Camera, Cpu, School, Briefcase } from 'lucide-react';
import NavBar from './components/NavBar';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import SkillCard from './components/SkillCard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <NavBar />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <div className="w-48 h-48 mx-auto mb-8 rounded-full border-4 border-blue-500 overflow-hidden">
            <img 
              src="D:\My portfolio\project\public\Profile.jpg" 
              alt="TARS from Interstellar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4">Vishnu P</h1>
          <p className="text-xl text-gray-300 mb-6">Electronics Engineer | Web Developer</p>
          <div className="flex justify-center gap-4">
            <a href="https://github.com/vishnuponneth" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400">
              <Github size={24} />
            </a>
            <a href="http://www.linkedin.com/in/vishnu-p-826603318" target="_blank" rel="noopener noreferrer" className="p-2 hover:text-blue-400">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-300">
            I am a BTech Electronics and Communication student at CUSAT, passionate about Embedded AI, 
            Web Development, and Digital Design. With strong technical skills in C, C++, Python, Verilog, 
            and JavaScript, I strive to develop innovative solutions in both hardware and software domains.
          </p>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <SkillCard 
            icon={<Code />}
            title="Technical Skills"
            skills={['C', 'C++', 'Python', 'JavaScript', 'React.js', 'HTML/CSS']}
          />
          <SkillCard 
            icon={<CircuitBoard />}
            title="Digital Electronics"
            skills={['Digital Circuit Design', 'ALU Design', 'FSM Design', 'Verilog']}
          />
          <SkillCard 
            icon={<Camera />}
            title="Creative Skills"
            skills={['Adobe Premiere Pro', 'After Effects', 'Cinematography']}
          />
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <Briefcase className="text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Industrial Internship</h3>
                <p className="text-gray-400">Digitoad Technologies - Embedded AI</p>
                <p className="text-sm text-gray-500">May 2023 - Jun 2023</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <School className="text-blue-400" />
              <div>
                <h3 className="text-xl font-semibold">Coding Tutor</h3>
                <p className="text-gray-400">UG Students</p>
                <p className="text-sm text-gray-500">Jun 2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <ProjectCard 
            title="Testbench Automation"
            description="Implementation of a 32-bit MIPS Microprocessor testbench automation using Verilog, Python, and Vivado."
            icon={<Cpu />}
          />
          <ProjectCard 
            title="Smart Bin"
            description="Waste classification project using Raspberry Pi and Teachable Machines."
            icon={<CircuitBoard />}
          />
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Contact">
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col gap-4 items-center">
            <a href="mailto:vishnuponneth2002@gmail.com" className="flex items-center gap-2 hover:text-blue-400">
              <Mail /> vishnuponneth2002@gmail.com
            </a>
            <a href="tel:+917902531431" className="flex items-center gap-2 hover:text-blue-400">
              <Phone /> (+91) 7902531431
            </a>
          </div>
        </div>
      </Section>

      <footer className="text-center py-6 text-gray-400">
        <p>&copy; {new Date().getFullYear()} Vishnu P. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;