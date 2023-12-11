import express from 'express';
import sequelize from '../Config/db.sequelize.js';
import Category from '../Models/category.model.js';
import Product from '../Models/product.model.js';

const router = express.Router();


//Synkronisere sequelize modeller
router.get('/sync', (req, res) => {
    sequelize.sync()
    res.json({
        message: 'Syncronized models are now available'
    })
});

export { router }