import { useState } from "react";

const ConditionalRender = () => {
    const [x] = useState(true);

    const [name, setName] = useState("sei lá")
  
    return(<>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim</p>}
        {!x && <p>Agora é falso</p>}

        {name === "Pedro" ? (
            <div>
                <p>o nome é {name}</p>
            </div>
        ): (
            <div>
                <p>o Nome é {name}"else"</p>
            </div>
        )}

        <button onClick={()=> setName("Pedro")}>Clica aqui</button>
        </>
    );

};

export default ConditionalRender;