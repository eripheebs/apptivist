describe('apptivistApp', function() {
  beforeEach(module('apptivistApp'));

  var ctrl;
  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  beforeEach(inject(function($controller, $httpBackend) {
    ctrl = $controller('apptivistController');
    httpBackend = $httpBackend;
    httpBackend.whenGET('/events').respond(dummyEvents);
  }));

  describe('initialize', function() {

    it('with an empty arrays of events', function(){
      expect(ctrl.events).toEqual([]);
    });

  });

  describe('#updateEvents', function() {

    it('should update the events from the page', function(){
      ctrl.updateEvents();
      httpBackend.flush();
      expect(ctrl.events).toEqual(dummyEvents);
    });

  });

});
