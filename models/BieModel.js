//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const BieModel = db.define('bienes', {
    ident: { type: DataTypes.INTEGER },
    id_bien: { type: DataTypes.INTEGER },
    desc_bien: { type: DataTypes.STRING }
},{
    timestamps: false
})

export default BieModel