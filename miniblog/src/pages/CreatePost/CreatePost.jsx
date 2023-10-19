import React from 'react'
import styles from './CreatePost.module.css'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from '../../context/AuthContext'

const CreatePost = () => {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")


  const handleSubmit = (e) => {
    e.preventDefault();
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
          <button className="btn">Cadastrar</button>
          {/* {!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>aguarde...</button>}
          {error && <p className='error'>{error}</p>} */}
        </form>
    </div>
  )
}

export default CreatePost