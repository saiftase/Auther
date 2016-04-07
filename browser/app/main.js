'use strict';

var app = angular.module('auther', ['ui.router']);

app.config(function ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	//oAuth: Route instead of changing state
	$urlRouterProvider.when('/api/oauth/:provider', function () {
  		window.location.reload();
	});
});