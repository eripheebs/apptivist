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

    it('has an event form', function(){
      browser.get(baseUrl);
      expect(element(by.id('new-event-title')).isDisplayed()).toBeTruthy();
      expect(element(by.id('new-event-description')).isDisplayed()).toBeTruthy();
      expect(element(by.id('new-event-time')).isDisplayed()).toBeTruthy();
      expect(element(by.id('new-event-location')).isDisplayed()).toBeTruthy();
      expect(element(by.id('submit')).isDisplayed()).toBeTruthy();
    });

    it('clicking the submit button does not redirect the user', function(){
      $('#submit').click();
      expect(browser.getCurrentUrl()).toEqual(baseUrl);
    });

  });

});
