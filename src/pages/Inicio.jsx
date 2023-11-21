import DarkModeContext from '../contexts/DarkModeContext'
import ProductoContext from '../contexts/ProductoContext'
import CarritoContext from '../contexts/CarritoContext'
import Card from '../components/Card'
import { useContext } from 'react'
import FontContext from '../contexts/FontContext'

const Inicio = () => {
    const {productos} = useContext(ProductoContext)
    const { carrito, agregarCarritoContext } = useContext(CarritoContext)
    const {mode} = useContext(DarkModeContext)
    const {font} = useContext(FontContext)

  return (
    <main>
        <section className={`section-cards section-cards__${mode}-mode`}>
            <header className={`section-cards__cards-header section-cards__cards-header__${mode}-mode`}>
                <h1>Columna de productos</h1>
            </header>
            <div className={`cards-container cards-container${mode}-mode`}>
            {
              productos && productos.map( (producto, idx) => (
                <Card key={idx} producto={producto} agregarCarritoContext={agregarCarritoContext}/>
              ))
            }
            </div>
        </section>
    </main>
  )
}

export default Inicio