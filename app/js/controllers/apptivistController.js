apptivistApp.controller('apptivistController',['$scope', '$http', function ($scope, $http) {

  var self = this;
  self.events = [{
   title: "testTitle",
   description: "testDescription",
   time: "testTime",
   location: "testLocation"
 }];

  self.postEvent = function(eventData){
    $http.post('/events', eventData, { 'Content-Type': 'application/json;charset=UTF-8' });
  };

  self.createEvent = function(){
    return {
      title: $scope.title,
      description: $scope.description,
      time: $scope.time,
      location: $scope.location
    };
  };

  self.sendEvent = function() {
    this.postEvent(this.createEvent());
  };

  self.updateEvents = function() {
    $http.get('/events')
      .then(function(returnValue) {
        self.events = returnValue.data;
      });
  };

}]);
