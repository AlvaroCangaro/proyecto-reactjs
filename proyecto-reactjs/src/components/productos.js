const productos = [
    {
        id: 1,
        nombre: 'Iphone 13 Pro Max',
        precio: 250000,
        imagen: 'http://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png',
        descripcion: 'El iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica.'
    },
    {
        id: 2,
        nombre: 'Airpods Pro',
        precio: 30000,
        imagen: 'https://i0.wp.com/hoyenapple.com/wp-content/uploads/2019/10/AirPods-Pro-Frontal.png?fit=910%2C970&ssl=1'
    }
]

export const traerProducto = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos);
        }, 1000)
    })
}

export const productoDetail = {
    "id": 1,
    "nombre": 'Iphone 13 Pro Max',
    "resumen": 'Iphone',
    "descripcion": 'El iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica.',
    "precio": '$250000',
    "imagen": 'http://assets.stickpng.com/images/61d2f85b92b57c0004c64745.png'
}

export default productos;