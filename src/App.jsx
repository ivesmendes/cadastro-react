import './App.css'
import { AnimationBackground } from './Components/AnimationBackground';
import Cadastro from './Cadastro/Cadastro';

function App() {

  return (
    <div className="App">
       <div className="backgroundAnimation">
        <AnimationBackground />
       </div>

      <Cadastro />
    </div>
  );
}

export default App
