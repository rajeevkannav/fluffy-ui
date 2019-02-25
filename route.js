//Routes
todoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.htm',
            controller: 'mainController'
        })
        .when('/test', {
            templateUrl: 'views/test.htm',
            controller: 'testController'
        });
});

