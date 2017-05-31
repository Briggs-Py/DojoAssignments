var controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/questions', controller.getQuestions);
    app.post('/api/questions', controller.createQuestion);
    app.get('/api/questions/:id', controller.getSingleQuestion);
    app.get('/api/current', controller.current);
    app.get('/api/vote/:id/:number', controller.vote);
    app.delete('/api/delete/:id', controller.delete);
    app.get('/logout', controller.logout);
}
