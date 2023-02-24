//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const MatModel = db.define('materias', {
    ident: { type: DataTypes.INTEGER },
    id_materia: { type: DataTypes.INTEGER },
    desc_materia: { type: DataTypes.STRING}
},{
    timestamps: false
})

export default MatModel