import React, { useContext } from 'react'
import '../sass/Contacto.scss'
import DarkModeContext from '../contexts/DarkModeContext'

const Contacto = () => {
  const {mode} = useContext(DarkModeContext)

  return (
    <main className={`contacto-container contacto-container__${mode}-mode`}>
        <section className="contact-header-section">
          <header>
            <h1>Reciba el servicio completo de EMBERTECHNEWS con tan solo unos clics</h1>
            <h2>Contactenos</h2>
          </header>
        </section>
      
        <section className="contact-section">
          <div className="contact-section__form-container">
            <form action="" className="contact-form">
              <input type="text" placeholder="Nombre"/>
              <input type="email" placeholder="Email"/>
              <textarea name="" cols="30" rows="10" placeholder="Comentarios"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="contact-section__info-container">
            <h3>Dirección: Calle irreal plana. Colonia Inmaterial</h3>
            <h3>Telefono: +52 614 5 78 96 12</h3>
            <h3>Email: contact@embertechnews.com</h3>
          </div>
        </section>
    </main>
    
  )
}

export default Contacto