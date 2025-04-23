import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  technologies, 
  githubLink, 
  liveLink,
  image 
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-[#5e9dc1] transition-colors"
            >
              <AiFillGithub className="w-5 h-5" />
              <span>Código</span>
            </a>
          )}
          
          {liveLink && (
            <a 
              href={liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-700 hover:text-[#5e9dc1] transition-colors"
            >
              <FiExternalLink className="w-5 h-5" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const projects: ProjectProps[] = [
    {
      title: "3R Motors",
      description: "Site de uma oficina especializada em remapeamento de carros.",
      technologies: ["React", "TypeScript", "TailwindCSS", "PHP", "MySQL"],
      liveLink: "https://3r-motors.vercel.app/",
      image: "/img/3rmotors.png"
    },
    {
      title: "Portfólio Pessoal",
      description: "Meu site de portfólio pessoal desenvolvido com React e TailwindCSS.",
      technologies: ["React", "TypeScript", "TailwindCSS"],
      githubLink: "https://github.com/jorgeRjunior/portifolio",
      image: "https://github.com/jorgeRjunior/portifolio/blob/master/src/componentes/img/portifolio.png?raw=true"
    },
    {
      title: "Xsd_to_class",
      description: "Este é um programa Java para manipular arquivos XSD e executar comandos para gerar classes a partir desses arquivos usando o xjc (JAXB Binding Compiler).",
      technologies: ["Java"],
      githubLink: "https://github.com/jorgeRjunior/xsd-to-class-java",
      image: "https://camo.githubusercontent.com/1d6fb3ee033e7f5208dd24b27efc70b021210c64ed4d6edea61498d9d5fc5d54/68747470733a2f2f692e6962622e636f2f67504d6a4a374b2f696e746572666163652d7873642d636f6e7665727465722e706e67"
    },
    {
      title: "AutoClick",
      description: "Programa criado em python para autoclick de mouse ou teclas.",
      technologies: ["Python"],
      githubLink: "https://github.com/jorgeRjunior/autoclick",
      image: "https://play-lh.googleusercontent.com/ymEyRZ2L55vaFJi29g5Epy5XB-brujerzwKJmYG8e1zmjxUXxJ1w7JQ3uLXX8_oe3fwS"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl fade-in delay-200">
      <h2 className="text-3xl font-bold text-[#2d3748] mb-8 border-b pb-2">Projetos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}