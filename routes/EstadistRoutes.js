import express, { Router } from "express";
import { getTopElem, getElemOrderDescForFech } from "../controllers/EstadistidController.js";

const estadistRouter = express.Router()

estadistRouter.put('/', getTopElem)
estadistRouter.get('/', getElemOrderDescForFech)
//estadistRouter.get('/:id', getProv)
//estadistRouter.post('/', createProv)
//estadistRouter.put('/:id', updateProv)
//estadistRouter.delete('/:id', deleteProv)

export default estadistRouter