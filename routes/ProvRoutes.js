import express, { Router } from "express";
import { createProv, deleteProv, getAllProvs, getProv, updateProv } from "../controllers/ProvController.js";

const provRouter = express.Router()

provRouter.get('/', getAllProvs)
provRouter.get('/:id', getProv)
provRouter.post('/', createProv)
provRouter.put('/:id', updateProv)
provRouter.delete('/:id', deleteProv)

export default provRouter