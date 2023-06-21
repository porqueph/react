import React from 'react'

const UserDetails = ({name, age, profissao}) => {
  return (
    <>
    <ul>
        <li>
            o nome é {name}
        </li>
        <li>
           a idade é {age}
        </li>
        <li>
            a profissão é {profissao}
        </li>
       {age < 18 ? (<li> não pode dirigir {age}</li>) : (<></>)}
        
    </ul>
    
    </>
  )
}

export default UserDetails