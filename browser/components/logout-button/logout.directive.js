app.directive('logoutButton', function () {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/logout-button/logout.html',
		controller: 'LogoutCtrl'
	};
});