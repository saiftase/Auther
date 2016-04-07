app.controller('LogoutCtrl', function ($scope, $state, AuthorizationFactory){

	$scope.logout = function(){
		AuthorizationFactory.logout()
		.then(function(response){
			$state.go('stories');
		});
	}

});