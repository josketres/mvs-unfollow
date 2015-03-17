'use strict';

angular.module('mvsUnfollowApp')
	.service('twitterService', function($q) {

		var authorizationResult = false;

		this.initialize = function() {
			OAuth.initialize('WMVhaP1wW26-H6y91O9v24V6YKY', {
				cache: true
			});
			authorizationResult = OAuth.create('twitter');
		};

		this.isReady = function() {
			return (authorizationResult);
		};

		this.connectTwitter = function() {
			var deferred = $q.defer();
			OAuth.popup('twitter', {
				cache: true
			}, function(error, result) {
				if (!error) {
					authorizationResult = result;
					deferred.resolve();
				} else {
					//do something if there's an error
				}
			});
			return deferred.promise;
		};

		this.clearCache = function() {
			OAuth.clearCache('twitter');
			authorizationResult = false;
		};

		this.unfollow = function(userId) {
			var deferred = $q.defer();
			var promise = authorizationResult.post('/1.1/friendships/destroy.json?user_id=' + userId).done(function(data) {
				deferred.resolve(data)
			});
			return deferred.promise;
		};

		this.getUsersToUnfollow = function(screenNames) {

			var deferred = $q.defer();
			var promise = authorizationResult.get('/1.1/users/lookup.json?include_entities=false&screen_name=' + screenNames.join()).done(function(data) {
				deferred.resolve(data)
			});
			return deferred.promise;
		};
	});