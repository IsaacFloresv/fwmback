import express from 'express'
import {getAllAsePes, getAsePes, createAsePes, updateAsePes, deleteAsePes} from '../controllers/AsePressController.js'

const AsePressRouter = express.Router()

AsePressRouter.get('/', getAllAsePes)
AsePressRouter.get('/:id', getAsePes)
AsePressRouter.post('/', createAsePes)
AsePressRouter.put('/:id', updateAsePes)

export default AsePressRouter