//importa la conexion a la db
import db from "../database/db.js";



export const getTopElem = async (req, res) => {
    try {
        if(req.body.opc === 1){
        const dato = await db.query(
        `SELECT `+req.body.elemt+` AS elemt, COUNT(`+req.body.elemt+`) AS total FROM asesopreses
        GROUP BY `+req.body.elemt+` ORDER BY `+req.body.elemt+` DESC 
        LIMIT `+req.body.top+``)
        res.json(dato)
    }else{res.send("no hay resultados")}
    } catch (error) {
        res.json({message: error.message})
    }
}