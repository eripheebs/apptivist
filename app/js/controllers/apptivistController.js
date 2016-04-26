apptivistApp.controller('apptivistController',['$scope', '$http', function ($scope, $http) {

  this.postEvent = function(eventData){
    $http.post('/events', eventData);
  };

  this.sendEvent = function(){
    return {
      title: $scope.title,
      description: $scope.description,
      time: $scope.time,
      location: $scope.location
    };
  };


}]);
