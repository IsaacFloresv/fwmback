import express from 'express'
import {getAllAsePes, getAsePes, createAsePes, updateAsePes, deleteAsePes, getMayAsePes} from '../controllers/AsePressController.js'

const asePressRouter = express.Router()

asePressRouter.get('/', getAllAsePes)
asePressRouter.put('/', getMayAsePes)
asePressRouter.get('/:id', getAsePes)
asePressRouter.post('/', createAsePes)
asePressRouter.put('/:id', updateAsePes)

export default asePressRouter