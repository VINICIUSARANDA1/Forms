
import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    console.log(e.target.value);
  };

  

  return (
    <>
      <form>

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
          <input type="email" name="email" placeholder="Digite seu e-mail" />
        </label>

        <input type="submit" value="Enviar" />

      </form>
    </>
  )
}

export default MyForm