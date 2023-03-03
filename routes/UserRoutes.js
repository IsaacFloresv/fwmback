import express, { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser, getLoginUser } from "../controllers/UserController.js";

const userRouter = express.Router()

userRouter.get('/', getAllUsers)
userRouter.get('/:id', getUser)
userRouter.post('/', createUser)
userRouter.put('/', getLoginUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter