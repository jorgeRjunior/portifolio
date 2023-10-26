import "./App.css";
import Header from "./componentes/Header";
import Profile from "./componentes/Profile";
import bgImage from "./componentes/img/OIG.jpeg";

function App() {
  return (
    <>
      <div>
        <Header />
        <Profile />
      </div>

      <div
        className="absolute left-0 top-0 -z-10 h-full w-screen bg-fixed bg-cover-full blur-[0.1px] opacity-90"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </>
  );
}

export default App;
