//importa la conexion a la db
import db from "../database/db.js";
//Importar Sequilize
import { DataTypes } from "sequelize";


const userModel = db.define('usuarios', {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    user_id: { type: DataTypes.INTEGER },
    user_nombre: { type: DataTypes.STRING },
    user_apelli1: { type: DataTypes.STRING},
    user_apelli2: { type: DataTypes.STRING},
    user_email: { type: DataTypes.STRING},
    user_pass: { type: DataTypes.STRING},
    user_perfil: { type: DataTypes.STRING},
    user_rol: { type: DataTypes.STRING}
},{
    timestamps: false
})

export default userModel