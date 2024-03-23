class ProductManager {
    static idProd = 0

    constructor() {
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return `Todos los campos son requeridos`
        }

        const exitingProd = this.products.some (product => product.code == code)
        if (exitingProd){
            return `Producto con codigo ${code} existente`
        }

        const newProduct = {
            id : ProductManager.idProd++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(newProduct);
        return `Producto agregado`
    }

    getProducts(){
        return this.products;
    }

    getProductById(id){
        let prodFound = this.products.find(product => product.id == id);

        if(!prodFound){
            return `Producto con id ${id} inexistente`
        } else {
            return `Producto encontrado`
        }
    }
}

module.exports = ProductManager