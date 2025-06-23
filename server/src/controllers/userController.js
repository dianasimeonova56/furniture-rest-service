import { Router } from "express";

const userController = Router();

app.post('/register', (req, res) => {
    console.log(req.body);

    res.end();
})

export default userController;