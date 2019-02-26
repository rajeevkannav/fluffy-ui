//Routes
todoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.htm',
            controller: 'mainController'
        })
        .when('/archived', {
            templateUrl: 'views/archived.htm',
            controller: 'archivedTodoController'
        })
        .when('/test', {
            templateUrl: 'views/test.htm',
            controller: 'testController'
        })
        .otherwise({ redirectTo: '/' });
});

