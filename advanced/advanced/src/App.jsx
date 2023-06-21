import { Fragment, useState } from 'react'

import City from './assets/download.jpg';

import './App.css'
import ManageData from '../components/ManageData';
import ListRender from '../components/ListRender';
import ConditionalRender from '../components/ConditionalRender';
import ShowUserName from '../components/ShowUserName';
import CarDetails from '../components/CarDetails';
import Fragments from '../components/Fragments';
import Container from '../components/Container';
import ExecuteFunction from '../components/ExecuteFunction';
import Message from '../components/Message';
import ChangeMessage from '../components/ChangeMessage';
import UserDetails from '../components/UserDetails';

function App() {
  const [count, setCount] = useState(0);
  const [name] = useState("Pedro");
  const cars = [
    {id:1, brand:"ferrari", color:"amarela", newCar: true, km:0},
    {id:2, brand:"kia", color:"azul", newCar: false, km:1110},
    {id:3, brand:"Renault", color:"vermelho", newCar: true, km:2900},

  ]

  const pessoas = [
    {id:1, nome:"Pedro", profissao:"Dev", idade:23},
    {id:2, nome:"Jonas", profissao:"estudante", idade:8},
    {id:3, nome:"isaque", profissao:"pesquisador", idade:19},

  ]

  function showMessage() {
    console.log("mensagem teste");
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg);
  };
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
      <CarDetails brand="CHEV" km={100000} cor="azul" newCar={true}></CarDetails>
      <CarDetails brand="Ford" km={4000} cor="Vermela" newCar={false}></CarDetails>
      {cars.map((car)=> (
        <CarDetails key={car.id} brand={car.brand} cor={car.color} newCar={car.newCar} km={car.km}></CarDetails>
      ))}

      <Fragments propFrag="Teste frag"></Fragments>


      {/*Children*/}

      <Container>

        <p>Conteúdo</p>
      </Container>

      <ExecuteFunction myFunction={showMessage}></ExecuteFunction>

      {/* state lift */}

      <Message msg={message}></Message>
      <ChangeMessage handleMessage={handleMessage}></ChangeMessage>

      {pessoas.map((pessoas)=>(
        <UserDetails key={pessoas.id} name={pessoas.nome} age={pessoas.idade} profissao={pessoas.profissao}></UserDetails>
      ))}
    </>
  )
}

export default App
