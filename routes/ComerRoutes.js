import express, { Router } from "express";
import { createComer, deleteComer, getAllComer, getComer, updateComer, getComerxNF } from "../controllers/ComerController.js";

const comerRouter = express.Router()

comerRouter.get('/', getAllComer)
comerRouter.get('/:id', getComer)
comerRouter.post('/', createComer)
comerRouter.put('/:id', updateComer)
comerRouter.delete('/:id', deleteComer)
comerRouter.get('/:fantasy_name', getComerxNF)

export default comerRouter