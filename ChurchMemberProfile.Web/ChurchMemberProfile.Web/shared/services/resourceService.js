'use strict';

angular.module('resourceService', ['ngResource'])
	   .factory(
		'DudzApiService',
		function ($resource) {
		  		    return $resource('http://discipleshipws.apphb.com/api/memberprofile',
					{}, {
					    get: { method: 'GET', isArray: false }
					});
		});