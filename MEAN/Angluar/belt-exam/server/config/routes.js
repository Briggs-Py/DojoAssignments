var controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/questions', controller.getQuestions);
    app.post('/api/questions', controller.createQuestion);
    app.get('/api/questions/:id', controller.getSingleQuestion);
    app.post('/api/answers/:question_id', controller.createAnswer);
    app.get('/api/current', controller.current);
    app.get('/api/likes/:id', controller.likes);
    app.get('/logout', controller.logout);
}
