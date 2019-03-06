todoApp.controller('searchController',
    ['$scope', '$routeParams', 'searchTodoByTag',
        function ($scope, $routeParams, searchTodoByTag) {

            $scope.query = $routeParams.query;
            initialize();

            function initialize() {
                $scope.todos = searchTodoByTag.get(
                    {query: $scope.query}
                )
            }
        }]);
