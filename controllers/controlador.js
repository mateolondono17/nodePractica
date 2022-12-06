import Producto from "../models/productoModel.js";

const mostrarProducto = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

};

const crearProducto = async (req, res) => {
    try {

        await Producto.create(req.body)
        res.json({
            message:'Usuario Creado Correctamente'
        })
        
    } catch (error) {
        res.json({
            message:'No se pudo registrar el usuario'+ error
        })
        
    }

};


const editarProducto = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

};


const eliminarProducto = async (req, res) => {
    try {
        
    } catch (error) {
        
    }

};

export {
    crearProducto
};