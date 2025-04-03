const codigo = document.getElementById('codigo');
const nombre = document.getElementById("nombre");
const div = document.getElementById("output");
const agregar = document.getElementById("agregar");
const listar = document.getElementById("listar");
const buscar = document.getElementById("buscar");
const eliminar = document.getElementById("eliminar");

agregar.addEventListener("click", () => {
    if (!codigo.value.trim() || !nombre.value.trim()) {
        div.innerHTML = "Llene todos los campos";
    } else {
    fetch('http://localhost:3000/productos', {
        method: 'POST',
        body: JSON.stringify({
            codigo: codigo.value,
            nombre: nombre.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then(json => {
            if (json.msg != -1) {
                div.innerHTML = `Producto agregado:  Codigo: ${json.codigo}, Nombre: ${json.nombre}`
            } else {
                div.innerHTML = "Producto no agregado"
            }
        })};
    limpiar();
});
listar.addEventListener("click", () => {
    fetch('http://localhost:3000/productos')
        .then(response => response.json())
        .then(productos => {
            div.innerHTML = '';
            productos.forEach(producto => {
                const p = document.createElement('p');
                p.textContent = `Código: ${producto.codigo}, Nombre: ${producto.nombre}`;
                div.appendChild(p);
            });
        });
});
buscar.addEventListener("click", () => {
    fetch(`http://localhost:3000/productos/${codigo.value ? codigo.value : null}`)
        .then((response) => response.json())
        .then(json => {
            if (json.msg != -1) {
                div.innerHTML = `Codigo: ${json.codigo}, Nombre: ${json.nombre}`
            } else {
                div.innerHTML = "Producto no encontrado"
            }
        });
    limpiar();
});
eliminar.addEventListener("click", () => {
    fetch(`http://localhost:3000/productos/${codigo.value ? codigo.value : null}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => {
            if (json.msg != -1) {
                div.innerHTML = `Codigo: ${json.codigo}, Nombre: ${json.nombre}`
            } else {
                div.innerHTML = "Producto no eliminado"
            }
        })
    limpiar();
});

function limpiar() {
    codigo.value = "";
    nombre.value = "";
}