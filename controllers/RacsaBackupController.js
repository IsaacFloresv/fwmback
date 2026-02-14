import RacsaBackupModel from "../models/RacsaBackupModel.js";

export const getAllRacsaBackup = async (req, res) => {
    try {
        const registros = await RacsaBackupModel.findAll();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};