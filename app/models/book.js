// grab the mongoose module
var mongoose = require('mongoose');

// define our book model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Book', {
    title : {type : String, default: 'Sem título'}
});

