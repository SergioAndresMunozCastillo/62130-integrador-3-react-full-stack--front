import React, { useContext, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import ProductoContext from '../contexts/ProductoContext'
import "../sass/Formulario.scss"
import DragAndDrop from './DragAndDrop'
import 'bootstrap'



const Formulario = ({ productoAEditar, setProductoAEditar }) => {
    const formInicial = {
        id: null, 
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        detalles: '',
        foto: '',
        envio: false,
      }
    const [form, setForm, handleChange] = useForm(formInicial)
    const [foto, setFoto] = useState('');
    const { crearProductoContext, actualizarProductoContext } = useContext(ProductoContext)
    const [srcImagen, setSrcImagen] = useState('');

    useEffect(() => {
      if(productoAEditar){
        setSrcImagen(productoAEditar.foto)
        setForm(productoAEditar)
      }else{
        setForm(formInicial)
      }
    }, [productoAEditar, setProductoAEditar])

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (form.id === null){
                const productoNuevo = {...form, ...foto}
                await crearProductoContext(productoNuevo)
            } else {
                const productoEditado = {...form, ...foto}
                await actualizarProductoContext(productoEditado)
            }
            handleReset()
        } catch (error) {
          console.error('Ocurrió un error en el handleSubmit', error)  
        }
    }

    const handleReset = () => {
      setForm(formInicial)
      setProductoAEditar(null)
      setSrcImagen('')
    }

    return (
    <>
        <h2>{ productoAEditar ? 'Editando' : 'Agregando' }</h2>
        <div className='form-container'>
          <div className='form-container__text-presentation'>
            <h3>{ productoAEditar ? 'Edita' : 'Añade' } { productoAEditar ? 'el' : 'un' } producto { productoAEditar ? 'seleccionado' : 'nuevo' }</h3>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='wrapper m-0 p-5'>
              <div className='wrapper__name-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Nombre" name="nombre" id="lbl-nombre" value={form.nombre} onChange={handleChange} />
              </div>
              <div className='wrapper__price-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Precio" name="precio" id="lbl-precio" value={form.precio} onChange={handleChange} />
              </div>
              <div className='wrapper__stock-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Stock" name="stock" id="lbl-stock" value={form.stock} onChange={handleChange} />
              </div>
              <div className='wrapper__brand-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Marca" name="marca" id="lbl-marca" value={form.marca} onChange={handleChange} />
              </div>
              <div className='wrapper__category-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Categoria" name="categoria" id="lbl-categoria" value={form.categoria} onChange={handleChange} />
              </div>
              <div className='wrapper__details-grid'>
                <br />
                <input type="text" className='form-control' placeholder="Detalles" name="detalles" id="lbl-detalles" value={form.detalles} onChange={handleChange} />
              </div>
              <div className='wrapper__dragdrop-grid'>
                <DragAndDrop 
                  setFoto={setFoto}
                  setSrcImagen={setSrcImagen}
                  srcImagen={srcImagen}
                />
              </div>
              <div className='wrapper__checkbox-grid form-check'>
                <input className='form-check-input' type="checkbox" name="envio" id="lbl-envio" checked={form.envio} onChange={handleChange} />
                <label className='text-center form-check-label' htmlFor="lbl-envio">Enviar</label>
              </div>
              <div className='wrapper__buttons-grid'>
                <button type="submit" className='save-button'>Guardar</button>
                <button type="reset" onClick={handleReset} className='reset-button'>Limpiar</button>
              </div>
            </div>
          </form>
        </div>
        
    </>
  )
}

export default Formulario