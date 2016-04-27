describe('ApptivistService', function(){
  beforeEach(module('apptivistApp'));

  var ApptivistService, httpBackend;

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  beforeEach(inject(function(_ApptivistService_, $httpBackend){
    ApptivistService = _ApptivistService_;
    httpBackend = $httpBackend;
  }));

  describe('#getEvents', function(){

    it('fetches a list of events', function(){
      httpBackend.expectGET("/events").respond(dummyEvents);
      ApptivistService.getEvents().then(function(returnValue) {
        expect(returnValue.title).toEqual(dummyEvents.title);
      });
      httpBackend.flush();
    });
  });
});
