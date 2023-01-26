import distModel from "../models/DistModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllDists = async (req, res) => {
    try {
        const cants = await distModel.findAll()
        res.json(cants) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getDist = async (req, res) => {
    try {
        const cant = await distModel.findAll({
            where:{id_canton:req.params.id}
        })
        res.json(cant)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createDist = async(req, res) => {
    console.log(req.body)
    try {
        await distModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateDist = async(req, res) => {
    try {
        distModel.update(req.body, {
            where: {id_canton: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteDist = async(req, res) => {
    console.log(req.params.id)
    try {
        distModel.destroy({
            where: {id_canton: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}