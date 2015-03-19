'use strict';

angular.module('mvsUnfollowApp')
	.controller('MainCtrl', function($scope, $q, twitterService) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

		$scope.usersToUnfollow = [];

		$scope.authenticated = false;

		twitterService.initialize();

		$scope.refreshUsersToUnfollow = function() {

			var ids = ['NoticiasMVS', 'LuisCardenasMx', 'ezshabot', 'exafm', 'lamejor'];
			twitterService.getUsersToUnfollow(ids).then(function(data) {
				$scope.usersToUnfollow = data;
			});

		};

		//when the user clicks the connect twitter button, the popup authorization window opens
		$scope.connectButton = function() {
			twitterService.connectTwitter().then(function() {
				if (twitterService.isReady()) {
					$scope.authenticated = true;
					$scope.refreshUsersToUnfollow();
				}
			});
		};

		//sign out clears the OAuth cache, the user will have to reauthenticate when returning
		$scope.signOut = function() {
			twitterService.clearCache();
			$scope.authenticated = false;
			$scope.usersToUnfollow = [];
		};

		$scope.unfollow = function(userId) {
			twitterService.unfollow(userId).then(function(data) {
				$scope.refreshUsersToUnfollow();
			});
		};

		//if the user is a returning user
		if (twitterService.isReady()) {
			$scope.authenticated = true;
			$scope.refreshUsersToUnfollow();
		}

	});