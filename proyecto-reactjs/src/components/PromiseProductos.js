import { productos } from './productos.js'

export const PromiseProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        let condition = true;
        const productosFiltrados = productos.filter(
            (producto) => producto.category === categoryId
        );
        if (condition) {
            setTimeout(() => {
                categoryId ? resolve(productosFiltrados) : resolve(productos);
            }, 250);
        } else {
            reject(console.log("Error"));
        }
    });
};