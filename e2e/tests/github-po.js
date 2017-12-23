module.exports = {
  'Github homepage test': (client) => {
    const github = client.page.githubHome();
    github
      .navigate()
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('@searchBar', 1000)
      .assert.attributeEquals('@searchBar', 'placeholder', 'Search GitHub')
      .setValue('@searchBar', 'selenium-javascript-example')
      .submitForm('@form')
      .assert.title('Search · selenium-javascript-example · GitHub');

    client.end();
  },

  'Github user page test': (client) => {
    const github = client.page.githubUser();
    github
      .navigate()
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('@pinnedRepos', 1000);

    client.end();
  }
};