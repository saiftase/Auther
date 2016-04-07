'use strict';

app.controller('StoryDetailCtrl', function ($scope, story, users, AuthorizationFactory) {
	$scope.story = story;
	$scope.users = users;
	$scope.$watch('story', function () {
		$scope.story.save();
	}, true);

	$scope.currentUser = undefined;
	AuthorizationFactory.getCurrentUser()
	.then(function(data){
		$scope.currentUser = data;
	})

	$scope.currentUserExists = function(){
		if($scope.currentUser){
			return true;
		}

		return false;
	}

	$scope.CurrentUserIsAdmin = function(){
		return $scope.currentUser.isAdmin;
	}


	// $scope.signedIn = function(){
	// 	if(currentUser){
	// 		return true;
	// 	}

	// 	return false;
	// }

	

});