/* bootstrap  Angular app for fetching common resources
 * removed ng-app from index page to use manual bootstrap
 * @ bootstrap module added
 */

/* bootstrap  Angular app for fetching common resources
 * removed ng-app from index page to use manual bootstrap
 * @ bootstrap module added
 */
 (function () {
 	'use strict';
 	var myApplication = angular.module('youtubeportal', [ 'ui.router','ngCookies','ngResource'])
 	var initInjector = angular.injector([ "ng" ]);
 	var $http = initInjector.get("$http");

 	angular
 	.element(document)
 	.ready(
 		function() {
 			$http.get('/api/getAllTraining')
 			.then(
 				function(response) {
 					myApplication.constant("resourceData",
 						response.data);
 					angular.bootstrap(document,
 						[ "youtubeportal" ]);
 				}, function(errorResponse) {
										// Handle error case
									});

 		});


 	myApplication
 	.controller(
 		"parentCntl",
 		[
 		"$scope",
 		"$rootScope",
 		"$state",
 		"$http",
 		"AuthenticationService",
 		"USER_ROLES",
 		'$timeout',
 		function parentCntl( $scope, $rootScope, $state,
 			$http,AuthenticationService,USER_ROLES,$timeout) {

 			$scope.currentUser = null;
 			$scope.userRoles = USER_ROLES;


 		} ])
 	.constant('AUTH_EVENTS', {
 		loginSuccess: 'auth-login-success',
 		loginFailed: 'auth-login-failed',
 		logoutSuccess: 'auth-logout-success',
 		sessionTimeout: 'auth-session-timeout',
 		notAuthenticated: 'auth-not-authenticated',
 		notAuthorized: 'auth-not-authorized',
 		loginmessage: ' invalid userid and password',
 		registermessage: 'unable to register user',
 		resetmessage: 'Reset password will be sent to your registered email id please check your email'
 	})
 	.constant('USER_ROLES', {
 		all: '*',
 		admin: 'admin',
 		guest: 'guest',
 		host: 'host'
 	})
 	.filter('urlsuffix', function() {

 		return function(number) {

		// Ensure that the passed in data is a number
		if(number == '' || number == undefined) {
			// If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
			return number;

		} else {
			return number+ '&output=embed';
		}
	}
   });

 })();





