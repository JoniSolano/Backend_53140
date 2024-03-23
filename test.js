const ProductManager = require("./productManager");

const producto = new ProductManager;

// Agrego productos al array
console.log(producto.addProduct('Monitor', '27 pulgadas', 500, 'Not image', 'sm27', 5));
console.log(producto.addProduct('Laptop', '27 pulgadas', 1000, 'Not image', 'sm27', 8)); // Este producto repite el code del anterior
console.log(producto.addProduct('Gabinete', 'M-ATX', 400, 'Not image', 'c', 6));

// Muestro los productos existentes el array
console.log(producto.getProducts());

// Llamo a un producto por el id
console.log(producto.getProductById(1));
console.log(producto.getProductById(5)); // Id inexistente