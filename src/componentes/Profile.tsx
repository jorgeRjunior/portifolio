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
import {BiLogoAngular} from 'react-icons/bi';

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
                <BiLogoSpringBoot className="w-6 h-6" />
                <BiLogoAngular className="w-6 h-6" />
              </div>
              
              <p className="text-center text-[#33546e] font-semibold mb-4">
                Cursando Bacharelado em Engenharia de Software
              </p>
              
              <p className="text-gray-600 text-justify pb-4">
                Natural de Blumenau-SC, tenho 34 anos e atuo como desenvolvedor de software há mais de 4 anos. 
                Minha trajetória profissional é marcada pela paixão por resolver problemas complexos através da tecnologia. 
                Quando não estou codificando, dedico meu tempo à família e ao meu hobby, que é jogar online com amigos. Estou constantemente aprimorando minhas habilidades 
                e explorando novas ferramentas para criar soluções mais eficientes.
              </p>
            </div>
          </div>
        </div>

        {/* Experiências e Skills */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experiências */}
          <div className="bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
            <h2 className="text-3xl font-bold text-[#2d3748] mb-4 border-b pb-2">Experiências</h2>
            
            <p className="text-lg text-gray-600 mt-4">
              Profissional na área de Tecnologia da Informação com mais de 4 anos de experiência, atualmente exercendo o papel de Tech Lead. 
              Especializado em desenvolvimento Full Stack com foco em Java, JavaScript (React/Angular), e arquiteturas baseadas em microserviços.
              Experiência sólida em modelagem e otimização de bancos de dados relacionais como SQL Server, PostgreSQL, Oracle e MySQL.
              Habilidades em liderança técnica, mentoria de equipes e implementação de metodologias ágeis para entrega contínua de valor.
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
                    <BiLogoSpringBoot className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Spring Boot</span>
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
                    <BiLogoAngular className="w-10 h-10 text-[#33546e] hover:text-[#5e9dc1] hover:animate-jiggle transition-colors duration-300" />
                    <span className="text-xs mt-1">Angular</span>
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
                    Espírito de liderança
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Trabalho em equipe
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Comunicação eficaz
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Resolução de problemas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Interesse em aprender novas linguagens
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-[#5e9dc1] rounded-full mr-2"></span>
                    Adaptabilidade
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

      {/* Minha Jornada */}
      <div className="bg-white rounded-xl shadow-xl p-6 mt-8 transform transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-[#2d3748] mb-8 border-b pb-2">Minha Jornada</h2>
        
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-gray-800">Tech Lead</h3>
                <p className="text-gray-600 font-medium">SpinCare · Tempo integral</p>
                <p className="text-gray-500 text-sm">jul de 2024 - o momento · 9 meses</p>
                <p className="text-gray-500 text-sm">Blumenau, Santa Catarina, Brasil · Híbrida</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600">
                Além de desenvolver soluções técnicas, atuo como líder técnico auxiliando a equipe na tomada de decisões arquiteturais e estratégicas. Responsável pela alocação e priorização de tarefas, monitoramento do progresso dos projetos e facilitação de recursos necessários para o desenvolvimento eficiente. Promovo comunicação eficaz entre equipes e stakeholders, além de incentivar a melhoria contínua através de code reviews, pair programming e implementação de boas práticas de desenvolvimento. Trabalho com metodologias ágeis para garantir entregas de qualidade dentro dos prazos estabelecidos.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-gray-800">Desenvolvedor de Software Pleno</h3>
                <p className="text-gray-600 font-medium">Edusoft Tecnologia · Tempo integral</p>
                <p className="text-gray-500 text-sm">fev de 2024 - jun de 2024 · 5 meses</p>
                <p className="text-gray-500 text-sm">Blumenau, Santa Catarina, Brasil · Híbrida</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600">
                Atuei no desenvolvimento e manutenção de sistemas educacionais robustos utilizando Java como linguagem principal. Implementei novas funcionalidades e realizei melhorias significativas no software educacional da empresa, focando em performance e usabilidade. Trabalhei com JSP para criação de interfaces dinâmicas e responsivas, integrando-as com o backend Java. Participei ativamente de reuniões de planejamento e retrospectivas, contribuindo com ideias para aprimorar os processos de desenvolvimento e a qualidade do produto final entregue aos clientes do setor educacional.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Java</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">JSP (JavaServer Pages)</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-gray-800">Desenvolvedor de Software Pleno</h3>
                <p className="text-gray-600 font-medium">Esquematika Ltda · Tempo integral</p>
                <p className="text-gray-500 text-sm">jan de 2022 - fev de 2024 · 2 anos 2 meses</p>
                <p className="text-gray-500 text-sm">Blumenau, Santa Catarina, Brasil</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600">
                Trabalhei no desenvolvimento e evolução de um ERP especializado para o setor de construção civil, utilizando Java e JavaScript como principais tecnologias. Fui responsável pela criação de novos módulos e implementação de melhorias em funcionalidades existentes, sempre buscando otimizar a experiência do usuário e a eficiência do sistema. Desenvolvi serviços REST para integração com sistemas externos e aplicativos móveis, garantindo comunicação segura e eficiente. Elaborei relatórios complexos utilizando JasperStudio IReport, fornecendo insights valiosos para tomada de decisões dos clientes. Realizei modelagem e otimização de banco de dados SQL Server, assegurando performance e integridade dos dados em um sistema utilizado por empresas de grande porte do setor de construção.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">JSP (JavaServer Pages)</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Microsoft Windows</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Java</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">SQL Server</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg h-full">
                <h3 className="text-xl font-semibold text-gray-800">Engenheiro de software</h3>
                <p className="text-gray-600 font-medium">Satty.com.br · Terceirizado</p>
                <p className="text-gray-500 text-sm">ago de 2021 - mar de 2022 · 8 meses</p>
                <p className="text-gray-500 text-sm">Maringá, Paraná, Brasil</p>
              </div>
            </div>
            <div className="md:w-3/4">
              <p className="text-gray-600">
                Atuei como desenvolvedor terceirizado em projetos de e-commerce e sistemas de gestão, utilizando uma stack diversificada que incluía Java, React e Vue.js. Implementei soluções backend com Spring Boot, criando APIs RESTful escaláveis e seguras para suportar aplicações de alto tráfego. Desenvolvi interfaces modernas e responsivas com React e Vue.js, focando em usabilidade e acessibilidade. Trabalhei com modelagem e otimização de bancos de dados PostgreSQL, implementando consultas eficientes e garantindo a integridade dos dados. Participei de todo o ciclo de desenvolvimento, desde o levantamento de requisitos até a implantação em produção, seguindo metodologias ágeis e práticas de integração contínua.
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Microsoft Windows</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Java</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">React</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">Vue</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">SpringBoot</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">PostgreSQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
