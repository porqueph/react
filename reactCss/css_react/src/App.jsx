import { useState } from 'react'

import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';
import CarDetail from './components/CarDetail';

function App() {

  const n = 10;
  const [name] = useState("Pedro")
  const redTitle = true;
  const [cars] = useState(
    [
      {id:1, brand:"ferrari", color:"amarela", newCar: true, km:1220},
      {id:2, brand:"ford", color:"preto", newCar: false, km:300},
      {id:3, brand:"chev", color:"azul", newCar: true, km:5000},
    ]
  )

  return (
    <div className='App'>
      <h1>React with CSS</h1>
      <MyComponent></MyComponent>
      <p>Parágrafo do APP.js</p>

      <p style={{color: "blue", padding:"25px", borderTop:"2px solid red"}}>Elemento inline</p>

      <h2 style={n <10 ? ({color:"purple"}):({color:"pink"})}>css dinamico inline</h2>
      <h2 style={n >10 ? ({color:"purple"}):({color:"pink"})}>css dinamico inline</h2>

      <h2 style={name === "Pedro" ? ({color:"Green", backgroundColor:"blue"}):null}>css dinamico inline</h2>
{/* classe dinamica abaixo e style dinamico acima */}
      <h2 className={redTitle ? "red-title": "title"}>titulo com classe dinâmica</h2>

      {/* modules css */}
      <h2 className='my_title'>testanto my title</h2>
      <Title></Title>
      <div>
        <h1 className='main_title'>challenge</h1>
        {cars.map((car)=> (
          <CarDetail key={car.id} color={car.color} newCar={car.newCar} km={car.km} brand={car.brand}></CarDetail>
        ))}
      </div>
    </div>
  )
}

export default App
