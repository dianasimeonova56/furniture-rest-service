import { Router } from 'express'
import furnitureService from '../services/furnitureService.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    console.log('here');
    
    const furniture = await furnitureService.getAll();
    console.log(furniture);
    

    res.json(furniture)
})

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    try {
        const result = await furnitureService.create(furnitureData);
        
        

        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
})

furnitureController.get('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    const furniture = await furnitureService.getOne(furnitureId)

    res.json(furniture);
})

export default furnitureController