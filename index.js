import express from 'express';
import { CategoryRouter } from './Routes/category.router.js';
import { ProductRouter } from './Routes/product.router.js';
import { BrandRouter } from './Routes/brand.router.js';
import { UserRouter } from './Routes/user.router.js';
import { GenderRouter } from './Routes/gender.router.js';
import { router as SyncRouter } from './Routes/sync.router.js';
import { ReviewRouter } from './Routes/review.router.js';
import Gender from './Models/gender.model.js';

const port = process.env.PORT || 4000
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(CategoryRouter, ProductRouter, BrandRouter, UserRouter, GenderRouter, ReviewRouter, SyncRouter)

app.listen(port, () => console.log(`Serveren køre på http://localhost:${port}`));