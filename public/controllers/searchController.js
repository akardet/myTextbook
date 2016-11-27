var searchCtrl = angular.module('searchCtrl', []);
searchCtrl.controller('searchController', function($scope, $http) {
    console.log("in searchController");

    $scope.textbooks = [];
    $scope.currentPage = 0;
    $scope.pageSize = 6;
    $scope.numberofPages=function(){
        return Math.ceil($scope.textbooks.length/$scope.pageSize);
    }

    $http.get('/search')
        .success(function(data){
            $scope.textbooks = data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
});

app.filter('startFrom', function() {
    return function(input,start){
        start = +start;
        return input.slice(start);
    }
});