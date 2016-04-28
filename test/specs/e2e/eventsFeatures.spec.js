describe('apptivistApp', function(){

  var baseUrl = 'http://localhost:3000/';

  describe('Main page', function(){
    it('has a title', function(){
      browser.get(baseUrl);
      expect(browser.getTitle()).toEqual('apptivistApp');
    });

    // it('displays a list of events', function(){
    // //   browser.get(baseUrl);
    // //   element(by.id('showNewEventForm')).click();
    // //   element(by.id('new-event-title')).sendKeys('testTitle');
    // //   element(by.id('new-event-description')).sendKeys('testDescription');
    // //   element(by.id('new-event-time')).sendKeys('testTime');
    // //   element(by.id('new-event-location')).sendKeys('testLocation');
    // //   $('#submit').click();
    // //   expect($$('#event-list li').last().getText()).toMatch("testTitle");
    // // });
  });

  describe('Add an event', function() {

    it('add event form is hidden by default', function(){
      browser.get(baseUrl);
      expect(element(by.id('createEvent')).isDisplayed()).toEqual(false);
    });

    it('clicking on the add button shows the form', function(){
      browser.get(baseUrl);
      $('#showNewEventForm').click();
      expect(element(by.id('new-event-title')).isDisplayed()).toBe(true);
      expect(element(by.id('new-event-description')).isDisplayed()).toBe(true);
      expect(element(by.id('new-event-time')).isDisplayed()).toBe(true);
      expect(element(by.id('new-event-location')).isDisplayed()).toBe(true);
      expect(element(by.id('submit')).isDisplayed()).toBe(true);
    });

    it('clicking the submit button does not redirect the user', function(){
      browser.get(baseUrl);
      $('#showNewEventForm').click();
      element(by.id('new-event-title')).sendKeys("Test Title of an Event");
      $('#submit').click();
      expect(browser.getCurrentUrl()).toEqual(baseUrl);
    });

  });

  describe('Edit an event', function(){

    it('displays an edit button', function() {
      browser.get(baseUrl);
      expect(element(by.id('edit-event')).isDisplayed()).toBe(true);
    });

    it('updates the details of an event', function() {
      browser.get(baseUrl);
      $('#showNewEventForm').click();
      element(by.id('new-event-title')).sendKeys("Test Title of an Event");
      $('#submit').click();
      $('#edit-event').click();
      element(by.id('edit-event-title')).sendKeys('secondTestTitle');
      $('#edit').click();
      expect($$('#event-list li').last().getText()).toMatch("testTitle");
    });

  describe('Events views', function() {

    it('list is available from /events', function(){
      browser.get(baseUrl + 'events');
      expect($$('#event-list li').first().getText()).toMatch("testTitle");
    });

    it('single page is available from /events/:event_id', function(){
      browser.get(baseUrl + 'events/1');
      expect($$('#event-title').first().getText()).toMatch("testTitle");
    });

  });

});
