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
 	'resourceData',

 	function parentCntl($scope, $rootScope,resourceData) {

 		$rootScope.resourceData = resourceData;
 		console.log($rootScope.resourceData);

 		$scope.submitVideo = function(form)
 		{
 			console.log($scope.training);

 			if(form.$invalid)
 			{
 				$scope.videoSubmitted = true;
 				return;
 			}
 			$http.post(
 				'/api/createYouTubeVideo',$scope.video)
 			.success(function(response) {

 				console.log("SUCCESS");
 				alert("added");

 			}).error(function(error) {
													// Handle error case

												});

 		}
 		$scope.createTraining = function(form)
 		{
 			if(form.$invalid)
 			{
 				alert("invalid..");
 				$scope.trainingSubmitted = true;
 				return;
 			}
 			$http.post(
 				'/api/createTraining',$scope.training)
 			.success(function(response) {
 				alert("added");
 				console.log("SUCCESS");

 			}).error(function(error) {
													// Handle error case

			});
 		}


 	}]);



 angular.module('youtubeportal').config(config)
 .controller("Maincontroller" ,Maincontroller );
 config.$inject = [ '$stateProvider', '$urlRouterProvider' ];
 function config($stateProvider, $urlRouterProvider) {

 	$stateProvider
 	.state("/", {
 		url : "/",
 		templateUrl : "app/pages/main.html",
 		resolve : {


 			factory : LoadapplicationData
 		}

 	})
 	.state("all", {
 		url : "/all",
 		templateUrl : "app/pages/common.html",
 		resolve : {


 			factory : LoadapplicationData

 		}

 	})
 	.state("playlists", {
 		url : "/playlists",
 		templateUrl : "app/pages/playlists.html",
 		resolve : {
 			factory : LoadYoutubeData
 		}

 	})
 	.state("web", {
 		url : "/web",
 		templateUrl : "app/pages/web.html",

 		resolve : {


 			factory : LoadapplicationData,
 			factory1 : LoadYoutubeData


 		}

 	})
 	.state("java", {
 		url : "/java",
 		templateUrl : "app/pages/java.html",
 		resolve : {


 			factory : LoadapplicationData,
 			factory1 : LoadYoutubeData

 		}

 	})
 	.state("mobile", {
 		url : "/mobile",
 		templateUrl : "app/pages/mobile.html",
 		resolve : {


 			factory : LoadapplicationData,
 			factory1 : LoadYoutubeData

 		}

 	})
 	.state("all.technology", {
 		url : "/:course_id",
 		templateUrl : "app/pages/common_technology.html",
 		resolve : {
 			factory4 : LoadapplicationDataOneTechnology,
 			factory5 : LoadYoutubeDataOneTechnology

 		}

 	})
 	.state("web.technology", {
 		url : "/:course_id",
 		templateUrl : "app/pages/common_technology.html",
 		resolve : {
 			factory4 : LoadapplicationDataOneTechnology,
 			factory5 : LoadYoutubeDataOneTechnology

 		}

 	})
 	.state("java.technology", {
 		url : "/:course_id",
 		templateUrl : "app/pages/common_technology.html",
 		resolve : {
 			factory4 : LoadapplicationDataOneTechnology,
 			factory5 : LoadYoutubeDataOneTechnology

 		}

 	})
 	.state("mobile.technology", {
 		url : "/:course_id",
 		templateUrl : "app/pages/common_technology.html",
 		resolve : {
 			factory4 : LoadapplicationDataOneTechnology,
 			factory5 : LoadYoutubeDataOneTechnology

 		}

 	})
 	.state("createTraining", {
 		url : "/createTraining",
 		templateUrl : "app/pages/createTraining.html"

 	})
 	.state("createVideo", {
 		url : "/createVideo",
 		templateUrl : "app/pages/createVideo.html"

 	})

 	.state("web.angular.course", {
 		url : "/course/:course_id",
 		templateUrl : "app/pages/webtechnology/youtube.html"

 	})
 	.state("web.grunt.course", {
 		url : "/course/:course_id",
 		templateUrl : "app/pages/webtechnology/youtube.html"

 	})

 	.state("web.node", {
 		url : "/node",
 		templateUrl : "app/pages/webtechnology/node.html",

 	})

 	.state("web.javascript", {
 		url : "/javascript",
 		templateUrl : "app/pages/webtechnology/javascript.html",

 	})
 	.state("web.grunt", {
 		url : "/grunt",
 		templateUrl : "app/pages/webtechnology/grunt.html",

 	})
 	.state("web.jquery", {
 		url : "/grunt",
 		templateUrl : "app/pages/webtechnology/jquery.html",

 	})
 	.state("web.saas", {
 		url : "/grunt",
 		templateUrl : "app/pages/webtechnology/saas.html",

 	})
 	.state("web.bootstrap", {
 		url : "/grunt",
 		templateUrl : "app/pages/webtechnology/bootstrap.html",

 	})

 	.state("web.html5", {
 		url : "/grunt",
 		templateUrl : "app/pages/webtechnology/html5.html",

 	})

 	.state("enterprise", {
 		url : "/enterprise",
 		templateUrl : "app/pages/enterprise.html",

 	})

 	.state("course", {
 		url : "/course/:trainingname",
 		templateUrl : "app/training/course.php",

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




 LoadapplicationData = function ($rootScope,$q,$http)
 {
 	var deferred = $q.defer();
 	if ($rootScope.applicationData) {
 		return true;
 	} else {
 		$http.get(
 			'/api/getAllTraining')
 		.success(function(response) {
 			deferred.resolve(response);
 			$rootScope.applicationData = response;

 		}).error(function(error) {
						// Handle error case
						deferred.reject(error);
					});
 		return deferred.promise;
 	}
 }


 LoadYoutubeData = function ($rootScope,$q,$http,$stateParams )
 {
 	var deferred = $q.defer();
 	if ($rootScope.YouTubeData) {
 		return true;
 	} else {
 		$http.get(
 			'/api/getAllYouTubeVideos')
 		.success(function(response) {
 			deferred.resolve(response);
 			$rootScope.YouTubeData = response;

 		}).error(function(error) {
						// Handle error case
						deferred.reject(error);
					});
 		return deferred.promise;
 	}

 }

 LoadapplicationDataOneTechnology = function ($rootScope,$q,$http,$stateParams )
 {
 	var deferred = $q.defer();

 	$http.get(
 		'/api/getAllTrainingByTechnologyName/'+ $stateParams.course_id)
 	.success(function(response) {
 		deferred.resolve(response);
 		$rootScope.applicationDataOneTech = response;

 	}).error(function(error) {
						// Handle error case
						deferred.reject(error);
					});
 	return deferred.promise;


 }
 LoadYoutubeDataOneTechnology = function ($rootScope,$q,$http,$stateParams )
 {
 	var deferred = $q.defer();

 	$http.get(
 		'/api/getAllYouTubeVideosByTechnologyName/'+ $stateParams.course_id)
 	.success(function(response) {
 		deferred.resolve(response);
 		$rootScope.YouTubeDataOneTech = response;

 	}).error(function(error) {
						// Handle error case
						deferred.reject(error);
					});
 	return deferred.promise;


 }





 Maincontroller.$inject = ['$scope','$rootScope'];
 function Maincontroller($scope,$rootScope)

 {

 	$scope.filter2 = function(data){
 		if (data.playlisturl === null || data.playlisturl === '' ){
 			return true;
 		} else{
 			return;
 		}
 	};


 	$scope.getYoutubeUrl = function(jsondata)
 	{

 		return jsondata.link;
 	}


 }

 angular.module("youtubeportal").filter('trusted', ['$sce', function ($sce) {
 	return function(url) {
 		return $sce.trustAsResourceUrl(url);
 	};


 }]);



