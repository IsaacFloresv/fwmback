import express, { Router } from "express";
import { createCant, deleteCant, getAllCants, getCant, updateCant } from "../controllers/CantController.js";

const cantRouter = express.Router()

cantRouter.get('/', getAllCants)
cantRouter.get('/:id', getCant)
cantRouter.post('/', createCant)
cantRouter.put('/:id', updateCant)
cantRouter.delete('/:id', deleteCant)

export default cantRouter