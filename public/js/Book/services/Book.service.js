angular.module('BookModule')
.factory('BookService', ['$http', function($http) {

    return {

        // call to get all books
        get : function() {
            return $http.get('/api/books').then(function (data) {return data.data});
        },

        // call to POST and create a new book
        create : function(bookData) {
            return $http.post('/api/books', bookData).then(function (data) {return data.data});
        },

        // call to UPDATE a given book
        update: function(bookData) {
            return $http.put('/api/books/' + bookData._id, bookData).then(function (data) {return data.data});
        },

        // call to DELETE a book
        delete : function(id) {
            return $http.delete('/api/books/' + id).then(function (data) {return data.data});
        }
    }       

}]);