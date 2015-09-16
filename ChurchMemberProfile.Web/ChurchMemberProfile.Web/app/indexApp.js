var app = angular.module('vpApp', ['resourceService','ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ngSanitize']).
    config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/index', { templateUrl: 'html/indexContent.html', controller: 'IndexCtrl' }).
            when('/template', { templateUrl: 'html/createTemplate.html', controller: 'TemplateCtrl' })
        .otherwise({ redirectTo: '/index' });
    }]);
