var detailController = app.controller('detailController1', function ($scope, $http,couchdbService,$stateParams){
    $scope.detail = {};
    $scope.docid = $stateParams.docId;
    couchdbService.getById($stateParams.docId).then(function(allDocs) {
    $scope.detail = allDocs;
    });
    
});