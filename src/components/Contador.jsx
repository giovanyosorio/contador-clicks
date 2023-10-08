import React from 'react'
import "../stylesheet/Contador.css"

export default function Contador({numeroClicks}) {
  return (
    <div className='contador'>
      {numeroClicks}
    </div>
  )
}
