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

module.exports = new Inventario();