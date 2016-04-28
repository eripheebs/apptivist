apptivistApp.factory('EventFactory', function(){

  var event = function(title, description, time, location, id) {
    this.title = title;
    this.description = description;
    this.time = time;
    this.location = location;
    this.id = id;
  };

  return event;
});
