import express from 'express';
const router = express.Router();
import DogCrtl from '../controllers/dogControllers.mjs';

//Create
router.post('/', DogCrtl.CreateDog);

//Read
router.get('/', DogCrtl.ReadDog);

//Update
router.put('/:id', DogCrtl.UpdateDog);

//Delete
router.delete('/:id', DogCrtl.DeleteDog);

export default router;
