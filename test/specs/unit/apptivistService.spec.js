describe('ApptivistService', function(){
  beforeEach(module('apptivistApp'));

  var ApptivistService, httpBackend;

  var dummyEvents = [{
    title: "testTitle",
    description: "testDescription",
    time: "testTime",
    location: "testLocation"
  }];

  beforeEach(inject(function(_AppttivistService_, $httpBackend){
    ApptivistService = _AppttivistService_;
    httpBackend = $httpBackend;
  }));

  describe('#pizza', function(){

    it('fetches a list of events', function(){

      httpBackend.expectGET("/events").respond(dummyEvents);

      var response = 
    });
  });
});
