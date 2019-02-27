todoApp.controller('archivedTodoController',
    ['$scope', '$location', 'Todo', 'notify',
        function ($scope, $location, Todo, notify) {

            loadArchivedTodos();

            $scope.restoreTodo = function (todoId) {
                Todo.restore({id: todoId}, {id: todoId});
                $location.path('/');
                notify({message: 'Todo restored successfully.', duration: 1000})
            };

            function loadArchivedTodos() {
                $scope.todos = Todo.archivedTodos();
            }
        }]
);
