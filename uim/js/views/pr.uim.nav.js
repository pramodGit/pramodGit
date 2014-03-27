/* global define */

define([
	'angular',
	'angularRoute'
], function () {

	//angular.module('uimNavApp', ['ngRoute']);
	var uimNavAppModule = angular.module('uimNavApp', ['ngRoute']);
	
	// Navigation
	uimNavAppModule.controller('uimNavCtrl', ['$scope', function($scope){
		$scope.nav = ['Home', 'About', 'Blog', 'Contact'];
		//$scope.first = 'Home';
		//$scope.sec = 'About';
		//$scope.third = 'Blog';
		//$scope.four = 'Contact';
	}]);
	/*
	uimNavAppModule.config (
		function ( $routProvider ) {
			$routProvider
				.when (
					"http://localhost/pr/uim/about.html",
					{
						action: "nav.html"
					}
				)
			;

		}
	);
	*/
	angular.bootstrap(document.getElementById("uimNavApp"),['uimNavApp']);
	// Return Module
	return uimNavAppModule;

});