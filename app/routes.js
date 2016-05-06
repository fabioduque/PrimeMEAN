 // app/routes.js

// grab the nerd model we just created
var Nerd = require('./models/nerd');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/nerds', function(req, res) {
        // use mongoose to get all nerds in the database
        Nerd.find(function(err, nerds) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            
            if (err)
                res.send(err);

            res.json(nerds); // return all nerds in JSON format
        });
    });



    // route to handle creating goes here (app.post)
    // create nerd and send back all nerds after creation
    app.post('/api/nerds', function(req, res) {

        // create a nerd, information comes from AJAX request from Angular
        Nerd.create({
            name : req.body.name,
            age: req.body.age
        }, function(err, nerd) {
            if (err)
                res.send(err);

            // get and return all the nerds after you create another
            Nerd.find(function(err, nerds) {
                if (err)
                    res.send(err)
                res.json(nerds);
            });
        });

    });


    // route to handle delete goes here (app.delete)

     app.delete('/api/nerds/:id', function(req, res) {

        if ( req.params.id )
        {

            // create a nerd, information comes from AJAX request from Angular
            Nerd.findByIdAndRemove(req.params.id, function(err, nerd) {
                console.log(err);
                if (err)
                    res.send(err);

                // return ok
                res.send("OK");
                
            });
        }
        else
            res.send("No ID specified");

    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
