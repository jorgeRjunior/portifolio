import profile from './img/profile.png'
import {BiLogoJavascript, BiLogoPostgresql, BiLogoSpringBoot, BiSolidReport} from 'react-icons/bi';
import {BsGithub, BsWordpress} from 'react-icons/bs';
import {RiReactjsLine} from 'react-icons/ri';
import {BiLogoPython} from 'react-icons/bi';
import {GrOracle} from 'react-icons/gr';
import {AiFillHtml5, AiOutlineConsoleSql} from 'react-icons/ai';
import {SiMysql} from 'react-icons/si';
import {IoLogoCss3} from 'react-icons/io';
import {TbJson} from 'react-icons/tb';
import {SiJira} from 'react-icons/si';
import {FaJava} from 'react-icons/fa';

export default function Profile() {
  return (
    <div className="flex h-[30vh] ml-[10vw] mt-[3vw] gap-9">
      <div id="perfil" className=''>
        <div className="flex flex-col h-[82vh] w-[20vw] rounded-[20px] border-[#41525b] border-4 bg-slate-100 min-w-[20rem]">
            <img src={profile} alt="Jorge" className="flex justify-center w-[80%] h-auto rounded-[50%] m-10 mt-5  border-[#41525b] border-4" />
            
            <span className="flex justify-center text-2xl font-bold text-[#111c25] mt-[-10px] ">Jorge Ruediger Junior</span>
            <span className="flex justify-center text-xl text-[#33546e]">Software Developer</span>
            
            <div className='flex justify-center text-[#33546e]'>
              <FaJava className='flex mt-[2px] h-full ml-2'></FaJava>
              <BiLogoJavascript className='mt-[2px] w-6 h-full ml-1'></BiLogoJavascript>
              <RiReactjsLine className='mt-[2px] w-6 h-full ml-1'></RiReactjsLine>
            </div>
            
            <span className="flex justify-center text-[16px] font-semibold text-[#33546e] pb-5 p-10 pt-5 text-center">           
              Cursando Bacharelado em Engenharia de Software
            </span>
            
            <span className="flex justify-left text-[16px] text-[#8b9aab] font-light pt-1 pl-10 pb-5 pr-10 overflow-y-auto">           
            Olá! Me chamo Jorge, sou natural de Blumenau-SC, 
            tenho 32 anos e atuo como programador há aproximadamente 3 anos. 
            Quando não estou trabalhando, gosto de passar tempo com minha família e jogar videogame. 
            Sou um entusiasta por tecnologia e inovação e estou sempre buscando expandir meus conhecimentos e habilidades.
            </span>


        </div>
      </div>
    <div className='flex flex-col '>
      <div id="experiencias" className="border-[#41525b] border-4 rounded-[20px] h-[38vh] w-[50vw] p-2 pl-8 ml-5 pr-10 pt-5 pb-10 bg-slate-100 overflow-y-auto">
        <span className="flex text-3xl font-bold text-[#41525b] ">Experiências</span>
      
        <span className="flex text-[20px] font-bold text-[#8b9aab] font-light pt-5 text-justify">
        Profissional na área de Tecnologia da Informação, exercendo o papel de Desenvolvedor Full Stack Pleno. 
            Desenvolvimento nas linguagens de programação Java, JavaScript (React) e Python. 
            Experiência em desenvolvimento e modelagem de dados em vários bancos de dados, como Microsoft SQL, PostgreSQL, Oracle e MySQL. 
            Ansioso para aplicar conhecimento e habilidades para enfrentar novos desafios.
        </span>
      </div>

      <div id="skills" className="flex border-[#41525b] border-4 rounded-[20px] h-[38vh] w-[50vw] p-2 pl-8 ml-5 pr-10 pt-5 mt-10 pb-10 bg-slate-100 overflow-y-auto">
        
        <div id="hardskill" className='flex flex-col pr-[10%] '>
        <span className="flex flex-col text-3xl font-bold text-[#41525b] w-[20vw]">Hard Skill</span>
        <span className="flex flex-row flex-wrap text-xl font-bold pt-5 gap-4 text-[#33546e] ">
        <FaJava className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></FaJava>
        <BiLogoJavascript className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BiLogoJavascript>
        <RiReactjsLine className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></RiReactjsLine>
        <BiLogoPython className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BiLogoPython>
        <AiOutlineConsoleSql className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></AiOutlineConsoleSql>
        <BiLogoPostgresql className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BiLogoPostgresql>
        <GrOracle className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></GrOracle>
        <SiMysql className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></SiMysql>
        <AiFillHtml5 className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></AiFillHtml5>
        <IoLogoCss3 className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></IoLogoCss3>
        <TbJson className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></TbJson>
        <BiSolidReport className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BiSolidReport>
        <SiJira className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></SiJira>
        <BsGithub className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BsGithub>
        <BiLogoSpringBoot className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BiLogoSpringBoot>
        <BsWordpress className='flex flex-row h-auto w-10 hover:animate-jiggle hover:text-[#5e9dc1]'></BsWordpress>
        </span>
        </div>

        <div id="softskill" className='flex flex-col'>
        <span className="flex flex-col text-3xl font-bold text-[#41525b] ">Soft Skill</span>
        <span className="flex flex-col text-xl pt-5 text-[#8b9aab]">
        Proatividade, Dedicação,
Interesse em aprender novas linguagens,
Ansiedade para aplicar conhecimento e habilidades,
Busca constante por melhorias e expandir conjunto de habilidades
        </span>
        </div>

      </div>

      <div id="sobre" className="flex absolute justify-center border-[#41525b] border-4 rounded-[20px] h-4 pb-6 pl-8 ml-5 pt-0 mt-[78vh] bg-slate-100">
        <span className="flex text-[16px] text-[#8b9aab] font-light justify-center w-[48vw]">
       Site desenvolvido com <span className='pl-2 pr-2 text-red-400'> ♥ </span> em React + TailWindCSS
        </span>
      </div>

</div>
  
    </div>
  );
}
