import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <h2>Forms</h2>
        <MyForm user={{name: "pedro", email: "pedro@gmail.com", opinion: "sei", role:"admin"}}></MyForm>
        </div>
    </>
  )
}

export default App
