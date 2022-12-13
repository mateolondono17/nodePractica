import React, { useEffect, useState } from 'react';
import Header from '../helpers/Header';
import axios from 'axios';


const urlBackProductos = 'http://localhost:3000/productos'


const ListadoProductos = () =>{

    const [productos, setProductos] = useState([])
    
    useEffect(()=>{
        mostrarProductos()

    })
    


async function mostrarProductos(){
 const datos = await axios.get(urlBackProductos)
    setProductos(datos.data)
    console.log(datos.data)
}


    return(
        <section>
            <Header/>
            <table border={1}>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>nombre</td>
                        <td>descripcion</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        productos.forEach((producto)=>{
                            <tr key={producto.id}>
                                <td>{productos.nombre}</td>
                                <td>{productos.descripcion}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}


export default ListadoProductos