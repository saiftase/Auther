app.controller('LoginCtrl', function ($scope, $state, AuthorizationFactory){

	$scope.submitLogin = function(obj){
		AuthorizationFactory.login(obj)
		.then(function(response){
			$state.go('stories');
		});
	}

});