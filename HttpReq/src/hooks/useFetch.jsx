import {useState, useEffect} from 'react'



//4 custom hook


export const useFetch = (url) => {
  const [data, setData] = useState(null)


  // 5 refatorando post
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)
  const [callFetch, setCallFetch] = useState(false)


  //6 loading

  const [loading, setLoading] = useState(false);


  // tratando erro
  const [error, setError] = useState(null);


  // desafio

  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if(method === "POST") {
      setConfig({
        method,
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data),
      });
      setMethod(method)
    } else if (method = "DELETE"){
      setConfig({
        method,
        headers: {
          "content-type": "application/json"
        }
      });

      setMethod(method);
      setItemId(data);
    }
  }

  useEffect(()=>{
    async function fetchData(){

      //6 loading
      setLoading(true)

      try{
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
      } catch (error) {
        console.log(error.message);
        setError("houve erro ao carregar dados");
      }
      setLoading(false)
    };
    fetchData();
  },[url, callFetch]);

  // 5 post novo
  useEffect(()=>{
    
    const httpResquest = async () => {
      if(method === "POST"){

        let fetchOptions = [url, config];
  
        const res = await fetch(...fetchOptions);
        const json = await res.json();
  
        setCallFetch(json)
  
      } else if(method = "DELETE"){
        const deleteUrl = `${url}/${itemId}`
        const res = await fetch(deleteUrl, config)
        const json = await res.json()

        setCallFetch(json)
      }
    }
    httpResquest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error};
};
