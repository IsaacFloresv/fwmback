//importa la conexion a la db
import db from "../database/db.js";



export const getTopElem = async (req, res) => {
    try {
        const query1 = `SELECT ` + req.body.elemt + ` AS elemt, COUNT(` + req.body.elemt + `) AS total FROM asesopreses
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= ` + req.body.fchaIni + ` 
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= ` + req.body.fchaFin + `)
        GROUP BY `+ req.body.elemt + ` ORDER BY ` + req.body.elemt + ` DESC LIMIT ` + req.body.top + ``
        const query2 = `SELECT * FROM asesopreses 
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= ` + req.body.fchaIni + ` 
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= ` + req.body.fchaFin + `)`
        console.log(req.body)
        if (req.body.opc = 1) {
            const dato = await db.query(query1)
            res.json(dato)
        } else if (req.body.opc = 2) {
            const dato = await db.query(query2)
            res.json(dato)
        } else { res.send("no hay resultados " + req.body) }
    } catch (error) {
        res.json({ message: error.message })
    }
}