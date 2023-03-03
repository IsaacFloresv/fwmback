import userModel from "../models/UserModel.js";
import jwt from "jsonwebtoken"
import { TOKEN_KEY } from "../p_config.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.findAll()
        res.json(user) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getUser = async (req, res) => {
    try {
        const user = await userModel.findAll({
            where:{user_id:req.params.id}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Verifycacion del token
export const verifyToken = () => {
    const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]

        console.log(authHeader)
        if(token==null)
        return res.status(401).send('Token Requerido')
        jwt.verify(token, TOKEN_KEY, (err, user)=>{
            if(err) return res.status(403).send("Toven Invalido")
            console.log(user)
            req.user = user
            next()
        })
}

//Permitir login
export const getLoginUser = async (req, res) => {
    console.log('Tratando de ingresar', req.body)
    try {
        const user = await userModel.findAll({
            where:{user_id:req.body.user_id}
        })
        console.log(user[0].user_pass)
        if(user[0].user_pass === req.body.user_pass){
            const agente = user[0].user_nombre+' '+user[0].user_apelli1+' '+user[0].user_apelli2
            const respuesta = {"resp":"OK","Agente":agente}
            res.json(respuesta)
        }else{
            res.status(403).json('Datos incorrectos')
        }        
    } catch (error) {
        res.status(403).json({message: error.message})
    }
}

//Crear un registro
export const createUser = async(req, res) => {
    console.log(req.body)
    try {
        await userModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateUser = async(req, res) => {
    try {
        userModel.update(req.body, {
            where: {user_id: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteUser = async(req, res) => {
    console.log(req.params.id)
    try {
        UserModel.destroy({
            where: {user_id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}