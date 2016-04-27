describe('apptivistController', function(){

  describe('Main page', function(){
    it('has a title', function(){
      browser.get('/');
      expect(browser.getTitle()).toEqual('apptivistApp');
    });

    it('displays a list of events', function(){
      browser.get('/');
      expect($$('#event-list li').first().getText()).toMatch("testTitle");
    });
  });

});
