todoApp.factory('Todo', ['$resource', function ($resource) {
    return $resource('http://localhost:3000/api/todos/:id.json', {}); // Note the full endpoint address
}]);
