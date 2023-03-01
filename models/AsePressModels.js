//importar la conexion a la db
import db from '../database/db.js'

//importar sequelize
import { DataTypes } from 'sequelize'

const AsePressModel = db.define('asesoprese',{
    id: {type: DataTypes.INTEGER, primaryKey: true },
    id_report: {type: DataTypes.INTEGER },
    fchareg: {type: DataTypes.STRING },
    id_agente: {type: DataTypes.STRING },
    fchacomplet: {type: DataTypes.STRING },
    status: {type: DataTypes.STRING },
    origen_r: {type: DataTypes.STRING },
    tel_origen: {type: DataTypes.STRING },
    usuario_s: {type: DataTypes.STRING },
    us_obser: {type: DataTypes.STRING },
    tdia: {type: DataTypes.STRING },
    ndia: {type: DataTypes.STRING },
    nomba: {type: DataTypes.STRING },
    apell1a: {type: DataTypes.STRING },
    apell2a: {type: DataTypes.STRING },
    email: {type: DataTypes.STRING },
    email2: {type: DataTypes.STRING },
    tel: {type: DataTypes.STRING },
    tel2: {type: DataTypes.STRING },
    provi: {type: DataTypes.STRING },
    canto: {type: DataTypes.STRING },
    distr: {type: DataTypes.STRING },
    materia: {type: DataTypes.STRING },
    asunto: {type: DataTypes.STRING },
    bien: {type: DataTypes.STRING },    
    razon_social: {type: DataTypes.STRING },
    nombre_fantasia: {type: DataTypes.STRING },
    tdic: {type: DataTypes.STRING },
    ndic: {type: DataTypes.STRING },
    fchahech: {type: DataTypes.STRING },
    fchagar: {type: DataTypes.STRING },
    desch: {type: DataTypes.STRING },
    respe: {type: DataTypes.STRING },
    id_audio: {type: DataTypes.STRING },
    id_correo: {type: DataTypes.STRING },
},{
    timestamps: false
})

export default AsePressModel