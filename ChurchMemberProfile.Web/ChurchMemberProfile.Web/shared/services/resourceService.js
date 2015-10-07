'use strict';

angular.module('resourceService', ['ngResource'])
	   .factory(
		'DudzApiService',
		function ($resource) {
		    return $resource('http://discipleshipws.apphb.com/api/memberprofile',
            {}, {
                get: { method: 'GET', isArray: false }
            });
		})
.factory(
				'MemberProfileService',
				function ($resource) {
				    return {

				        one: $resource(
								'http://discipleshipws.apphb.com/api/memberprofile/:id', {},
								{
								    get: {
								        method: 'GET',
                                        isArray: false
								    }
								}),
				        all: $resource('http://discipleshipws.apphb.com/api/memberprofile/', {}, {
				            get: {
				                method: 'GET',
                                isArray: true
				            }
				        }),
				    };
				});