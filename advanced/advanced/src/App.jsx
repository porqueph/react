import { useState } from 'react'

import City from './assets/download.jpg';

import './App.css'
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';
import ConditionalRender from '../components/ConditionalRender';
import ShowUserName from '../components/ShowUserName';
import CarDetails from '../components/CarDetails';

function App() {
  const [count, setCount] = useState(0)
  const [name] = useState("Pedro")
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
      <ConditionalRender></ConditionalRender>
      <ShowUserName name={name}></ShowUserName>
      <CarDetails brand="CHEV" km={100000} cor="azul"></CarDetails>
    </>
  )
}

export default App
