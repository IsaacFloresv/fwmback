import db from "../database/db.js";
import { DataTypes } from "sequelize";

const RacsaBackupModel = db.define('racsabackup', {
    id: { type: DataTypes.INTEGER, primaryKey: true }, 
    id_report: {type: DataTypes.INTEGER },
    fchareg: {type: DataTypes.STRING },
    id_agente: {type: DataTypes.STRING },
    status: {type: DataTypes.STRING },
    origen_r: {type: DataTypes.STRING },
    tel_origen: {type: DataTypes.STRING },
    tdia: {type: DataTypes.STRING },
    ndia: {type: DataTypes.STRING },
    nomba: {type: DataTypes.STRING },
    apell1a: {type: DataTypes.STRING },
    apell2a: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING },
    tel: {type: DataTypes.STRING },
    tel2: {type: DataTypes.STRING },
    provi: {type: DataTypes.STRING },
    canto: {type: DataTypes.STRING },
    distr: {type: DataTypes.STRING },
    materia: {type: DataTypes.STRING },
    asunto: {type: DataTypes.STRING },
    bien: {type: DataTypes.STRING },    
    razon_social: {type: DataTypes.STRING },
    ndic: {type: DataTypes.STRING },
    desch: {type: DataTypes.STRING },
    respe: {type: DataTypes.STRING },
}, {
    freezeTableName: true, // Esto obliga a usar 'racsabackup' tal cual, sin plurales
    timestamps: false      // Casi siempre las tablas de respaldo no tienen updatedAt/createdAt
});

export default RacsaBackupModel;