const othersController = {

    register: (req,res) => res.render('users/register'),

    login: (req,res) => res.render('users/login'),

    carritoCompras: (req,res) => res.render('products/carritoCompras')

};

module.exports = othersController;