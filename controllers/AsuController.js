import AsuModel from "../models/AsuModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllAsu = async (req, res) => {
    try {
        const asunto = await AsuModel.findAll()
        res.json(asunto) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getAsu = async (req, res) => {
    try {
        const asunto = await AsuModel.findAll({
            where:{id:req.params.id_materia}
        })
        res.json(asunto)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createAsu = async(req, res) => {
    console.log(req.body)
    try {
        await AsuModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateAsu = async(req, res) => {
    try {
        AsuModel.update(req.body, {
            where: {id: req.params.id_asunto}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteAsu = async(req, res) => {
    console.log(req.params.id)
    try {
        AsuModel.destroy({
            where: {id: req.params.id_asunto}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}