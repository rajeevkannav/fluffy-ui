todoApp.controller('editTodoController',
    ['$scope', '$routeParams', 'Todo', '$location',
        function ($scope, $routeParams, Todo, $location) {

            function initialize() {
                $scope.todoId = $routeParams.id;
                $scope.todo = Todo.get({id: $scope.todoId});
            }

            initialize();

            $scope.updateTodo = function (todoId) {
                Todo.update({id: todoId}, {title: $scope.todo.title}).$promise.then(function () {
                    $location.path('/')
                });
            };
        }]);
