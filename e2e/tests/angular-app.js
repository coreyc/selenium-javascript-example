module.exports = {
  'Angular app test' : (client) => {
    client
      .url('http://localhost:4200')
      .waitForElementVisible('body', 1000)
      .assert.title('SeleniumJavascriptExample')
      .waitForElementVisible('a:first-child', 1000)
      .click('a:first-child')
      .end();
  }
};