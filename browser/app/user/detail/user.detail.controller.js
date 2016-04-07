'use strict';

app.controller('UserDetailCtrl', function ($scope, user, Story, AuthorizationFactory) {
	$scope.user = user;
	$scope.newStory = new Story({author: $scope.user});
	$scope.addStory = function () {
		$scope.newStory.save()
		.then(function (story) {
			$scope.newStory = new Story({author: $scope.user});
			$scope.user.stories.unshift(story);
		});
	};
	$scope.removeStory = function (story) {
		story.destroy()
		.then(function () {
			var idx = $scope.user.stories.indexOf(story);
			$scope.user.stories.splice(idx, 1);
		});
	};

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

});