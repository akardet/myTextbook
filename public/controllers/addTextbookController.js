var addCtrl = angular.module('addTextbookCtrl', []);
addCtrl.controller('addTextbookController', function($scope, $http, filepickerService){
    $scope.textbook = {};
    //Send the newly created Textbook to the server to store in the db
    $scope.createTextbook = function(){
        $http.post('/textbook', $scope.textbook)
            .success(function(data){
                console.log(JSON.stringify(data));
                //Clean the form to allow the user to create new textbooks
                $scope.textbook = {};
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
    //Single file upload, you can take a look at the options
    $scope.upload = function(){
        filepickerService.pick(
            {
                mimetype: 'image/*',
                language: 'en',
                services: ['COMPUTER','DROPBOX','GOOGLE_DRIVE'],
                openTo: 'COMPUTER'
            },
            function(Blob){
                console.log(JSON.stringify(Blob));
                $scope.textbook.picture = Blob;
                $scope.$apply();
            }
        );
    };
});