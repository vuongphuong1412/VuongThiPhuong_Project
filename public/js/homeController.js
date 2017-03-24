var homeController = app.controller('homeController', function ($rootScope, $scope, $http, couchdbService){
    $scope.newData = [];
    couchdbService.getAllDocs().then(function(allDocs) {
        $scope.newData = allDocs;
    });
});




