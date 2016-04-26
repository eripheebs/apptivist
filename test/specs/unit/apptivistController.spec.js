describe('apptivistController', function() {
  beforeEach(module('apptivistApp'));

  var ctrl, httpBackend;
  var eventData = {
    title: "sampleEvent",
    description:"sampleDescription",
    time:"sampleTime",
    location:"sampleLocation"};
  var $scope = {};

  beforeEach(inject(function($controller, $httpBackend){
    ctrl = $controller('apptivistController');
    httpBackend = $httpBackend;
  }));

  it('posts an event to the server', function(){
    httpBackend.expectPOST("/events",  eventData).respond(201);
    ctrl.postEvent();
    httpBackend.flush();
  });

});
