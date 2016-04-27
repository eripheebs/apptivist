describe('EventService', function(){
  beforeEach(module('apptivistApp'));

  var EventService, httpBackend;

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  beforeEach(inject(function(_EventService_, $httpBackend){
    EventService = _EventService_;
    httpBackend = $httpBackend;
  }));

  describe('#getEvents', function(){

    it('fetches a list of events', function(){
      httpBackend.expectGET("/events").respond(dummyEvents);
      EventService.getEvents().then(function(returnValue) {
        expect(returnValue.title).toEqual(dummyEvents.title);
      });
      httpBackend.flush();
    });
  });
});
