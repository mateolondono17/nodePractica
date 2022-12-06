import express from 'express';
import baseDatos from './database/baseDatos.js';
import cors from 'cors';
import productoRouter from './routes/RouterProducto.js';

const app= express();

try {
    await baseDatos.authenticate()
    console.log('Conexion Exitosa a la Base de Datos')
    
} catch (error) {
    console.log('Conexion no exitosa')
    
}


app.use(cors())
app.use(express.json())
app.use('/productos', productoRouter)



app.listen(3100, ()=> {
    console.log('Servidor corriendo en el puerto 3100');
    console.log('http://localhost:3100')
});