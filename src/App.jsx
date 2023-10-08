
import './App.css'
import freecodeCampLogo from "../src/images/freecodecamp-logo.png"
import Botton from './components/Boton'


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
