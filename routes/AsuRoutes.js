import express, { Router } from "express";
import { createAsu, deleteAsu, getAllAsu, getAsu, updateAsu } from "../controllers/AsuController.js";

const asuRouter = express.Router()

asuRouter.get('/', getAllAsu)
asuRouter.get('/:id', getAsu)
asuRouter.post('/', createAsu)
asuRouter.put('/:id', updateAsu)
asuRouter.delete('/:id', deleteAsu)

export default asuRouter