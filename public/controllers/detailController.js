var detailCtrl = angular.module('detailCtrl', []);
detailCtrl.controller('detailController', function($scope, $http, $routeParams){
    $scope.textbook = {};
    //get the id to query the db and retrieve the correct textbook
    var id = $routeParams.id;
    $http.get('/textbook/' + id)
        .success(function(data){
            console.log(JSON.stringify(data));
            $scope.textbook = data;
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });     
});