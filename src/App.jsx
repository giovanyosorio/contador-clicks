
import './App.css'
import freecodeCampLogo from "../src/images/freecodecamp-logo.png"
import Botton from './components/Boton'
import Contador from './components/Contador'
import {useState} from 'react'


function App() {
const [numClicks,setNumClicks]=useState(0)


  const manejarClick=()=>{
    setNumClicks(numClicks+1)

  }

  const reiniciarContador=()=>{
    //setNumClicks=0
    setNumClicks(0)
  }
  return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img  className="freecodecamp-logo" src={freecodeCampLogo} alt="logo de freecodecamp" />
        </div>
      <div className='contenedor-principal'>
        <Contador
        numeroClicks={numClicks}
        
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
