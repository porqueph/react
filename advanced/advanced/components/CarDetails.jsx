import React from 'react'

const CarDetails = ({brand, km, cor}) => {
  return (
    <div>
        <h2>Detalhe do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>cor: {cor}</li>
        </ul>
    </div>
  )
}

export default CarDetails