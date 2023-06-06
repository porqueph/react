import { useState } from "react";


const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(15);
  return (
    <>
    <div>
        <p>valor: {someData}</p>
        <button onClick={()=>(someData = 15)}>Mudar variável</button>
    </div>
    <div>
        <p>dinamica: {number}</p>
        <button onClick={()=> setNumber(25)}>Mudar variável</button>
    </div>
    </>
  )
}

export default ManageData