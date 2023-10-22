import React from 'react'
import styles from './CreatePost.module.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")

  const {user} = useAuthValue()
  const {insertDocument, response} = useInsertDocument("posts")

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("")
    
    // validate URL
    try {
      new URL(image)
    } catch (error) {
      setFormError("a imagem precisa ser uma URL")
    }

    //criar tags
    const tagsArray = tags.split(",").map((tag)=> tag.trim().toLowerCase())
    //conferir valores

    if(!title ||  !image || !tags || !body){
      setFormError("por favor preencher todos os campos")
    }
    if(formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName
    });

    // goto homepage
    navigate('/')
  };

  return (
    <div className={styles.create_post}>
        <h2>Criar post</h2>
        <p>escreva sobre o que quiser compartilhar</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Titulo</span>
            <input type="text" name="title" required placeholder='pense num bom titulo' 
            
            onChange={(e) => setTitle(e.target.value)}
            
            value={title}
            />
          </label>
          <label>
            <span>URL da imagem</span>
            <input type="text" name="image" required placeholder='insira uma imagem para seu post' 
            
            onChange={(e) => setImage(e.target.value)}
            
            value={image}
            />
          </label>
          <label>
            <span>Conteudo</span>
            <textarea type="text" name="body" required placeholder='Escreva seu post' 
            
            onChange={(e) => setBody(e.target.value)}
            value={body}
            />
          </label>


          <label>
            <span>Tags</span>
            <input type="text" name="tags" required placeholder='insira as tags separadas por ,' 
            
            onChange={(e) => setTags(e.target.value)}
            
            value={tags}
            />
          </label>
         
          {!response.loading && <button className="btn">Cadastrar</button>}
          {response.loading && <button className="btn" disabled>aguarde...</button>}
          {response.error && <p className='error'>{response.error}</p>}
          {formError && <p className='error'>{formError}</p>}
        </form>
    </div>
  )
}

export default CreatePost