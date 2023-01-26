//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const provModel = db.define('provincias', {
    id_provincia: { type: DataTypes.INTEGER },
    name_provincia: { type: DataTypes.STRING },
    id_contry: { type: DataTypes.INTEGER}
},{
    timestamps: false
})

export default provModel