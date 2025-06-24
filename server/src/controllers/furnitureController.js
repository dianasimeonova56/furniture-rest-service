import { Router } from 'express'
import furnitureService from '../services/furnitureService.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const furniture = await furnitureService.getAll();

    res.json(furniture)
})

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    const result = await furnitureService.create(furnitureData)

    res.json(result);
})

export default furnitureController