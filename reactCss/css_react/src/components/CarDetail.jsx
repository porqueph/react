import React from 'react'
import styles from './CarDetail.module.css'
const CarDetail = ({color, newCar, km, brand}) => {
  return (
    <>
    <ul>
        <li>marca: {brand}</li>
        <li>cor: {color} </li>
        <li>km: {km} </li>
        {newCar ? <li className={styles.unico_dono}>este é um carro único dono</li>:<></>}
    </ul>
   
    </>

  )
}

export default CarDetail