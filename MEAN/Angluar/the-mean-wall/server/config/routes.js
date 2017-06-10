var controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/messages', controller.getMessages);
    app.post('/api/messages', controller.createMessage);
    app.post('/api/comments/:message_id', controller.createComment);
    app.get('/api/current', controller.current);
    app.get('/logout', controller.logout);
}
