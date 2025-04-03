const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

class Producto {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }

    toString() {
        return `Codigo: ${this.codigo}, Nombre: ${this.nombre}`;
    }
}

class Inventario {
    constructor() {
        this.inventario = [];
    }

    agregar(producto) {
        if (this.buscar(producto.codigo) != null) {
            return null;
        } else {
            this.inventario.push(producto);
            return producto;
        }
    }
    listar() {
        return this.inventario;
    }
    buscar(codigo) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (codigo == this.inventario[i].codigo) {
                return this.inventario[i];
            }
        }
        return null;
    }
    eliminar(codigo) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (codigo == this.inventario[i].codigo) {
                return this.inventario.splice(i, 1)[0];
            }
        }
        return null;
    }
}
const inventario = new Inventario();

// Ruta para agregar un producto
app.post('/productos', (req, res) => {
    let codigo = req.body.codigo;
    let nombre = req.body.nombre; // otra opcion const { codigo, nombre } = req.body

    let producto = new Producto(codigo, nombre);
    if (inventario.agregar(producto) == null) {
        res.json({msg: -1});
    } else {
        inventario.agregar(producto);
        res.json(producto);
    }
});

// Ruta para listar todos los productos
app.get('/productos', (req, res) => {
    res.json(inventario.listar());
});

// Ruta para buscar un producto por código
app.get('/productos/:codigo', (req, res) => {
    let producto = inventario.buscar(req.params.codigo);
    if (producto == null) {
        res.json({msg: -1});
    } else {
        res.json(producto);
    }
});

// Ruta para eliminar un producto por código
app.delete('/productos/:codigo', (req, res) => {
    let eliminado = inventario.eliminar(req.params.codigo);
    if (eliminado == null) {
        res.json({msg: -1});
    } else {
        res.json(eliminado);
    }
});

app.listen(3000, () => console.log("Servidor en el puerto 3000"));