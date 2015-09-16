var app = angular.module('vpApp', ['resourceService','ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngSanitize']).
    config(['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider.
            when('/index', { templateUrl: 'html/indexContent.html', controller: 'IndexCtrl' }).
            when('/template', { templateUrl: 'html/createTemplate.html', controller: 'TemplateCtrl' })
        .otherwise({ redirectTo: '/index' });

        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }]);