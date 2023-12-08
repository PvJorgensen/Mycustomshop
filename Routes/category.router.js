import express from 'express';
const router = express.Router();


//Tager alle kategorier
router.get('/categories', (req, res) => {
    res.send('Hent liste af kategorier')
});
//Tager en enkelt kategori
router.get('/categories/:id([0-9*])', (req, res) => {
    console.log(req.params.id);
    res.send('Hent kategori detaljer')
});
//Creater en kategori
router.post('/categories', (req, res) => {
    console.log(req.body);
    res.send('Opret kategori')
});
//Opdatere en kategori
router.put('/categories', (req, res) => {
    console.log(req.body);
    res.send('Opdatere kategori')
});
//Sletter en kategori
router.delete('/categories/:id([0-9*])', (req, res) => {
    console.log(req.params.id);
    res.send('Sletter kategori')
});


export { router }