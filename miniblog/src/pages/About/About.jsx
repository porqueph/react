import React from 'react'
import styles from './About.module.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className={styles.about}>
        <h2>Sobre o Mini <span>Blog</span></h2>
        <p>este projeto é feito em React para front-end com Firebase como back-end.</p>
        <Link to="/posts/create" className='btn'>Criar post</Link>
    </div>
  )
}

export default About