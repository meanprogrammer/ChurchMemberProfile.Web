'use strict';

angular.module('resourceService', ['ngResource'])
	   .factory(
		'DudzApiService',
		function ($resource) {
		  		    return $resource('http://discipleshipws.apphb.com/api/dudzapi',
					{}, {
					    get: { method: 'GET', isArray: false }
					});
		});