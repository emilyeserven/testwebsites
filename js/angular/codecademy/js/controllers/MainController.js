app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
  $scope.promo = 'Read more now!';
  $scope.product = {
    name: 'The Book of Trees',
    price: 19
  };
}]);
