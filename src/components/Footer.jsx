import '../sass/Footer.scss'
import React, { useContext } from 'react'
import DarkModeContext from '../contexts/DarkModeContext'

const Footer = () => {
  const {mode} = useContext(DarkModeContext)
  return (
    <>
        <footer class={`main-footer main-footer__${mode}-mode`}>
          <div class={`ribbon ribbon__${mode}-mode`}>
          </div>
          <div class="subs">
            <h2 class="subs__title">No te pierdas lo que está por venir. Suscribete para recibir notificaciones de nuevos productos.</h2>
            <form action="" class="subs__news-form">
              <input type="text" class="subs__news-form_text" placeholder="tu-email@correo.com"/>
              <button class="subs__news-form_submit" type="submit">Suscribirse</button>
            </form>
          </div>
          <div class="rights">
            <div class="rights__copyright">@ EMBERTECHNEWS 2023.</div>
            <a href="">Terminos de Servicio</a>
            <a href="">Política de Privacidad</a>
            <a href="">Sitio hecho por Sergio Castillo</a>
          </div>
        </footer>
    </>
  )
}

export default Footer