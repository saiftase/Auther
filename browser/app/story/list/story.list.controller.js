'use strict';

app.controller('StoryListCtrl', function ($scope, stories, Story, users, AuthorizationFactory) {
	$scope.stories = stories;
	$scope.users = users;

	$scope.newStory = new Story();
	
	$scope.removeStory = function (story) {
		story.destroy()
		.then(function () {
			var idx = $scope.stories.indexOf(story);
			$scope.stories.splice(idx, 1);
		});
	};

	$scope.addStory = function () {
		$scope.newStory.save()
		.then(function (created) {
			created.author = $scope.newStory.author;
			$scope.newStory = new Story();
			$scope.stories.unshift(created);
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