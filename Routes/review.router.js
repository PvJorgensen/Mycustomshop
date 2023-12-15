import express from 'express';
import  ReviewController  from '../Controllers/review.controller.js';
const controller = new ReviewController();
const router = express.Router(); 


//Get list of all records
router.get('/reviews', async (req, res) => {
    const result = await controller.listall()
    res.json(result)
});

//Get a single category by id (getone)
router.get('/reviews/:id([0-9*])', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//Create a new record
router.post('/reviews', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.send({
            message: 'Review created successfully',
            newId: result.id
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Update record
router.put('/reviews', async (req, res) => {
    try {
        const result = await controller.update(req.body);
        res.send({
            message: 'Review updated successfully',
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Delete a record by id
router.delete('/reviews/:id([0-9*])', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'Review deleted successfully'
        })
    } catch (error) {
        res.send(error.message)
    }
});


export { router as ReviewRouter }