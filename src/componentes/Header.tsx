import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";

export default function Header() {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-16 py-4 bg-gradient-to-r from-[#2d3748] to-[#1a202c] shadow-lg">
      <div className="flex items-center gap-4">
        <SiDevdotto className="text-white h-8 w-8 hover:text-[#5e9dc1] transition-all duration-300"/> 
        <span className="text-2xl font-bold text-white">Jorge Junior</span>
      </div>
      
      <div className="flex gap-6">
        <a href="https://www.linkedin.com/in/jorge-ruediger-junior/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
          <AiFillLinkedin className="h-7 w-7 text-white hover:text-[#5e9dc1]"/>
        </a>
        <a href="https://github.com/jorgeRjunior" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
          <AiFillGithub className="h-7 w-7 text-white hover:text-[#5e9dc1]"/>
        </a>
        <a href="https://www.instagram.com/jorge.r.jr/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
          <AiFillInstagram className="h-7 w-7 text-white hover:text-[#5e9dc1]"/>
        </a>
      </div>
    </div>
  );
}
