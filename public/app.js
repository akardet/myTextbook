//Main file
var app = angular.module('myTextbook', ['addTextbookCtrl',  'ngRoute', 'angular-filepicker'])
    .config(function($routeProvider, filepickerProvider){
        //The route provider handles the client request to switch route
        $routeProvider
            .when('/textbook', {
                templateUrl: 'partials/searchTextbook.html',
                controller: 'searchTextbookController'
            })
            .when('/addTextbook', {          
                templateUrl: 'partials/addTextbook.html',
                controller: 'addTextbookController'            
            })
            //Redirect to addTextbook in all the other cases.
            .otherwise({redirectTo:'/textbook'});
            //Add the API key to use filestack service
            filepickerProvider.setKey('AslUn8qpRb6pCaGKcexQsz');
});