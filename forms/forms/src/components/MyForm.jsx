import  styles from './MyForm.module.css'
import { useState } from 'react'



const MyForm = ({user}) => {
    // gerenciado values
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email: "");
    const [opinion, setOpinion] = useState(user ? user.opinion:"");
    const [role, setRole] = useState(user ? user.role:"");
    // handle by function, below an example of inline input
    const handleName= (e) => {
        setName(e.target.value);
    };

    console.log(email);

    //envio
    const handleSubmit = (e) =>{
        event.preventDefault();
        console.log("enviado o form");
        console.log(name, email, opinion, role);

        // limpando 
        setEmail("");
        setName("");
        setOpinion("")
    }



  return (
    <div>

        {/* envio de form, como fazer */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Nome:</label>
                <input type='text' name='name' placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>

                {/* com label envolvendo input */}

                <label>
                    <span>e-mail</span>
                    <input type='email' name='email' placeholder='seu e-mail aqui' onChange={(e)=> setEmail(e.target.value)} value={email} ></input>
                </label>

              <label>
                <span>opine</span>
                <textarea name='opinion'  placeholder='aqui sua opinião' onChange={(e) => setOpinion(e.target.value)} value={opinion}>
    
                </textarea>
                </label>

                    {/* selects */}
                <label>
                    <span>Função</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user"> Usuário</option>
                        <option value="editor"> editor</option>
                        <option value="manager"> gerente</option>
                        <option value="admin"> ADM</option>
                    </select>
                </label>

            <input type='submit' value="enviar" />
        </form>
    </div>
  )
}

export default MyForm