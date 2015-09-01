angular.module('vpApp').controller('TemplateCtrl', ['$scope', '$modal',
    function ($scope, $modal) {
        
        $scope.openModal = function (id) {
            var modalInstance = $modal.open({
                animation: true,
                templateUrl: 'activityUserModal.html',
                controller: 'ActivityUserModalInstanceCtrl',
                size: 'md',
                resolve: {
                    modalId: function () {
                        return id;
                    }
                }
            });

            modalInstance.result.then(function (result) {

            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


    }
]);