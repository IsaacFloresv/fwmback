import express, { Router } from "express";
import { createMat, deleteMat, getAllMat, getMat, updateMat } from "../controllers/MatController.js";

const matRouter = express.Router()

matRouter.get('/', getAllMat)
matRouter.get('/:id', getMat)
matRouter.post('/', createMat)
matRouter.put('/:id', updateMat)
matRouter.delete('/:id', deleteMat)

export default matRouter