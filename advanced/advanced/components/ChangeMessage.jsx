import React from 'react'

const ChangeMessage = ({handleMessage}) => {
    const messages = [
        {id:1, mensagem:"Oi"},
        {id:2, mensagem:"Olá"},
        {id:3, mensagem:"Oi tudo bem?"},
    
      ]
  
    return (
    <div>
        {messages.map((messages) => (
            <button key={messages.id} onClick={() => handleMessage(messages.mensagem)}>{messages.mensagem}</button>
        ))}
    </div>
  )
}

export default ChangeMessage