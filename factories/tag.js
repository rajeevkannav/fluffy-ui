todoApp.factory('searchTodoByTag', ['$resource', function ($resource) {
    return $resource("http://localhost:3000/api/tags/:query/todos",
        {query: "@query"},
        {
            get: {
                method: 'GET',
                isArray: true,
                resourceData: 'todos'
            }
        });

}]);
