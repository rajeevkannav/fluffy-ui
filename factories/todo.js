todoApp.factory('Todo', ['$resource', function ($resource) {
    var todoResourceUrl = 'http://localhost:3000/api/todos/:id';
    var todoResourceParams = {id: '@_id'};
    var actions = {
        "update": {
            method: 'PATCH',
            url: todoResourceUrl
        },
        "destroy": {method: 'DELETE'},
        "archivedTodos": {
            method: 'GET', params: {
                archived: true
            }, isArray: true
        },
        "restore": {
            method: 'PATCH',
            url: todoResourceUrl + '/restore'
        },
        "toggleStatus": {
            method: 'PATCH',
            url: todoResourceUrl + '/update_status'
        },
        "attachTag": {
            method: 'PUT',
            url: todoResourceUrl + '/assign_tags'
        }

    }
    return $resource(todoResourceUrl, todoResourceParams, actions); // Note the full endpoint address
}]);


