import express from 'express';
import  CategoryController  from '../Controllers/category.controller.js';
const controller = new CategoryController();
const router = express.Router(); 


//Get list of all records
router.get('/categories', async (req, res) => {
    const result = await controller.listall()
    res.json(result)
});

//Get a single category by id (getone)
router.get('/categories/:id([0-9*])', async (req, res) => {
    const result = await controller.getone(req.params.id)
    res.json(result);
});

//Create a new record
router.post('/categories', async (req, res) => {
    try {
        const result = await controller.create(req.body);
        res.send({
            message: 'Category created successfully',
            newId: result.id
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Update record
router.put('/categories', async (req, res) => {
    try {
        const result = await controller.update(req.body);
        res.send({
            message: 'Category updated successfully',
        })
    } catch (error) {
        res.send(error.message)
    }
});

//Delete a record by id
router.delete('/categories/:id([0-9*])', async (req, res) => {
    try {
        await controller.delete(req.params.id);
        res.send({
            message: 'Category deleted successfully'
        })
    } catch (error) {
        res.send(error.message)
    }
});


export { router as CategoryRouter}