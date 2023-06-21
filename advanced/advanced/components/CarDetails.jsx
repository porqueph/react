import React from 'react'

const CarDetails = ({brand, km, cor, newCar}) => {
  return (
    <div>
        <h2>Detalhe do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>cor: {cor}</li>
        </ul>
        {newCar && <p>este carro é novo</p> }
    </div>
  )
}

export default CarDetails