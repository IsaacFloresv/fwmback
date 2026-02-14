import express from "express";
import { getAllRacsaBackup } from "../controllers/RacsaBackupController.js";

const racsaRouter = express.Router();

racsaRouter.get('/', getAllRacsaBackup);

export default racsaRouter;