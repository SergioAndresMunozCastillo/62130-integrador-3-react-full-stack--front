import React, { useContext, useState } from 'react'
import Formulario from '../components/Formulario'
import Tabla from '../components/Tabla'
import DarkModeContext from '../contexts/DarkModeContext'
import '../sass/Alta.scss'

const Alta = () => {
  const [productoAEditar, setProductoAEditar] = useState(null)
  const {mode} = useContext(DarkModeContext)

  return (
    <>
    <div className={`alta-container alta-container__${mode}-mode`}>
      <h1>Formulario de alta de productos</h1>
      <h2>Agregar producto</h2>
      <Formulario productoAEditar={productoAEditar} setProductoAEditar={setProductoAEditar}/>
      <hr />
      <Tabla setProductoAEditar={setProductoAEditar}/>
    </div>
      
    </>
  )
}

export default Alta