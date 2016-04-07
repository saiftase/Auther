app.controller('UserItemCtrl', function ($scope, AuthorizationFactory) {
	$scope.currentUser = undefined;
	AuthorizationFactory.getCurrentUser()
	.then(function(data){
		$scope.currentUser = data;
	})

	console.log($scope);

	$scope.currentUserExists = function(){
		if($scope.currentUser){
			return true;
		}

		return false;
	}

	$scope.CurrentUserIsAdmin = function(){
		return $scope.currentUser.isAdmin;
	}

});