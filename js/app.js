/* bootstrap  Angular app for fetching common resources
 * removed ng-app from index page to use manual bootstrap
 * @ bootstrap module added
 */
 (function () {
 	'use strict';
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



angular.module('youtubeportal').config(config);
config.$inject = [ '$stateProvider', '$urlRouterProvider' ];
function config($stateProvider, $urlRouterProvider) {

	$stateProvider
	.state("/", {
		url : "/",
		templateUrl : "app/pages/main.html",
		resolve : {
			mymessages : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
			} ]
		}

	})
	.state("all", {
		url : "/all",
		templateUrl : "app/pages/common.html",
		resolve : {
			mymessages : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
			} ]
		}

	})
	.state("playlists", {
		url : "/playlists",
		templateUrl : "app/pages/playlists.html",
		resolve : {
			mymessages : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadYoutubeData();
			} ]
		}

	})
	.state("web", {
		url : "/web",
		templateUrl : "app/pages/web.html",
        resolve : {
			mymessages1 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
			} ],
			mymessages2 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadYoutubeData();
			} ]

		}

	})
	.state("java", {
		url : "/java",
		templateUrl : "app/pages/java.html",
		 resolve : {
			mymessages1 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
			} ],
			mymessages2 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadYoutubeData();
			} ]

		}

	})
	.state("mobile", {
		url : "/mobile",
		templateUrl : "app/pages/mobile.html",
		 resolve : {
			mymessages1 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
			} ],
			mymessages2 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadYoutubeData();
			} ]

		}

	})
	.state("all.technology", {
		url : "/:course_id",
		templateUrl : "app/pages/common_technology.html",
		 resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneTechnology($stateParams.course_id);
			} ],
			mymessages2 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadapplicationDataOneTechnology($stateParams.course_id);
			} ]

		}

	})

	.state("all.technology.youtube", {
		url : "/:youtube_id",
		templateUrl : "app/pages/common_technology_youtube.html",
		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneCourse($stateParams.youtube_id);
			} ]
		}

	})

	.state("web.technology.youtube", {
		url : "/:youtube_id",
		templateUrl : "app/pages/common_technology_youtube.html",

		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneCourse($stateParams.youtube_id);
			} ]
		}

	})

	.state("mobile.technology.youtube", {
		url : "/:youtube_id",
		templateUrl : "app/pages/common_technology_youtube.html",

		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneCourse($stateParams.youtube_id);
			} ]
		}

	})

	.state("java.technology.youtube", {
		url : "/:youtube_id",
		templateUrl : "app/pages/common_technology_youtube.html",
		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneCourse($stateParams.youtube_id);
			} ]
		}

	})

	.state("web.technology", {
		url : "/:course_id",
		templateUrl : "app/pages/web_technology.html",

		 resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneTechnology($stateParams.course_id);
			} ],
			mymessages2 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadapplicationDataOneTechnology($stateParams.course_id);
			} ]

		}

	})
	.state("java.technology", {
		url : "/:course_id",
		templateUrl : "app/pages/java_technology.html",
		  resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneTechnology($stateParams.course_id);
			} ],
			mymessages2 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadapplicationDataOneTechnology($stateParams.course_id);
			} ]

		}

	})
	.state("mobile.technology", {
		url : "/:course_id",
		templateUrl : "app/pages/mobile_technology.html",
		  resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadYoutubeDataOneTechnology($stateParams.course_id);
			} ],
			mymessages2 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadapplicationDataOneTechnology($stateParams.course_id);
			} ]

		}

	})
	.state("createTraining", {
		url : "/createTraining",
		templateUrl : "app/pages/createTraining.html"

	})
	.state("createVideo", {
		url : "/createVideo",
		templateUrl : "app/pages/createVideo.html"

	});
	$urlRouterProvider.otherwise("/");

}
angular
.module('youtubeportal')
.run(
	[
	'$rootScope',
	'$location',
	'$stateParams',
	'$http',
	'$state',

	function($rootScope, $location, $stateParams, $http,
		$state) {

		$rootScope
		.$on(
			'$stateChangeStart',
			function(event, toState, toParams,
				fromState, fromParams) {

				$(".page-loading").removeClass("hidden");


			});

		$rootScope.$on('$stateChangeError', function(event,
			toState, toParams, fromState, fromParams) {


			$(".page-loading").removeClass("hidden");

		});

		$rootScope
		.$on(
			'$stateChangeSuccess',
			function(event, toState, toParams,
				fromState, fromParams) {
				$(".page-loading").addClass(
					"hidden");




			});

	} ]);
}) ();



