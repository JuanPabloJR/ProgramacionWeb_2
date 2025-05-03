const router = require('express').Router();
const productoController = require('../controllers/productoController');

// Ruta para agregar un producto
router.post('/', (req, res) => {
    productoController.agregar(req, res);
});

// Ruta para listar todos los productos
router.get('/', (req, res) => {
    productoController.listar(req,res);
});

// Ruta para buscar un producto por código
router.get('/:codigo', (req, res) => {
    productoController.buscar(req, res);
});

// Ruta para eliminar un producto por código
router.delete('/:codigo', (req, res) => {
    productoController.eliminar(req, res);
});

module.exports = router;