import React, { useContext } from 'react'
import DarkModeContext from '../contexts/DarkModeContext'
import '../sass/Nosotros.scss'

const Nosotros = () => {
  const {mode} = useContext(DarkModeContext)


  return (
    <main className={`nosotros-container nosotros-container__${mode}-mode`}>
    <section className="about-header-section">
      <header>
        <h1>¿Quienes somos?</h1>
      </header>
    </section>

    <section className="about-section">
      <div className="about-section__info-container">
        <p>Somos una empresa dedicada a la venta de utilería tecnológica: sean electrodomésticos, gadgets de bolsillo, equipo y piezas de cómputo, o periféricos. Nuestro giro se ha mantenido en la industria tecnológica desde los remotos tiempos de 1999.
            Con más de veinte años en la industria, contamos con personal altamente capacitado y comprometido a la mejora continua, para rendir los mayores frutos posibles en la ejerción de sus puestos. Desde recursos humanos, girando al lado al departamento de 
            TI, mirando al lado con cobranza y fianzas hasta limpieza; nuestro personal es del mayor calibre, superando los estándares propuestos desde los inicios del mercado.
        </p>
      </div>
      <div className="about-section__pic-container">
        <img src="img/acerca.png" alt="Nosotros.jpg" />
      </div>
      <p>Desde dispositivos inteligentes hasta gadgets de vanguardia, nuestra pasión por la electrónica se traduce en una cuidada selección de productos que no solo te sorprenderán, sino que también mejorarán tu vida diaria. Nos enorgullecemos de ofrecer no solo
         productos excepcionales, sino también un servicio al cliente insuperable. Nuestro equipo está dedicado a brindarte orientación experta y asistencia personalizada para garantizar que encuentres exactamente lo que necesitas. Únete a nosotros en nuestro viaje para explorar el futuro digital.</p>
    </section>
  </main>
  )
}

export default Nosotros