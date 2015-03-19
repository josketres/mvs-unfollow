"use strict";angular.module("mvsUnfollowApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","angulike"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]).run(["$rootScope",function(a){a.facebookAppId="982947961730970"}]),angular.module("mvsUnfollowApp").controller("MainCtrl",["$scope","$q","twitterService",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.usersToUnfollow=[],a.authenticated=!1,c.initialize(),a.refreshUsersToUnfollow=function(){var b=["NoticiasMVS","LuisCardenasMx"];c.getUsersToUnfollow(b).then(function(b){a.usersToUnfollow=b})},a.connectButton=function(){c.connectTwitter().then(function(){c.isReady()&&(a.authenticated=!0,a.refreshUsersToUnfollow())})},a.signOut=function(){c.clearCache(),a.authenticated=!1,a.usersToUnfollow=[]},a.unfollow=function(b){c.unfollow(b).then(function(){a.refreshUsersToUnfollow()})},c.isReady()&&(a.authenticated=!0,a.refreshUsersToUnfollow())}]),angular.module("mvsUnfollowApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("mvsUnfollowApp").service("twitterService",["$q",function(a){var b=!1;this.initialize=function(){OAuth.initialize("WMVhaP1wW26-H6y91O9v24V6YKY",{cache:!0}),b=OAuth.create("twitter")},this.isReady=function(){return b},this.connectTwitter=function(){var c=a.defer();return OAuth.popup("twitter",{cache:!0},function(a,d){a||(b=d,c.resolve())}),c.promise},this.clearCache=function(){OAuth.clearCache("twitter"),b=!1},this.unfollow=function(c){{var d=a.defer();b.post("/1.1/friendships/destroy.json?user_id="+c).done(function(a){d.resolve(a)})}return d.promise},this.getUsersToUnfollow=function(c){{var d=a.defer();b.get("/1.1/users/lookup.json?include_entities=false&screen_name="+c.join()).done(function(a){d.resolve(a)})}return d.promise}}]),angular.module("mvsUnfollowApp").directive("facebookLike",function(){return{restrict:"E",template:'<div class="fb-like" data-href="{{page}}" data-colorscheme="light" data-layout="box_count" data-action="like" data-show-faces="true" data-send="false"></div>'}});