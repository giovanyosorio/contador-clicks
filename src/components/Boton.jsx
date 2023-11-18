import React from 'react'
import "../stylesheet/Button.css"
//Componente Boton
export default function Boton({texto,esBotonDeClic,manejarClick}) {
  return (
        <button 
            className={esBotonDeClic ? "boton-click":"boton-reiniciar"}
            onClick={manejarClick}>
            {texto}
        </button>
  )
}
