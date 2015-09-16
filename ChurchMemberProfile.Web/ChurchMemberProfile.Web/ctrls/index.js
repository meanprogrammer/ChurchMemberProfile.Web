angular.module('vpApp').controller('IndexCtrl', ['$scope', 'DudzApiService',
    function ($scope, DudzApiService) {
        console.log('test');
        $scope.init = function () { DudzApiService.get(); };
        $scope.init();
    }
]);