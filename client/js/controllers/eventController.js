apptivistApp.controller('eventController',['$http', 'EventFactory', 'EventService', function ($http, EventFactory, EventService) {
  var self = this;

  self.events = [];

  self.updateEvents = function() {
    EventService.getEvents().then(function(events){
      self.events = events;
    });
  };

  self.updateEvents();

  self.sendEvent = function(title, description, time, location) {
    EventService.postEvent(self.createEvent(title, description, time, location));
  };

  self.createEvent = function(title, description, time, location){
    return new EventFactory(title, description, time, location);
  };

}]);
