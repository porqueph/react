import  styles from './MyForm.module.css'
import { useState } from 'react'
const MyForm = () => {
    // gerenciado
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    
    const handleName= (e) => {
        setName(e.target.value);
    };

    console.log(email);

    const handleSubmit = (e) =>{
        event.preventDefault();
        console.log("enviado o form");
        console.log(name, email)
    }



  return (
    <div>

        {/* envio de form, como fazer */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type='text' name='name' placeholder='Digite seu nome' onChange={handleName}/>
            </div>

                {/* com label envolvendo input */}

                <label>
                    <span>e-mail</span>
                    <input type='email' name='email' onChange={(e)=> setEmail(e.target.value)}></input>
                </label>

            <input type='submit' value="enviar" />
        </form>
    </div>
  )
}

export default MyForm