import { Sequelize } from "sequelize";

const baseDatos = new Sequelize('crudfullstack', 'root','',{
    host:'localhost',
    dialect:'mysql'
})

export default baseDatos;