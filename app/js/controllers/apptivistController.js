apptivistApp.controller('apptivistController',['$scope', '$http', 'ApptivistFactory', 'ApptivistService', function ($scope, $http, ApptivistFactory, ApptivistService) {

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
    ApptivistService.getEvents()
      .then(function(returnValue) {
        self.events = returnValue;
        console.log(self.event);
      });
  };

}]);
