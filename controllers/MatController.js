import MatModel from "../models/MatModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllMat = async (req, res) => {
    try {
        const materia = await MatModel.findAll()
        res.json(materia) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getMat = async (req, res) => {
    try {
        const materia = await MatModel.findAll({
            where:{ident:req.params.id_materia}
        })
        res.json(materia)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createMat = async(req, res) => {
    console.log(req.body)
    try {
        await MatModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateMat = async(req, res) => {
    try {
        MatModel.update(req.body, {
            where: {ident: req.params.id_materia}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteMat = async(req, res) => {
    console.log(req.params.id)
    try {
        MatModel.destroy({
            where: {ident: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}