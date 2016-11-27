var searchCtrl = angular.module('searchCtrl', []);
searchCtrl.controller('searchTextbookController', function($scope, $http){
    $scope.searchedTextbooks = [];

    $http.get('/textbook')
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.superheros = data;
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
});