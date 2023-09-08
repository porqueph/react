import React from 'react'
import { useParams, Link } from "react-router-dom"
import { useFetch } from '../hooks/useFetch'


const Product = () => {

    const {id} = useParams()

  //trazer item
  const url = "http://localhost:3000/products/" + id;
  const {data: product, loading, error} = useFetch(url);

  return (
    <div>
        <p>ID do produto: {id}</p>
        {error && <p> Ocorreu um erro</p>}
        {loading && <p>Loading</p>}
        {product && (
          <div>
            <h1>{product.name}</h1>
            <p>R$ {product.price}</p>
            {/* nested route */}
            <Link to={`/products/${product.id}/info`}>Mais infos</Link>
          </div>
        )}
    </div>
  )
}

export default Product