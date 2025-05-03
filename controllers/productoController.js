const inventario = require('../bd/inventario');
const Producto = require('../models/producto');

module.exports = {
    listar: (req, res) => {
        res.json(inventario.listar());
    },
    buscar: (req, res) => {
        let producto = inventario.buscar(req.params.codigo);
        if (producto == null) {
            res.json({msg: -1});
        } else {
            res.json(producto);
        }
    },
    agregar: (req, res) => {
        let codigo = req.body.codigo;
        let nombre = req.body.nombre;

        let producto = new Producto(codigo, nombre);
        if (inventario.agregar(producto) == null) {
            res.json({msg: -1});
        } else {
            inventario.agregar(producto);
            res.json(producto);
        }
    },
    eliminar: (req, res) => {
        let producto = inventario.eliminar(req.params.codigo);
        if (producto == null) {
            res.json({msg: -1});
        } else {
            res.json(producto);
        }
    }
};