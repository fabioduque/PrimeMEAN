// public/js/controllers/NerdCtrl.js
angular.module('NerdCtrl', ["NerdService"]).controller('NerdController', function($rootScope, $scope, $location, Nerd) {

    $scope.tagline = 'Nothing beats a pocket protector!';

    $scope.newNerd = function() {
		var nerdData = {
			name: $scope.fName,
			age: $scope.fAge
		};

		console.log("Will insert: %o", nerdData);

	    Nerd.create(nerdData)
	    .then(function (data) {
	    	console.log("Will broadcast");
	    	$rootScope.$broadcast("alert", {msg: 'Nerd criado com sucesso'});
	    	$location.path("/");

	    });
    }
    

});