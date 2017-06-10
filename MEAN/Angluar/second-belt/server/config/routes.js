var controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/products', controller.getProducts);
    // app.get('/api/questions/:id', controller.getSingleQuestion);
    app.post('/api/newbid/:name', controller.newBid);
    app.get('/api/current', controller.current);
    app.get('/api/results', controller.results);
    app.get('/logout', controller.logout);
}
