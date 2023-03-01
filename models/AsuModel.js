//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const AsuModel = db.define('asunto', {
    ident: { type: DataTypes.INTEGER, primaryKey: true},
    id_asunto: { type: DataTypes.INTEGER },
    id_materia: { type: DataTypes.INTEGER },
    desc_asunto: { type: DataTypes.STRING }
},{
    timestamps: false
})

export default AsuModel