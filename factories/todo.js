todoApp.factory('Todo', ['$resource', function ($resource) {
    var todoResourceUrl = 'http://localhost:3000/api/todos/:id';
    var todoResourceParams = {id: '@_id'};
    var actions = {
        "destroy": {method: 'DELETE'},
        "archivedTodos": {
            method: 'GET', params: {
                archived: true
            }, isArray: true
        },
        "restore": {
            method: 'PATCH',
            url: "http://localhost:3000/api/todos/:id/restore",
            interceptor: {
                responseError: function (e) {
                    console.warn('Problem making request to backend: ', e)
                }
            }
        },
        "toggleStatus": {
            method: 'PATCH',
            url: "http://localhost:3000/api/todos/:id/update_status",
            interceptor: {
                responseError: function (e) {
                    console.warn('Problem making request to backend: ', e)
                }
            }
        }
    }
    return $resource(todoResourceUrl, todoResourceParams, actions); // Note the full endpoint address
}]);
