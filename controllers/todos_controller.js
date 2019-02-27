todoApp.controller('todosController',
    ['$scope', 'Todo', '$location', 'notify',
        function ($scope, Todo, $location, notify) {

            function loadtodos() {
                $scope.todos = Todo.query();
            }

            loadtodos();

            $scope.newTodo = {title: ''};

            $scope.addTodo = function () {
                Todo.save({todo: $scope.newTodo}).$promise.then(function () {
                    $scope.newTodo = {title: ''};
                    notify({message: 'Todo created successfully.', duration: 1000})
                    loadtodos();
                });
            };

            $scope.deleteTodo = function (todoId) {
                Todo.destroy({id: todoId}).$promise.then(function () {
                    notify({message: 'Todo deleted successfully.', duration: 1000})
                    loadtodos();
                });
            };

            $scope.toggleStatus = function (todoId, status) {
                var requestedStatus = 'finished';
                if (status === 'finished') {
                    requestedStatus = 'started'
                }
                Todo.toggleStatus({id: todoId},
                    {id: todoId, status: requestedStatus}).$promise.then(function () {
                    $location.path('/')
                    notify({message: 'Todo marked as ' + requestedStatus + '.', duration: 1000})
                });
            };

            $scope.query = '';
            $scope.queryViaTag = function () {
                $location.path('/search/' + $scope.query)
            };
        }]);



