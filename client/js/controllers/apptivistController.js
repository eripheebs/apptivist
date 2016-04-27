apptivistApp.controller('apptivistController',['$scope', '$http', 'ApptivistFactory', 'ApptivistService', function ($scope, $http, ApptivistFactory, ApptivistService) {
  var self = this;

  self.events = [];

  self.updateEvents = function() {
    ApptivistService.getEvents().then(function(events){
      self.events = events;
    });
  };

  self.updateEvents();

 self.sendEvent = function() {
   this.postEvent(this.createEvent());
 };

  self.postEvent = function(eventData){
    $http.post('/api/events', eventData, { 'Content-Type': 'application/json;charset=UTF-8' });
  };

  self.createEvent = function(){
    var newEvent = new ApptivistFactory($scope.title, $scope.description, $scope.time, $scope.location);
    self.updateEvents();
    return newEvent;
  };

}]);
