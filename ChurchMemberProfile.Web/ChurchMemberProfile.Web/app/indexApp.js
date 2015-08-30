var app = angular.module('vpApp', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngSanitize']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/index', { templateUrl: 'html/indexContent.html', controller: 'IndexCtrl' })
        .otherwise({ redirectTo: '/index' });
    }]);
