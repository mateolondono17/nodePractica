import express from 'express';
import { crearProducto } from '../controllers/controlador.js';

const productoRouter = express.Router();

productoRouter.post('/', crearProducto)

export default productoRouter;