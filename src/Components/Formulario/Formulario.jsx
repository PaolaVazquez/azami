import React, { useState } from 'react'

export const Formulario = () => {

  const [userData, setUserData] = useState({name: "", email: "", password: ""})
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState("") 
  const handleChange = (e)=>{
    setUserData({ ...userData, [e.target.name]: e.target.value });

  }
  const handleSubmit = (e) =>{
    e.preventDefault();

    if(userData.name.length < 5){
      setErrorMessage("nombre no válido")
      setError(true)
      return
    }
    const incluye = userData.email.includes("@")
    if(!incluye){
      setErrorMessage("email no válido")
      setError(true)
    }
    const str = userData.password.trim()
    const passwordIsValid = userData.password === str
    if(!passwordIsValid || userData.password.length <5){
      setError(true)
      setErrorMessage("la contraseña no debe de tener espacios en blanco y debe tener como mínimo 5 carácteres")
      return
    }
    console.log(userData)
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='Ingresa tu nombre' onChange={handleChange} name="name"/>
          <input type="text" placeholder='Ingresa tu email' onChange={handleChange} name="email" />
          <input type="text" placeholder='Ingresa tu contraseña' onChange={handleChange} name="password" />
          <button type='submit'>Enviar</button>
        </form>
        {
          error && <h1>{setErrorMessage}</h1>
        }
    </div>
  )
}
