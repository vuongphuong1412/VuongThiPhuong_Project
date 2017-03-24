var adminController = app.controller('adminController', function ($rootScope, $scope, $http, couchdbService){
    $scope.allDocs = [];
    $scope.selectedDocs = [];
    couchdbService.getAllDocs().then(function(allDocs){
        $scope.allDocs = allDocs;
        $scope.loadAllDocList = function() {
        couchdbService.getAllDocs().then(function(allDocs) {
            $scope.allDocs = allDocs;
            console.debug(allDocs);
        });

    };
    $scope.toggleSelection = function(doc) {
        var index = $scope.selectedDocs.indexOf(doc);
        if (index > -1) {
            $scope.selectedDocs.splice(index, 1);
        } else {
            $scope.selectedDocs.push(doc);
        }
    }
    
     $scope.submit = function() {
        couchdbService.save($scope.doc).then(function(allDocs) {
            $scope.loadAllDocList();
        });
    }
    $scope.addNew = function(){
    $scope.working = true;
    
}
$scope.update = function(){
    $scope.working=true;
    $scope.doc = $scope.selectedDocs[0];
}

$scope.reset=function(){
    $scope.doc=null;
}

$scope.delete = function() {
        angular.forEach($scope.selectedDocs, function(doc, index) {
            couchdbService.delete(doc).then(function(result) {
                if ($scope.selectedDocs.length - 1 == index) {
                    $scope.selectedDocs = [];
                    $scope.allDocs.splice(doc, 1);
                }
            });
        });
    }
});
});