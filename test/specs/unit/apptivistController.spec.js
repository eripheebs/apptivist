describe('apptivistController', function() {

  beforeEach(module('apptivistApp'));

  var testController, scope;

  beforeEach(inject(function($controller, $httpBackend, $rootScope){
    scope = $rootScope.$new();
    testController = $controller('apptivistController', {$scope:scope});
    httpBackend = $httpBackend;
  }));

  var eventData = {
    title: "sampleEvent",
    description:"sampleDescription",
    time:"sampleTime",
    location:"sampleLocation"};

  it('posts an event to the server', function(){
    httpBackend.expectPOST("/events",  eventData).respond(201);
    testController.postEvent(eventData);
    httpBackend.flush();
  });

});
