var controller = require('../controllers/controller');

module.exports = app => {
    app.post('/api/login', controller.loginReg);
    app.get('/api/topics', controller.getTopics);
    app.post('/api/topics', controller.createTopic);
    app.get('/api/topic/:id', controller.getSingleTopic);
    app.post('/api/posts/:id', controller.createPost);
    app.post('/api/comments/:id', controller.createComment);
    app.get('/api/current', controller.current);
    app.get('/api/vote-up/:id', controller.likes);
    app.get('/logout', controller.logout);
}
