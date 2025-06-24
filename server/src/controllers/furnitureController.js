import { Router } from 'express'

const furnitureController = Router();

furnitureController.post('/', async (req, res) => {
    const furnitureData = req.body;

    res.end();
})

export default furnitureController