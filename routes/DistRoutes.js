import express, { Router } from "express";
import { createDist, deleteDist, getAllDists, getDist, updateDist } from "../controllers/DistController.js";

const distRoutes = express.Router()

distRoutes.get('/', getAllDists)
distRoutes.get('/:id', getDist)
distRoutes.post('/', createDist)
distRoutes.put('/:id', updateDist)
distRoutes.delete('/:id', deleteDist)

export default distRoutes