
import './App.css'
import freecodeCampLogo from "../src/images/freecodecamp-logo.png"
import Botton from './components/Boton'
import Contador from './components/Contador'

function App() {

  const manejarClick=()=>{
    console.log("click");
  }

  const reiniciarContador=()=>{
    console.log("reiniciar");
  }
  return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img  className="freecodecamp-logo" src={freecodeCampLogo} alt="logo de freecodecamp" />
        </div>
      <div className='contenedor-principal'>
        <Contador
        numeroClicks={5}
        
        />

      <Botton
      texto="Click"
      esBotonDeClic={true}
      manejarClick={manejarClick}

      />
      <Botton
      
      texto="Reinciar"
      esBotonDeClic={false}
      manejarClick={reiniciarContador}
      />

   

      </div>

      </div>
  )
}

export default App
