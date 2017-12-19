module.exports = {
  'Github test' : (client) => {
    const github = client.page.github();
    github
      .navigate()
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('@searchBar', 1000)
      .assert.attributeEquals('@searchBar', 'placeholder', 'Search GitHub')
      .setValue('@searchBar', 'selenium-javascript-example')
      .submitForm('@form')
      .pause(1000)
      .assert.title('Search · selenium-javascript-example · GitHub')
      .end();
  }
};