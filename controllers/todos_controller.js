todoApp.controller('todosController',
    ['$scope', 'Todo', '$location', 'notify',
        function ($scope, Todo, $location, notify) {

            function loadtodos() {
                $scope.todos = Todo.query();
            }

            loadtodos();

            $scope.newTodo = {title: ''};

            $scope.addTodo = function () {
                Todo.save({todo: $scope.newTodo}).$promise.then(function (response) {
                    $scope.todos.push(response.todo);
                    $scope.newTodo = {title: ''};
                    notify({message: 'Todo created successfully.', duration: 1000})
                });
            };

            $scope.deleteTodo = function (todo) {
                var todoId = todo._id.$oid;
                var todoIndex = $scope.todos.indexOf(todo);

                Todo.destroy({id: todoId}).$promise.then(function () {
                    $scope.todos.splice(todoIndex, 1);
                    notify({message: 'Todo deleted successfully.', duration: 1000})
                });
            };

            $scope.toggleStatus = function (todo) {
                var todoId = todo._id.$oid;
                var todoIndex = $scope.todos.indexOf(todo);

                var requestedStatus = (todo.status === 'finished') ? 'started' : 'finished';
                Todo.toggleStatus({id: todoId},
                    {id: todoId, status: requestedStatus}).$promise.then(function (response) {
                    $scope.todos[todoIndex] = response.todo
                    notify({message: 'Todo marked as ' + requestedStatus + '.', duration: 1000})
                });
            };

            $scope.query = '';
            $scope.queryViaTag = function () {
                $location.path('/search/' + $scope.query)
            };
        }]);



