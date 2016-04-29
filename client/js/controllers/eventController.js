apptivistApp.controller('eventController',['$http', 'EventFactory', 'EventService', function ($http, EventFactory, EventService) {
  var self = this;

  self.events = [];

  self.getEvents = function() {
    EventService.getEvents()
      .then(function(events){
        self.events = events.reverse();
      });
  };

  self.sendEvent = function(title, description, time, location) {
    EventService.postEvent(self.createEventWithId(title, description, time, location))
      .then(self.getEvents);


  };

  self.createEventWithId = function(title, description, time, location, id) {
    return new EventFactory(title, description, time, location, id);
  };

  self.editEvent = function(title, description, time, location, id) {
    EventService.editEvent(self.createEventWithId(title, description, time, location, id))
      .then(self.getEvents);
  };

  self.deleteEvent = function(id) {
    EventService.deleteEvent(id)
      .then(self.getEvents);
  };

  self.getEvents();

}]);
