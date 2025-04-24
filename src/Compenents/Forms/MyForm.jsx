
import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault(); 
    console.log(email , name)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome:</span>
          <input type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </label>

        <label>
          <span>E-mail:</span>
          <input type="email"
           name="email" 
           placeholder="Digite seu e-mail" 
           onChange={(e)=> setEmail(e.target.value)}/>
        </label>

        <input type="submit" value="Enviar" />

      </form>
    </>
  )
}

export default MyForm