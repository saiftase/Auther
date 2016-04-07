app.controller('SignupCtrl', function($scope, $state, AuthorizationFactory){
	$scope.submitRegistration = function(obj){
		AuthorizationFactory.register(obj)
		.then(function(response){
			$state.go('stories');
		});
	}
})