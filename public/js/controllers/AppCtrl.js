angular.module("sampleApp")
.controller("AppController", function ($rootScope, $scope) {

	$rootScope.$on("alert", function (event, args) {
		$scope.showMessage = true;
		$scope.msg = args.msg;
	});


});