import AuthModel from "../models/AuthModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllAuth = async (req, res) => {
    try {
        const user = await AuthModel.findAll()
        res.json(user) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getAuth = async (req, res) => {
    try {
        const user = await AuthModel.findAll({
            where:{user_id:req.params.id}
        })
        res.json(user)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createAuth = async(req, res) => {
    try {
        await AuthModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateAuth = async(req, res) => {
    try {
        AuthModel.update(req.body, {
            where: {user_id: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteAuth = async(req, res) => {
    try {
        AuthModel.destroy({
            where: {user_id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}