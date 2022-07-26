const products = require('../database/products.js');

const mainController = {

    index (req, res){
        res.render('index', {
        products,
        });
    },

    productDetail(req, res){

        const id = Number(req.params.id)

        const product = products.find(product => product.id === id)

        res.render ('products/productDetail', {
            product
        })
    }, 

    productEdit (req, res){

        const id = Number(req.params.id)

        const product = products.find(product => product.id === id)

        res.render ('products/productEdit', {
            product
        })
        
    }
}

module.exports = mainController;