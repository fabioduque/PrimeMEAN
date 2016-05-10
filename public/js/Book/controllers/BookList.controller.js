angular.module('BookModule')
.controller('BookListController', function($rootScope, $scope, $location, BookService) {

        BookService.get().then(function (bookList) {
        	$scope.books = bookList;
        });

});