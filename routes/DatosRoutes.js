import express, { Router } from "express";
import {sendMail} from "../ndmail/ndmail.js"

const datosRouter = express.Router()

datosRouter.post('/ndmail', sendMail)

export default datosRouter