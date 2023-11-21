import { useContext } from 'react'
import '../sass/TablaFila.scss'
import ProductoContext from '../contexts/ProductoContext'
import Swal from 'sweetalert2'

const TablaFila = ( { producto, setProductoAEditar } ) => {
  const { eliminarProductoContext } = useContext(ProductoContext)

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Verificación',
      text: `¿Estás seguro de eliminar el producto con el 'id': ${id}?`,
      icon: 'question',
      confirmButtonText: 'Sí',
      showCancelButton: true,
      cancelButtonText: 'No'
    }).then((res) => {
      console.log(res)
      if(res.isConfirmed){
        eliminarProductoContext(id)
        Swal.fire({
          title: 'Completado',
          text: `Producto eliminado con éxito`,
          icon: 'info',
          confirmButtonText: 'Okay',
        }).then((res) => {})
      }
    })

  }

  const handleUpdate = (producto) => {
    setProductoAEditar(producto)
  }

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? 'SI' : 'NO'}</td>
      <td>
        <button onClick={() => handleUpdate(producto)}>Editar</button>
        <button onClick={() => handleDelete(producto.id)}>Borrar</button>
      </td>
    </tr>
  )
}

export default TablaFila