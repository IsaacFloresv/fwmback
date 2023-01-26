//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const comerModel = db.define('registered_legal_people', {
    id_legal_people: { type: DataTypes.INTEGER },
    business_name: { type: DataTypes.STRING },
    fantasy_name: { type: DataTypes.STRING},
},{
    timestamps: false
})

export default comerModel