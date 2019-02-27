//Routes
todoApp.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.htm',
            controller: 'todosController'
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
        .when('/search/:query', {
            templateUrl: 'views/search.htm',
            controller: 'searchController'
        })
        .otherwise({redirectTo: '/'});
});

