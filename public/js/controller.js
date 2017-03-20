var homeController = app.controller('homeController', function ($rootScope, $scope, $http){
    $scope.newData = [];
    $http.get('/services/news.json').then(function (response) {
        $scope.newData = response.data;
    });
});
