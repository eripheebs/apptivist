apptivistApp.controller('apptivistController',['$scope', '$http', 'ApptivistFactory', function ($scope, $http, ApptivistFactory) {

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
    var newEvent = new ApptivistFactory($scope.title, $scope.description, $scope.time, $scope.location);
    return newEvent;
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
