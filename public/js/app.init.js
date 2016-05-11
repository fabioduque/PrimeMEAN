// public/js/app.js
angular.module("PrimeMEAN", [
	"ngRoute", 
    "ngAnimate",
    "ui.bootstrap",
    "BookModule"
    ])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page - books list
        .when('/', {
            redirectTo: '/book/list'
        })

        // create book
        .when('/book/create', {
            templateUrl: './js/Book/Views/BookCreate.html',
            controller: 'BookCreateController'
        })

        // list book
        .when('/book/list', {
            templateUrl: './js/Book/Views/BookList.html',
            controller: 'BookListController'
        });

        // .otherwise( {
        //     redirectTo: '/'
        // } )

        $locationProvider.html5Mode(true);

    }])
.controller("AppController", function ($rootScope, $scope) {

	$rootScope.$on("alert", function (event, args) {
		$scope.addAlert(args.msg)
	});

    $scope.alerts = [];

    $scope.addAlert = function(msg, type) {
        $scope.alerts.push({msg: msg, type: type});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };


})
.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, selectedBook) {
    $scope.selectedBook = selectedBook;
    $scope.ok = function () {
        $uibModalInstance.close(selectedBook);
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});