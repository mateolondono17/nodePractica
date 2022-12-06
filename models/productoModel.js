import { DataTypes } from "sequelize";
import baseDatos from "../database/baseDatos.js";

const Producto = baseDatos.define('productos', {
    nombre: {
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.STRING
    }
}) 

export default Producto;