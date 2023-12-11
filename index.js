import express from 'express';
import { CategoryRouter } from './Routes/category.router.js';
import { ProductRouter } from './Routes/product.router.js';
import { router as SyncRouter } from './Routes/sync.router.js';

const port = process.env.PORT || 4000
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(CategoryRouter, ProductRouter, SyncRouter)

app.listen(port, () => console.log(`Serveren køre på http://localhost:${port}`));