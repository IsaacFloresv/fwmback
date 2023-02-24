import express, { Router } from "express";
import { createBie, deleteBie, getAllBie, getBie, updateBie } from "../controllers/BieController.js";

const bieRouter = express.Router()

bieRouter.get('/', getAllBie)
bieRouter.get('/:id', getBie)
bieRouter.post('/', createBie)
bieRouter.put('/:id', updateBie)
bieRouter.delete('/:id', deleteBie)

export default bieRouter