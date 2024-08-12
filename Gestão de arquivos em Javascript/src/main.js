const ProductManager = require("./ProductManager");

const productManager = new ProductManager("./products.json");

//Adicionando um Produto
productManager.addProduct({
     title: "TÊNIS RUNFALCON 3",
     description: "Para pés mais finos, recomendamos que compre um tamanho menor do que o de costume.",
     price: 399.99,
     thumbnail: "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f9d52817f7524d3fb442af3b01717dfa_9366/Tenis_Runfalcon_3_Preto_HQ3790_01_standard.jpg",
     code: "TEN_RUNFALCON",
     stock: 35,
});
productManager.addProduct({
     title: "TÊNIS RAPIDMOVE ADV",
     description: "O Torsion System oferece estabilidade dinâmica para movimentos multidirecionais.",
     price: 799.99,
     thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d99e622de5314646825bf35481768a95_9366/Tenis_Rapidmove_ADV_Ouro_HP3269_01_standard.jpg",
     code: "TEN_RAPIDMOVE",
     stock: 68,
});

//Consultando um Produto pelo ID
// const product = productManager.getProductById(1);
// console.log(product);


//Modificando um Produto
// productManager.updateProduct(1, {
//      price: 150,
//      stock: 45
//    });

//Excluindo um Produto
// productManager.deleteProduct(1);

//Consultando Todos os Produtos
const products = productManager.getAllProducts();
console.log(products);