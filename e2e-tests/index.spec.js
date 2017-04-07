describe('Main page test', () => {
  it('should load angularjs', () => {
    browser.get('http://localhost:8000/');
    expect(browser.getCurrentUrl()).toBe('http://localhost:8000/');
  });
});