todoApp.controller('archivedTodoController',
    ['$scope', 'Todo', 'notify',
        function ($scope, Todo, notify) {

            loadArchivedTodos();

            $scope.restoreTodo = function (todo) {
                var todoId = todo._id.$oid;
                var todoIndex = $scope.todos.indexOf(todo);
                Todo.restore({id: todoId}, {id: todoId}).$promise.then(function (response) {
                    $scope.todos.splice(todoIndex, 1);
                    notify({message: 'Todo restored successfully.', duration: 1000})
                });
            };

            function loadArchivedTodos() {
                $scope.todos = Todo.archivedTodos();
            }
        }]
);
