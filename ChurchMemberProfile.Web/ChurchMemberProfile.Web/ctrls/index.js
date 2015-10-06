angular.module('vpApp').controller('IndexCtrl', ['$scope', 'DudzApiService',
    function ($scope, DudzApiService) {
        console.log('test');
        $scope.init = function () {
            console.log("init() executed!");
            $scope.init = function () { DudzApiService.get(function (data) { console.log(data); }); };
        };
        $scope.init();
    }
]);