describe('Main page', () => {
  it('should load angularjs', () => {
    browser.get('http://localhost:8000/');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/');
  });

  describe('Login form', () => {
    let userName, userEmail, submitButton;

    beforeEach(() => {
      browser.get('http://localhost:8000/');
      userName = element(by.model('$ctrl.newUser.name'));
      userEmail = element(by.model('$ctrl.newUser.email'));
      submitButton = element(by.css('.md-primary'));
    });

    it('should be present', () => {
      expect($('form').isPresent()).toBeTruthy();
    });

    it('submitButton should be disabled if all fileds are empty', function() {
      userEmail.clear();
      userEmail.sendKeys('');
      userName.clear();
      userName.sendKeys('');

      expect(submitButton.getAttribute('disabled')).toEqual('true');
    });

    it('submitButton should be disabled if empty user name', function() {
      userEmail.sendKeys('abc@ya.ru');
      userName.clear();
      userName.sendKeys('');

      expect(submitButton.getAttribute('disabled')).toEqual('true');
    });

    it('submitButton should be disabled if empty user email', function() {
      userName.sendKeys('user1');
      userEmail.clear();
      userEmail.sendKeys('');

      expect(submitButton.getAttribute('disabled')).toEqual('true');
    });

    it('submitButton should be disabled if user name filled and bad email', function() {
      userEmail.sendKeys('abc');
      userName.sendKeys('user1');

      expect(submitButton.getAttribute('disabled')).toEqual('true');
    });

    it('submitButton should not be disabled if user name and email filled with good data', function() {
      userEmail.sendKeys('abc@ya.ru');
      userName.sendKeys('user1');

      expect(submitButton.getAttribute('disabled')).toBeNull();
    });
  });
});
