import './App.css'
import { AnimationBackground } from './Components/AnimationBackground';
import Cadastro from './Cadastro/Cadastro';

function App() {

  return (
    <>
      <div className="backgroundAnimation">
        <AnimationBackground />
      </div>

      <div className="App">
        <Cadastro />
      </div>
    </>
  );
}

export default App
