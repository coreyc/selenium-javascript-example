module.exports = {
  'Github test' : (client) => {
    client
      .url('https://www.github.com')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('input[name=q]', 1000)
      .assert.attributeEquals('input[name=q]', 'placeholder', 'Search GitHub')
      .setValue('input[name=q]', 'selenium-javascript-example')
      .submitForm('form.js-site-search-form')
      .pause(1000)
      .assert.title('Search · selenium-javascript-example · GitHub')
      .end();
  }
};