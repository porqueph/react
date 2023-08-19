import { useState, useEffect } from 'react'

import './App.css'

import { useFetch } from './hooks/useFetch';

function App() {

    const url = "http://localhost:3000/products";

    const [products, setProducts] = useState([]);


    // 4 custom hook
    const { data: items, httpConfig, loading} = useFetch(url);
    console.log(items)
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    //chamada assync

    // useEffect(() => {
    //  async function fetchData(){
    //   const res = await fetch(url);
    //   const data = await res.json();
    //   setProducts(data);
    //  }
    //  fetchData();
    // }, []);




    // add prod
    const handleSubmit = async(e) => {
      e.preventDefault()

      const product = {
        name,
        price,
      }

      // const res = await fetch(url, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(product),
      // });
      // // dynamic load
      // const addedProduct = await res.json()
      // setProducts((prevProducts)=> [...prevProducts, addedProduct])
      
      // 5 refatorando post
      httpConfig(product, "POST")
      setName("");
      setPrice("");
    }

    
  return (
    <>
      <div className="App">
        <h1>Lista de produtos</h1>
        {loading && <p>carregando dados...</p>}
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>{product.name} - {product.price}</li>
          ))}
        </ul>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              nome:
              <input type="text" value={name} name='name' onChange={(e) => setName(e.target.value)}/>
              Preço:
              <input type="text" value={price} name='price' onChange={(e) => setPrice(e.target.value)}/>
            </label>
            <input type="submit" value='Criar'/>
          </form>
        </div>
      </div>
        
    </>
  )
}

export default App
