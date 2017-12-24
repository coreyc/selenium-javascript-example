module.exports = {
  'Github homepage test': (client) => {
    const github = client.page.githubHome()
    github
      .navigate()
      .waitForElementVisible('body', 500)
      .waitForElementVisible('@searchBar', 500)
      .assert.attributeEquals('@searchBar', 'placeholder', 'Search GitHub')
      .setValue('@searchBar', 'selenium-javascript-example')
      .submitForm('@form')
      .assert.title('Search · selenium-javascript-example · GitHub')

    client.end()
  },

  'Github user page test': (client) => {
    const github = client.page.githubUser()
    const nav = github.section.userProfileNav
    github
      .navigate()
      .waitForElementVisible('body', 500)
      .assert.cssProperty('a', 'color', 'rgba(3, 102, 214, 1)')
      .waitForElementVisible('@pinnedRepos', 500)

    client.saveScreenshot('e2e/screenshots/userProfileNav.png')
    nav.expect.element('@overview').to.be.visible
    nav.expect.element('@repositories').to.be.visible
    nav.expect.element('@stars').to.be.visible
    nav.expect.element('@followers').to.be.visible
    nav.expect.element('@following').to.be.visible

    nav
      .clickAndCapture('@overview', 'overview.png', client)
      .clickAndCapture('@repositories', 'repos.png', client)
      .assert.urlContains('repositories')
      .clickAndCapture('@stars', 'stars.png', client)
      .assert.urlContains('stars')
      .clickAndCapture('@followers', 'followers.png', client)
      .assert.urlContains('followers')
      .clickAndCapture('@following', 'following.png', client)
      .assert.urlContains('following')

    client.saveScreenshot('e2e/screenshots/end.png')
    client.end()
  }
}