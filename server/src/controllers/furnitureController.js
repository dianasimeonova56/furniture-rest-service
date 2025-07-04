import { Router } from 'express'
import furnitureService from '../services/furnitureService.js';

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
    const filter = new URLSearchParams(req.query.where?.replaceAll('"', ''));
    const furniture = await furnitureService.getAll(Object.fromEntries(filter?.entries() ?? []));
    
    

    res.json(furniture)
})

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    const ownerId = req.user.id;

    try {
        const result = await furnitureService.create(furnitureData, ownerId);

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

furnitureController.delete('/:furnitureId', async (req, res) => {
    const furnitureId = req.params.furnitureId;

    try {
        await furnitureService.delete(furnitureId);

        res.json({ok: true})
    } catch(err) {
        res.status(400).json(err);
    }
})

furnitureController.put('/:furnitureId', async (req, res) => {
     const furnitureId = req.params.furnitureId;
     const furnitureData = req.body;

     const result = await furnitureService.update(furnitureId, furnitureData);

     res.json(result);
})

export default furnitureController