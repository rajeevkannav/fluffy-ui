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
        .when('/editTodo/:id', {
            templateUrl: 'views/edit.htm',
            controller: 'editTodoController'
        })
        .when('/attachTags/:id', {
            templateUrl: 'views/attach_tags.htm',
            controller: 'tagsController'
        })
        .when('/test', {
            templateUrl: 'views/test.htm',
            controller: 'testController'
        })
        .otherwise({redirectTo: '/'});
});

