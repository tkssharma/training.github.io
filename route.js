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

							
						}
				
			})
			.state("mobile", {
				url : "/mobile",
				templateUrl : "app/pages/mobile.html",
				resolve : {
							

							factory : LoadapplicationData
							
						}
				
			})
			.state("web.angular", {
				url : "/angular",
				templateUrl : "app/pages/webtechnology/angular.html",

			})

			.state("web.angular.course", {
				url : "/course/:course_id",
				templateUrl : "app/pages/webtechnology/youtube.html",
				resolve : {
							

							
							factory2 : LoadYoutubeDataOneTechnology
							
						}

			})
			.state("web.grunt.course", {
				url : "/course/:course_id",
				templateUrl : "app/pages/webtechnology/youtube.html",
				resolve : {
							

							
							factory2 : LoadYoutubeDataOneTechnology
							
						}

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
					'api/getApplicationData')
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
					'api/getYoutubeLinks')
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


		LoadYoutubeDataOneTechnology = function ($rootScope,$q,$http,$stateParams )
		{
        var deferred = $q.defer();
		
			$http.get(
					'api/getYoutubeLinksByCategory/'+ $stateParams.course_id)
					.success(function(response) {
						deferred.resolve(response);
						$rootScope.YouTubeCourseData = response;
						
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
		
