import express from 'express'
import {getAllAsePes, getAsePes, createAsePes, updateAsePes, deleteAsePes} from '../controllers/AsePressController.js'

const asePressRouter = express.Router()

asePressRouter.get('/', getAllAsePes)
asePressRouter.get('/:id', getAsePes)
asePressRouter.post('/', createAsePes)
asePressRouter.put('/:id', updateAsePes)

export default asePressRouter