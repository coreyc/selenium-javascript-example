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
    const nav = github.section.userProfileNav;
    github
      .navigate()
      .waitForElementVisible('body', 1000)
      .assert.cssProperty('a', 'color', 'rgba(3, 102, 214, 1)')
      .waitForElementVisible('@pinnedRepos', 1000);

    client.saveScreenshot('e2e/screenshots/userProfileNav.png');
    nav.expect.element('@overview').to.be.visible;
    nav.expect.element('@repositories').to.be.visible;
    nav.expect.element('@stars').to.be.visible;
    nav.expect.element('@followers').to.be.visible;
    nav.expect.element('@following').to.be.visible;

    nav
      .click('@repositories')
      .assert.urlContains('repositories');
    nav
      .click('@stars')
      .assert.urlContains('stars');
    nav
      .click('@followers')
      .assert.urlContains('followers')
      .waitForElementVisible('@followers', 500)
      .saveScreenshot('e2e/screenshots/followers.png', client);
    nav
      .click('@following')
      .assert.urlContains('following')
      .pause(1000, client)
      .saveScreenshot('e2e/screenshots/test.png', client);

    client.saveScreenshot('e2e/screenshots/end.png')
    client.end();
  }
};