angular.module('vpApp').controller('IndexCtrl', ['$scope', 'MemberProfileService',
    function ($scope, DudzApiService) {
        console.log('test');
        $scope.init = function () { console.log("init() executed!"); MemberProfileService.all.get(function (data) { console.log(data); }); };
        $scope.init();
    }
]);