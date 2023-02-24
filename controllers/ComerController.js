import comerModel from "../models/ComerModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllComer = async (req, res) => {
    try {
        const comer = await comerModel.findAll()
        res.json(comer) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getComer = async (req, res) => {
    try {
        const comer = await comerModel.findAll({
            where:{id_legal_people:req.params.id}
        })
        res.json(comer)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro por nombre de Fantasia
export const getComerxNF = async (req, res) => {
    try {
        const comer = await comerModel.findAll({
            where:{fantasy_name:req.params.fantasy_name}
        })
        res.json(comer)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createComer = async(req, res) => {
    console.log(req.body)
    try {
        await comerModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateComer = async(req, res) => {
    try {
        comerModel.update(req.body, {
            where: {id_legal_people: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteComer = async(req, res) => {
    console.log(req.params.id)
    try {
        comerModel.destroy({
            where: {id_legal_people: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}