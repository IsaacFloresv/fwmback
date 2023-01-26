//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const cantModel = db.define('cantones', {
    ident: {type: DataTypes.INTEGER, primaryKey: true},
    id_canton: { type: DataTypes.INTEGER },
    name_canton: { type: DataTypes.STRING },
    id_provincia: { type: DataTypes.INTEGER}
},{
    timestamps: false
})

export default cantModel