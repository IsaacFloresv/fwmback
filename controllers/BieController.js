import BieModel from "../models/BieModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllBie = async (req, res) => {
    try {
        const bien = await BieModel.findAll()
        res.json(bien) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getBie = async (req, res) => {
    try {
        const bien = await BieModel.findAll({
            where:{ident:req.params.id}
        })
        res.json(bien)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createBie = async(req, res) => {
    console.log(req.body)
    try {
        await BieModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateBie = async(req, res) => {
    try {
        BieModel.update(req.body, {
            where: {ident: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteBie = async(req, res) => {
    console.log(req.params.id)
    try {
        BieModel.destroy({
            where: {ident: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}