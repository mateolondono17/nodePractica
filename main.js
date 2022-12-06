import express from 'express';
import baseDatos from './database/baseDatos.js';

const app= express();

try {
    await baseDatos.authenticate()
    console.log('Conexion Exitosa a la Base de Datos')
    
} catch (error) {
    console.log('Conexion no exitosa')
    
}


app.listen(3100, ()=> {
    console.log('Servidor corriendo en el puerto 3100');
    console.log('http://localhost:3100')
});