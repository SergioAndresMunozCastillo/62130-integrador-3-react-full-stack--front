import 'simple-notify/dist/simple-notify.min.css'
import Notify from 'simple-notify'
import { useContext } from 'react'
import '../sass/Card.scss'
import DarkModeContext from '../contexts/DarkModeContext'

const Card = ({ producto, agregarCarritoContext }) => {
  const {mode} = useContext(DarkModeContext)
  // console.log(producto)

  const handleClick = (e) => {
    //console.log(producto)
    agregarCarritoContext(producto)

    new Notify({
      status: 'success',
      title: `Producto ${producto.nombre} agregado`,
      text: producto.detalles,
      effect: 'fade',
      speed: 300,
      customClass: null,
      customIcon: null,
      showIcon: true,
      showCloseButton: true,
      autoclose: true,
      autotimeout: 1500,
      gap: 20,
      distance: 20,
      type: 1,
      position: 'right top'
    })

    e.preventDefault()
    
  }

  return (
    <a className={`card card__${mode}-mode`} href="#" onClick={handleClick}>
      <article className="card__article">
        <div className="card__image-container">
          <img className="card__image" src={producto.foto} alt={producto.nombre} />
        </div>
        <div className="card__content">
          <h2 className="card__heading">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
        </div>
      </article>
    </a>
  )
}

export default Card