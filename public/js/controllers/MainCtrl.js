// public/js/controllers/MainCtrl.js
angular.module('MainCtrl', ["NerdService"])
.controller('MainController', function($rootScope, $scope, $location, Nerd) {

	
	
	var created = $location.search().created;
	$scope.created = created;
	$location.search("created", null);


	var findNerdByIndex = function(index) {
		if ($scope.nerds.length > 0 )
			return $scope.nerds[index];
	}

	$scope.deleteNerd = function (index) {

		console.log("Will delete nerd: %o, nerdObj: %o", index, findNerdByIndex(index));

	};

	Nerd.get().then(function (nerds) {
		$scope.nerds = nerds;
	});


    $scope.tagline = 'To the moon and back!';   

});