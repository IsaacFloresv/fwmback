import express from "express"
import cors from 'cors'

import db from './database/db.js'

import provRouter from './routes/ProvRoutes.js'
import cantRouter from './routes/CantRoutes.js'
import distRouter from './routes/DistRoutes.js'
import persRouter from './routes/PersRoutes.js'
import comerRouter from './routes/ComerRoutes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/prov', provRouter)
app.use('/cant', cantRouter)
app.use('/dist', distRouter)
app.use('/pers', persRouter)
app.use('/comer', comerRouter)

/*app.get('/', (req, res)=>{
    res.send('HOLA MUNDO')
})*/

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log('Error de conexion a la DB =', error)
}

app.listen(4000, ()=>{
    console.log('Server UP run in https://localhost:4000/')
})