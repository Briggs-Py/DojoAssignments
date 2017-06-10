module.exports = function Route(app){

    app.get('/', function(req, res) {
      res.render('index');
    })

    app.post("/results", function(req, res) {
        submittedInfo = {
            name: req.body.name,
            location: req.body.location,
            language: req.body.language,
            comment: req.body.comment
        };
        res.render("results", {results: submittedInfo});
    })
};
