/* bootstrap  Angular app for fetching common resources 
 * removed ng-app from index page to use manual bootstrap
 * @ bootstrap module added 
 */

var myApplication = angular.module('youtubeportal', [ 'ui.router', 'ngResource'])
var initInjector = angular.injector([ "ng" ]);
var $http = initInjector.get("$http");

angular
		.element(document)
		.ready(
				function() {

					
					myApplication
							.config([
									'$httpProvider',
									function($httpProvider) {
										// initialize get if not there
										if (!$httpProvider.defaults.headers.get) {
											$httpProvider.defaults.headers.get = {};
										}
										$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
										$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
										$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
									} ]);
					$http.get('api/getArticles')
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
						'resourceData',
						
						function parentCntl($scope, $rootScope,resourceData) {

                           $rootScope.resourceData = resourceData;
                           console.log($rootScope.resourceData);
								}]);