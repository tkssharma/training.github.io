


(function() {
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
	.state("home", {
		url : "/home",
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
	.state("welcome", {
		url : "/welcome",
		templateUrl : "app/pages/welcome.html",


	})
	.state("playlists", {
		url : "/playlists",
		templateUrl : "app/pages/playlists.html",
		resolve : {
			mymessages : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadAllDiscussions();
			} ]
		}

	})
	.state("playlists.videos", {
		url : "/videos/:ID",
		templateUrl : "app/pages/playlistsVideos.html",
		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadDiscussionVideo($stateParams.ID);
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
			} ]

		}

	})
	.state("DevOps", {
		url : "/DevOps",
		templateUrl : "app/pages/DevOps.html",
        resolve : {
			mymessages1 : [
			'Mainfactory',
			function(Mainfactory) {
				return Mainfactory
				.LoadapplicationData();
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
			} ]

		}

	})
	.state("all.technology", {
		url : "/:trainingid",
		templateUrl : "app/pages/common_technology.html",
		 resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getTrainingByTrainingID($stateParams.trainingid);
			} ]

		}

	})

	.state("all.technology.youtube", {
		url : "/:youtubeid",
		templateUrl : "app/pages/common_technology_youtube.html",
		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getYouTubeVideosByID($stateParams.youtubeid);
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
				.getYouTubeVideosByID($stateParams.youtube_id);
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
				.getYouTubeVideosByID($stateParams.youtube_id);
			} ]
		}

	})
	.state("DevOps.technology.youtube", {
		url : "/:youtube_id",
		templateUrl : "app/pages/common_technology_youtube.html",

		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getYouTubeVideosByID($stateParams.youtube_id);
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
				.getYouTubeVideosByID($stateParams.youtube_id);
			} ]
		}

	})

	.state("web.technology", {
		url : "/:trainingid",
		templateUrl : "app/pages/web_technology.html",

		 resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getTrainingByTrainingID($stateParams.trainingid);
			} ]

		}

	})
	.state("DevOps.technology", {
		url : "/:trainingid",
		templateUrl : "app/pages/DevOps_technology.html",

		 resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getTrainingByTrainingID($stateParams.trainingid);
			} ]

		}

	})

	.state("java.technology", {
		url : "/:trainingid",
		templateUrl : "app/pages/java_technology.html",
		  resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getTrainingByTrainingID($stateParams.trainingid);
			} ]

		}

	})
	.state("mobile.technology", {
		url : "/:trainingid",
		templateUrl : "app/pages/mobile_technology.html",
		  resolve : {
			mymessages1 : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.getTrainingByTrainingID($stateParams.trainingid);
			} ]

		}

	})

	.state(
			"login",
			{
				url : "/login",
				templateUrl : "app/partials/auth/login.html",
				onEnter: [ '$state', 'AuthenticationService', function($state, AuthenticationService){
					if (AuthenticationService.isLoggedIn()) {
						$state.go('all');
					};
				}]
			})
		.state("signout", {
			url : "/signout",
			templateUrl : "app/pages/main.html",
			onEnter: [ '$state', 'AuthenticationService', function($state, AuthenticationService){
				AuthenticationService.ClearCredentials();
				$state.go('login');
			}]
		})
		.state(
			"password",
			{
				url : "/password",
				templateUrl : "app/partials/auth/forgotpassword.html",
				onEnter: [ '$state', 'AuthenticationService', function($state, AuthenticationService){
					if (AuthenticationService.isLoggedIn()) {
						$state.go('home');
					};
				}]

			})
		.state(
			"changepassword",
			{
				url : "/changepassword/:email/:token",
				templateUrl : "app/partials/auth/changepassword.html"
			})
		.state(
			"register",
			{
				url : "/register",
				templateUrl : "app/partials/auth/register.html",
				onEnter: [ '$state', 'AuthenticationService', function($state, AuthenticationService){
					if (AuthenticationService.isLoggedIn()) {
						$state.go('welcome');
					};
				}]
			})

	.state("createTraining", {
		url : "/createTraining",
		templateUrl : "app/pages/createTraining.html"

	})
	.state("createDiscussion", {
		url : "/createDiscussion",
		templateUrl : "app/pages/createDiscussion.html",
		resolve : {
			mymessages : [
			'Mainfactory','$stateParams',
			function(Mainfactory,$stateParams) {
				return Mainfactory
				.LoadAllDiscussions();
			} ]
		}

	})
	.state("createDiscussion.addDiscussionvideo", {
		url : "/addDiscussionvideo/:id",
		templateUrl : "app/pages/addDiscussionvideo.html"

	})
	.state("createDiscussion.addDiscussionAuthor", {
		url : "/addDiscussionAuthor/:id",
		templateUrl : "app/pages/addDiscussionAuthor.html"

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
	'AuthenticationService',

	function($rootScope, $location, $stateParams, $http,
		$state,AuthenticationService) {

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

        	$rootScope.loading = false;
             // get user name on route change success
             $rootScope.isLoggedIn = AuthenticationService.isLoggedIn();
             $rootScope.currentUserName = AuthenticationService.getCurrentUser();
             console.log($rootScope.currentUserName)
             $(".page-loading").addClass("hidden");



			});

	} ]);

})();



