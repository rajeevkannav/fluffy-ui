todoApp.controller('archivedTodoController',
    ['$scope', '$location', 'Todo',
        function ($scope, $location, Todo) {

            loadArchivedTodos();

            $scope.restoreTodo = function (todoId) {
                Todo.restore({id: todoId}, {id: todoId});
                $location.path('/');
            };

            function loadArchivedTodos() {
                $scope.todos = Todo.archivedTodos();
            }
        }]
);
