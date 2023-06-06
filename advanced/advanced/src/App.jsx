import { useState } from 'react'

import City from './assets/download.jpg';

import './App.css'
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>avançado</h1>
      <div>
        <img src="/sol.jpg" height="50px" width="50px" alt="Sol" />
      </div>
      <div>
        <img src={City} alt="cidade" height="50px" width="50px"/>
      </div>
      <ManageData></ManageData>
      <ListRender />
    </>
  )
}

export default App
