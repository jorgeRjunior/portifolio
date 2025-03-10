import "./App.css";
import Header from "./componentes/Header";
import Profile from "./componentes/Profile";
import Projects from "./componentes/Projects";
import Contact from "./componentes/Contact";
import bgImage from "./componentes/img/OIG.jpeg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="fade-in">
        <Profile />
      </div>
      <div className="fade-in delay-100">
        <Projects />
      </div>
      <div className="fade-in delay-200">
        <Contact />
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm fade-in delay-300">
        <p>© {new Date().getFullYear()} Jorge Ruediger Junior. Todos os direitos reservados.</p>
        <p className="text-gray-500">
          Site desenvolvido com <span className="text-red-400">♥</span> em React + TailwindCSS
        </p>
      </footer>
      
      <div
        className="fixed top-0 -z-10 h-full w-screen bg-fixed bg-cover opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
}

export default App;
