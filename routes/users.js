import express from 'express';
import { v4 as uuidv4 } from 'uuid';

uuidv4();

const router = express.Router();

const users = [
   
];

router.get('/', (req, res) => {
    res.send(users);
    console.log(users)
});

router.post('/', (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
});

export default router;
