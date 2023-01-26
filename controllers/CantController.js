import cantModel from "../models/CantModel.js";

//Metodos CRUD

//Mostrar todos los registros
export const getAllCants = async (req, res) => {
    try {
        const cants = await cantModel.findAll()
        res.json(cants) 
    } catch (error) {
        res.json({message: error.message})
    }
}

//Mostrar un registro
export const getCant = async (req, res) => {
    try {
        const cant = await cantModel.findAll({
            where:{id_provincia:req.params.id}
        })
        res.json(cant)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Crear un registro
export const createCant = async(req, res) => {
    console.log(req.body)
    try {
        await cantModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente"
        })
    } catch (error ) {
        res.json({message: error.message})
    }
}

//Actualizar
export const updateCant = async(req, res) => {
    try {
        cantModel.update(req.body, {
            where: {ident: req.params.id}
        })
    } catch (error) {
        res.json({
            "message":"Registro actualizado correctamente"
        })
    }
}


//Eliminar
export const deleteCant = async(req, res) => {
    console.log(req.params.id)
    try {
        cantModel.destroy({
            where: {ident: req.params.id}
        })
    } catch (error) {
        res.json({message: error.message})
    }
}