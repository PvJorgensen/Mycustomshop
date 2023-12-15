import express from 'express';
import  UserController  from '../Controllers/user.controller.js';
const controller = new UserController();
const router = express.Router(); 


//Get list of all records
router.get('/users', async (req, res) => {
    const result = await controller.listall()
    res.json(result)
});

//Get a single category by id (getone)
router.get('/users/:id([0-9*])', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//Create a new record
router.post('/users', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.send({
            message: 'User created successfully',
            newId: result.id
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Update record
router.put('/users', async (req, res) => {
    try {
        const result = await controller.update(req.body);
        res.send({
            message: 'User updated successfully',
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Delete a record by id
router.delete('/users/:id([0-9*])', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'User deleted successfully'
        })
    } catch (error) {
        res.send(error.message)
    }
});


export { router as UserRouter }