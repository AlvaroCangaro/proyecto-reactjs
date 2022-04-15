import productos from './productos'

let isOk = true;


const customFetch = (time, task, tipo, id) => {
    return new Promise((resolve, reject) => {
        const prodFiltrados = tipo === 'C' ? productos.filter((producto) => producto.category === id) : productos.find((producto) => producto.id === Number(id));
        setTimeout(() => {
            if (isOk) {
                id ? resolve(prodFiltrados) : resolve(task);
            } else {
                reject('Error');
            }

        }, time)
    })
}


export default customFetch;