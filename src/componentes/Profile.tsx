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
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Perfil Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="bg-gradient-to-r from-[#2d3748] to-[#1a202c] pt-8 pb-4">
              <img 
                src={profile} 
                alt="Jorge" 
                className="w-40 h-40 object-cover mx-auto rounded-full border-4 border-white shadow-lg" 
              />
            </div>
            
            <div className="p-6">
              <h2 className="text-2xl font-bold text-center text-gray-800">Jorge Ruediger Junior</h2>
              <p className="text-xl text-center text-[#33546e] mb-2">Software Developer</p>
              
              <div className="flex justify-center gap-2 text-[#33546e] mb-4">
                <FaJava className="w-6 h-6" />
                <BiLogoJavascript className="w-6 h-6" />
                <RiReactjsLine className="w-6 h-6" />
              </div>
              
              <p className="text-center text-[#33546e] font-semibold mb-4">
                Cursando Bacharelado em Engenharia de Software
              </p>
              
              <p className="text-gray-600 text-justify">
                Olá! Me chamo Jorge, sou natural de Blumenau-SC, 
                tenho 32 anos e atuo como programador há aproximadamente 3 anos. 
                Quando não estou trabalhando, gosto de passar tempo com minha família e jogar videogame. 
                Sou um entusiasta por tecnologia e inovação e estou sempre buscando expandir meus conhecimentos e habilidades.
              </p>
            </div>
          </div>
        </div>

        {/* Experiências e Skills */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experiências */}
          <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#2d3748] mb-4 border-b pb-2">Experiências</h2>
            <p className="text-lg text-gray-600">
              Profissional na área de Tecnologia da Informação, exercendo o papel de Desenvolvedor Full Stack Pleno. 
              Desenvolvimento nas linguagens de programação Java, JavaScript (React) e Python. 
              Experiência em desenvolvimento e modelagem de dados em vários bancos de dados, como Microsoft SQL, PostgreSQL, Oracle e MySQL. 
              Ansioso para aplicar conhecimento e habilidades para enfrentar novos desafios.
            </p>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Hard Skills */}
              <div>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-4 border-b pb-2">Hard Skills</h2>
                <div className="grid grid-cols-4 gap-4">
                  <div className="flex flex-col items-center">
                    <FaJava className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Java</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiLogoJavascript className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">JavaScript</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <RiReactjsLine className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiLogoPython className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <AiOutlineConsoleSql className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">SQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiLogoPostgresql className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <GrOracle className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Oracle</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <SiMysql className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">MySQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <AiFillHtml5 className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">HTML5</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <IoLogoCss3 className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">CSS3</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <TbJson className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">JSON</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BiSolidReport className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Reports</span>
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <h2 className="text-3xl font-bold text-[#2d3748] mb-4 border-b pb-2">Soft Skills</h2>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Proatividade
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Dedicação
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Interesse em aprender novas linguagens
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Ansiedade para aplicar conhecimento e habilidades
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Busca constante por melhorias
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center">
        <p className="text-gray-500">
          Site desenvolvido com <span className="text-red-400">♥</span> em React + TailwindCSS
        </p>
      </div>
    </div>
  );
}
