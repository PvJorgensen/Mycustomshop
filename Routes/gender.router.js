import express from 'express';
import  GenderController  from '../Controllers/gender.controller.js';
const controller = new GenderController();
const router = express.Router(); 


//Get list of all records
router.get('/genders', async (req, res) => {
    const result = await controller.listall()
    res.json(result)
});

//Get a single category by id (getone)
router.get('/genders/:id([0-9*])', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//Create a new record
router.post('/genders', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.send({
            message: 'Gender created successfully',
            newId: result.id
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Update record
router.put('/genders', async (req, res) => {
    try {
        const result = await controller.update(req.body);
        res.send({
            message: 'Gender updated successfully',
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Delete a record by id
router.delete('/genders/:id([0-9*])', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'Gender deleted successfully'
        })
    } catch (error) {
        res.send(error.message)
    }
});


export { router as GenderRouter }