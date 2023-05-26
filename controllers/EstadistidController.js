//importa la conexion a la db
import db from "../database/db.js";

// crea un nuevo objeto `Date`
var today = new Date();
 
// `getMonth()` devuelve el mes (de 0 a 11)
var month = today.getMonth() + 1;
var mes = month<=9 ? "0"+month : month;

// `getFullYear()` devuelve el año completo
var year = today.getFullYear();
var bisiesto = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? true : false;

// `getDate()` devuelve el día del mes (del 1 al 31)
var dayfin = month== 1 || 3 || 5 || 7||8||10||12 ? "31" : "30";
dayfin = month== 2 && bisiesto == true ? "29" : dayfin; 
dayfin = month== 2 && bisiesto == false ? "28" : dayfin;

// muestra la fecha de hoy en formato `MM/DD/YYYY`
var inimes = year+"-"+mes+"-01"
var finmes = year+"-"+mes+"-"+dayfin


export const putTopElem = async (req, res) => {
    try {
        const query1 = `SELECT ` + req.body.elemt + ` AS elemt, COUNT(` + req.body.elemt + `) AS total FROM asesopreses
        GROUP BY `+ req.body.elemt + ` ORDER BY total DESC LIMIT ` + req.body.top + ``
        const query2 = `SELECT ` + req.body.elemt + ` AS elemt, COUNT(` + req.body.elemt + `) AS total FROM asesopreses
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= "` + req.body.fchaIni + `"
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= "` + req.body.fchaFin + `")
        GROUP BY `+ req.body.elemt + ` ORDER BY total DESC LIMIT ` + req.body.top + ``
        const query3 = `SELECT * FROM asesopreses 
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= "` + req.body.fchaIni + `" 
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= "` + req.body.fchaFin + `")`
        console.log(req.body)
        if (req.body.opc === 1) {
            console.log("opc 1")
            const dato = await db.query(query1)
            res.json(dato)
        } else if (req.body.opc === 2) {
            console.log("opc 2")
            const dato = await db.query(query2)
            res.json(dato)
        }else if (req.body.opc === 3) {
            console.log("opc 3")
            const dato = await db.query(query3)
            res.json(dato)
        } else { res.send("no hay resultados " + req.body) }
    } catch (error) {
        res.json({ message: error.message })
    }
}

//listar elimentos de mas reciente al mas viejo y limitado por rango de fechas
export const getElemOrderDescForFech = async (req, res) => {
    try {
        console.log(mes)

        const query1 = `SELECT * FROM asesopreses ORDER BY fchareg DESC`
        const query2 = `SELECT * FROM asesopreses 
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= "` + req.body.fchaIni + `" 
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= "` + req.body.fchaFin + `")
        ORDER BY fchareg DESC`
        const query3 = `SELECT * FROM asesopreses 
        where (STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') >= "` + inimes + `" 
        AND STR_TO_DATE(SUBSTRING_INDEX(fchareg, ' ', 1),'%e/%m/%Y') <= "` + finmes + `")
        ORDER BY fchareg DESC`
        console.log(req.body)
        if (req.body.opc === 1) {
            console.log("opc 1")
            const dato = await db.query(query1)
            res.json(dato)
        } else if (req.body.opc === 2) {
            console.log("opc 2")
            const dato = await db.query(query2)
            res.json(dato)
        }else if (req.body.opc === 3) {
            console.log("opc 3")
            const dato = await db.query(query3)
            res.json(dato)
        } else { res.send("no hay resultados " + req.body) }
    } catch (error) {
        res.json({ message: error.message })
    }
  }