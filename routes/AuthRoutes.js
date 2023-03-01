import express, { Router } from "express";
import { createAuth, deleteAuth, getAllAuth, getAuth, updateAuth } from "../controllers/AuthController.js";

const authRouter = express.Router()

authRouter.get('/', getAllAuth)
authRouter.get('/:id', getAuth)
authRouter.post('/', createAuth)
authRouter.put('/:id', updateAuth)
authRouter.delete('/:id', deleteAuth)

export default authRouter