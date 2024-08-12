const fs = require('fs');

class ProductManager {
  constructor(path) {
    this.path = path;
    this.products = this.loadProducts() || [];
  }

  // Carrega produtos do arquivo
  loadProducts() {
    try {
      const data = fs.readFileSync(this.path, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }

  // Salva produtos no arquivo
  saveProducts() {
    fs.writeFileSync(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
  }

  // Gera um novo ID para o produto
  generateId() {
    return this.products.length ? this.products[this.products.length - 1].id + 1 : 1;
  }

  // Adiciona um novo produto
  addProduct({ title, description, price, thumbnail, code, stock }) {
    const newProduct = {
      id: this.generateId(),
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    };

    this.products.push(newProduct);
    this.saveProducts();
    return newProduct;
  }

  // Consulta um produto por ID
  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  // Modifica um produto existente por ID
  updateProduct(id, updatedProduct) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
      this.saveProducts();
      return this.products[index];
    }
    return null;
  }

  // Exclui um produto por ID
  deleteProduct(id) {
    const index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      const deletedProduct = this.products.splice(index, 1);
      this.saveProducts();
      return deletedProduct[0];
    }
    return null;
  }

  // Consulta todos os produtos
  getAllProducts() {
    return this.products;
  }
}

module.exports = ProductManager;
