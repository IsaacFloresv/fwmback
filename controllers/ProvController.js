import provModel from "../models/ProvModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllProvs = async (req, res) => {
    try {
        const provs = await provModel.findAll()
        res.json(provs) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getProv = async (req, res) => {
    try {
        const prov = await provModel.findAll({
            where:{id:req.params.id}
        })
        res.json(prov)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createProv = async(req, res) => {
    console.log(req.body)
    try {
        await provModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateProv = async(req, res) => {
    try {
        provModel.update(req.body, {
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteProv = async(req, res) => {
    console.log(req.params.id)
    try {
        provModel.destroy({
            where: {id: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}