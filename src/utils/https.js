export const get = async (url) => {
    try {
        const res = await fetch(url)
        console.log(res)  
        const data = res.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export const post = async (url, dato) => {
    let config = {}
    try {
        if( dato instanceof FormData){
            config = {
                method: 'POST',
                body: dato
            }
        }else{
            config = {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(dato)
            }
        }
        const res = await fetch(url, config)
        const productoGuardado = res.json();
        return productoGuardado;
    } catch (error) {
        console.log("There was an error")
        console.log(error)
    }
}

export const update = async (url, data, id) => {
    try {
        const config = {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(data)
        }

        const fullUrl = url + id
        console.log(fullUrl)
        const res = await fetch(fullUrl, config);
        console.log("Resultado update")
        console.log(res.json())
        if( !res.ok){
            throw new Error(`Algo ocurrió, ${respuesta.status} ${respuesta.statusText}`)
        }
        const datoActualizado = await res.json();

        return datoActualizado
    } catch (error) {
        console.log(error)
    }
}

export const del = async (url, id) => {
    try {
        const config = {
            method: 'DELETE'
        }

        const fullUrl = url + id
        console.log("Peaceful deletion")
        console.log(fullUrl)
        const res = await fetch(fullUrl, config)
    } catch (error) {
        console.log(error)
    }
}