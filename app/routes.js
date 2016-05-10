var Book = require('./models/book');

module.exports = function(app) {

    // server routes ===========================================================
    // handle things like api calls
    // authentication routes

    // sample api route
    app.get('/api/books', function(req, res) {
        // use mongoose to get all books in the database
        Book.find(function(err, books) {

            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            
            if (err)
                res.send(err);

            res.json(books); // return all books in JSON format
        });
    });



    // route to handle creating goes here (app.post)
    // create book and send back all books after creation
    app.post('/api/books', function(req, res) {

        // create a book, information comes from AJAX request from Angular
        Book.create({
            title: req.body.title
        }, function(err, book) {
            if (err)
                res.send(err);

            // get and return all the books after you create another
            Book.find(function(err, books) {
                if (err)
                    res.send(err)
                res.json(books);
            });
        });

    });


    // route to handle delete goes here (app.delete)

    app.delete('/api/books/:id', function(req, res) {

        if ( req.params.id )
        {

            // create a book, information comes from AJAX request from Angular
            Book.findByIdAndRemove(req.params.id, function(err, book) {
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

    app.delete('/api/books/deleteAll', function(req, res) {
        console.log("Delete All");
        
            // create a book, information comes from AJAX request from Angular
        // Book.remove({}, function(err, book) {
        //     console.log(err);
        //     if (err)
        //         res.send(err);

        //     // return ok
        //     res.send("OK");
            
        // });
        

    });


    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

};
