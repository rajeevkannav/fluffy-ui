todoApp.controller('searchController',
    ['$scope', '$routeParams', 'searchTodoByTag',
        function ($scope, $routeParams, searchTodoByTag) {
            // console.log($routeParams.query);
            $scope.query = $routeParams.query;
            initialize();

            function initialize() {
                $scope.todos = searchTodoByTag.get(
                    {query: $scope.query}
                )
            }
        }]);
