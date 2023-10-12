import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { SiDevdotto } from "react-icons/si";

export default function Header() {
  return (
    <div className="flex pl-[10vw]  items-center gap-10 h-[8vh] w-[100vw] bg-[#353b47]">
      <SiDevdotto className="flex flex-row  text-white h-10 w-10 hover:text-[#5e9dc1]"/> 
      <span className="flex text-2xl text-white justify-start mb-1">Jorge Junior</span>
      
      <div className="flex justify-end w-[65vw] gap-10 pr-24">
        <a href="https://www.linkedin.com/in/jorge-ruediger-junior/" target="_blank" rel="noopener noreferrer"><span className="flex text-2xl text-white"><AiFillLinkedin className="h-10 w-10 hover:text-[#5e9dc1]"></AiFillLinkedin></span></a>
        <a href="https://github.com/jorgeRjunior" target="_blank" rel="noopener noreferrer"><span className="flex text-2xl text-white"><AiFillGithub className="h-10 w-10 hover:text-[#5e9dc1]"></AiFillGithub></span></a>
        <a href="https://www.instagram.com/jorge.r.jr/" target="_blank" rel="noopener noreferrer"><span className="flex text-2xl text-white"><AiFillInstagram className="h-10 w-10 hover:text-[#5e9dc1]"></AiFillInstagram></span></a>
      </div>

    </div>
  );
}
