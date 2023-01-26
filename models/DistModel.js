//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const distModel = db.define('distritos', {
    ident: {type: DataTypes.INTEGER, primaryKey: true},
    id_distrito: { type: DataTypes.INTEGER },
    name_distrito: { type: DataTypes.STRING },
    id_canton: { type: DataTypes.INTEGER}
},{
    timestamps: false
})

export default distModel