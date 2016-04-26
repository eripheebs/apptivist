apptivistApp.controller('apptivistController',['$scope', '$http', function ($scope, $http) {


  this.postEvent = function(eventData){
    $http.post('/events', '',{params: eventData});
  };

  this.createEvent = function(){
    return {
      title: $scope.title,
      description: $scope.description,
      time: $scope.time,
      location: $scope.location
    };
  };

  this.sendEvent = function() {
    this.postEvent(this.createEvent());
  };


}]);
