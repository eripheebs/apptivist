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

  self.createEventWithId = function(title, description, time, location, id) {
    return new EventFactory(title, description, time, location, id);
  };

  self.editEvent = function(title, description, time, location, id) {
    console.log(id);
    EventService.editEvent(title, description, time, location, id);
  };

}]);
