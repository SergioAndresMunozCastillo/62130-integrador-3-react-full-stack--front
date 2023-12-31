import { useLocalStorage } from "../hooks/useLocalStorage";
import { createContext } from "react";
import { post } from "../utils/https";
import Notify from "simple-notify";

/* CREANDO CONTEXTO */
/* 1er -> Creación del contexto */
const CarritoContext = createContext()
/* 2da -> El armado del Provider */

/* const url = 'https://652c7cded0d1df5273ef714c.mockapi.io/carrito/' */
/* const url = 'http://localhost:8080/api/carritos/' */
const url = 'https://integrador-full-stack-etapa-3.onrender.com/api/carritos/'

const CarritoProvider = ( { children} ) => {
    const [ agregarAlCarrito, eliminarDelCarrito, limpiarCarrito, carrito ] = useLocalStorage('carrito', [])

    const notification = (status, title, speed = 300, text = '') => {
        new Notify({
            status: status,
            title: title,
            text: text,
            effect: 'fade',
            speed: speed,
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
    }

    function elProductoEstaEnElCarrito(producto) {
        return carrito.filter(prod => prod.id === producto.id).length
    }

    function obtenerProductoDeCarrito(producto) {
        return carrito.find(prod => prod.id === producto.id)
    }

    const agregarCarritoContext = (producto) => {

        if(!elProductoEstaEnElCarrito(producto)) {
            producto.cantidad = 1
            agregarAlCarrito(producto)
        } else {
           const productoDeCarrito = obtenerProductoDeCarrito(producto)
           console.log(productoDeCarrito)
           //eliminarDelCarrito(productoDeCarrito.id)
           productoDeCarrito.cantidad++
           window.localStorage.setItem('carrito', JSON.stringify(carrito))
        }
    
    }

    const eliminarCarritoContext = (id) => {
        eliminarDelCarrito(id)
    }

    const guardarCarritoContext = async() => {

        try {
            /* Petición asincronica a nuestro banckend */
            const resultado = await post(url, carrito)
            console.log(resultado)
            /* limpieza del localStorage y limpiamos también el estado */
            limpiarCarrito()
            notification('success', 'La compra se ejerció con éxito!!', 500, 'Muchas gracias por escogernos!!!')
        } catch (error) {
            console.error('Ocurrió un error en guardarCarritoContext()', error)
            notification('error', 'Ocurrió un error en guardarCarritoContext()', 1000, error)
        }
          
    }

    const data = {carrito, agregarCarritoContext, eliminarCarritoContext, guardarCarritoContext}

    return <CarritoContext.Provider value={data}>{children}</CarritoContext.Provider>
}

/* 3er -> Exportaciones */
export { CarritoProvider }

export default CarritoContext