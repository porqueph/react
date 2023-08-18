import { useState, useEffect } from 'react'

import './App.css'

function App() {

    const url = "http://localhost:3000/products";

    const [products, setProducts] = useState([]);

    //chamada assync

    useEffect(() => {
     async function fetchData(){
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
     }
     fetchData();
    }, []);

    console.log(products)
  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.name} - {product.price}</li>
          ))}
        </ul>
      </div>
        
    </>
  )
}

export default App
