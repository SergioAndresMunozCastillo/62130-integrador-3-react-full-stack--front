import React from 'react'
import '../sass/DragAndDrop.scss';
import Notify from 'simple-notify';
import { post } from '../utils/https';

const DragAndDrop = ({setFoto, setSrcImagen, srcImagen}) => {

    const arrayEventos = ['dragenter', 'dragleave', 'dragover', 'drop'];

    arrayEventos.forEach(eventName => {
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleChange = (e) => {
        const files = e.target.files
        handleFiles(files)
    }

    const handleDrop = (e) => {
        const dataTransf = e.dataTransfer
        const files = dataTransf.files
        console.log(files)
        handleFiles(files)
    }

    const handleEnter = () => {
        console.log('Una imagen ingreso a la zona de drop')
      }
    
    const handleOver = () => {
        console.log('Estoy sobre la zona de drop')
    }

    const previewFile = (file) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)

        reader.addEventListener('loadend', () => {
            setSrcImagen(reader.result)
        })
    }

    const uploadFile = async file => {
        const formData = new FormData()

        try {
            console.log("The facts")
            console.log(file)
            formData.append('foto', file)
            const imageUp = await post('https://integrador-full-stack-etapa-3.onrender.com/api/upload', formData);
            setFoto(imageUp)
        } catch (error) {
            console.log(error)
            new Notify({
                status: 'error',
                title: `Error al subir el archivo`,
                text: `${error}`,
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
        }
    }

    const handleFiles = async (files) => {
        try {
            const file = files[0]
            await uploadFile(file)
            previewFile(file)
        } catch (error) {
            new Notify({
                status: 'error',
                title: `Error al manejar el archivo`,
                text: '',
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
        }
    }

  return (
    <>
        <div className="drop-area" onDragEnter={handleEnter} onDragOver={handleOver} onDrop={handleDrop}>
            <p>Subir imagen a la tienda <b>file dialog</b> o con <b>drag and drop</b> dentro del area punteada.</p>
            <input type="file" id="lbl-foto" accept='image/*' onChange={handleChange}/>
            <label htmlFor="lbl-foto" className='drop-area-button'>
                File Dialog
            </label>
            <div className="drop-area-image">
                <img src={srcImagen} alt="" />
            </div>
        </div>
    </>
  )
}

export default DragAndDrop