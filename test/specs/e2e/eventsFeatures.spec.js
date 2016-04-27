describe('apptivistApp', function(){

  var baseUrl = 'http://localhost:3000/';

  describe('Main page', function(){
    it('has a title', function(){
      browser.get(baseUrl);
      expect(browser.getTitle()).toEqual('apptivistApp');
    });

    it('displays a list of events', function(){
      browser.get(baseUrl);
      expect($$('#event-list li').first().getText()).toMatch("testTitle");
    });
  });

  describe('Add an event', function() {

    it('add event form is hidden by default', function(){
      browser.get(baseUrl);
      expect(element(by.name('NewEvent')).isDisplayed()).toEqual(false);
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

});

//
