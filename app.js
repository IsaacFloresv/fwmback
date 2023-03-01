import express from "express"
import cors from 'cors'
import db from './database/db.js'
import { APP_PORT } from "./d_config.js"

import matRouter from './routes/MatRoutes.js'
import asuRouter from './routes/AsuRoutes.js'
import bieRouter from './routes/BieRoutes.js'
import provRouter from './routes/ProvRoutes.js'
import cantRouter from './routes/CantRoutes.js'
import distRouter from './routes/DistRoutes.js'
import persRouter from './routes/PersRoutes.js'
import comerRouter from './routes/ComerRoutes.js'
import authRouter from './routes/AuthRoutes.js'
import asePressRouter from './routes/AsePressRoutes.js'


const app = express()
const PORT = APP_PORT

app.use(cors())
app.use(express.json())
app.use('/mat', matRouter)
app.use('/asu', asuRouter)
app.use('/bie', bieRouter)
app.use('/prov', provRouter)
app.use('/cant', cantRouter)
app.use('/dist', distRouter)
app.use('/pers', persRouter)
app.use('/comer', comerRouter)
app.use('/auth', authRouter)
app.use('/asepress', asePressRouter)
app.use('/amp', asePressRouter)


/*app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})*/

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log('Error de conexion a la DB =', error)
}

app.listen(PORT, ()=>{
    console.log(`Server UP run in http://127.0.0.1:${PORT}/`)
})