angular.module('BookModule')
.controller('BookCreateController', function($rootScope, $scope, $location, BookService) {

    $scope.newBook = function() {
		var bookData = {
			title: $scope.title
		};

		console.log("Will insert: %o", bookData);

	    BookService.create(bookData)
	    .then(function (data) {
	    	console.log("Will broadcast");
	    	$rootScope.$broadcast("alert", {msg: 'Livro criado com sucesso'});
	    	$location.path("/");

	    });
    }
    

});