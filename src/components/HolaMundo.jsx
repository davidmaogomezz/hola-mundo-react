import React from 'react'

const HolaMundo = () => {
  const hello = 'Hola mundo'
  const isTrue = true
  return(
    <div className="HolaMundo">
      <h1>{hello}</h1>
      <h1>Curso esencial de React</h1>
      <img src="https://arepa.s3.amazonaws.com/react.png" alt=""/>
      {isTrue ? <h4>Verdadero</h4> : <h5>falso</h5>}
      {isTrue && <h4>Soy Verdadero</h4>}
    </div>
  )
}

export default HolaMundo