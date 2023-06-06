import React, { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "José"])

    const [users, setUsers] = useState([
        {id:1 , name:"Pedro", age:31},
        {id:12, name:"Matheus", age:32},
        {id:33, name:"joão",age:33 }
    ]);

    const deleteRandon = () => {
        const randonNumber = Math.floor(Math.random() * 3);
        setUsers((prevUsers)=> {
            console.log(prevUsers)
            return prevUsers.filter((user) => randonNumber !== user.id)
        })
    };
  return (
    <>
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>

            ))}
        </ul>

        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
        <button onClick={deleteRandon}>Delete randon users</button>
    </>
  )
}

export default ListRender