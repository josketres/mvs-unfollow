'use strict';

angular.module('mvsUnfollowApp')
	.directive('facebookLike', function() {
		return {
			restrict: 'E',
			template: '<div class="fb-like" data-href="{{page}}" data-colorscheme="light" data-layout="box_count" data-action="like" data-show-faces="true" data-send="false"></div>'
		};
	});