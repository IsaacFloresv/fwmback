import express, { Router } from "express";
import { putTopElem, getElemOrderDescForFech } from "../controllers/EstadistidController.js";

const estadistRouter = express.Router()

estadistRouter.put('/', putTopElem)
estadistRouter.get('/', getElemOrderDescForFech)
//estadistRouter.get('/:id', getProv)
//estadistRouter.post('/', createProv)
//estadistRouter.put('/:id', updateProv)
//estadistRouter.delete('/:id', deleteProv)

export default estadistRouter