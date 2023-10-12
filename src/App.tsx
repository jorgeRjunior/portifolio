import './App.css';
import Header from './componentes/Header';
import Profile from './componentes/Profile';
import bgImage from './componentes/img/OIG.jpeg';

function App() {
  return (
      <>
      <div>
      <Header />
      <Profile />
      <div className='absolute left-0 top-0 -z-10 h-[100vh] w-[100vw] blur-[1px] opacity-80' style={{ backgroundImage: `url(${bgImage})` }}></div>
      </div>
      
      </>
  );
}

export default App;
