const cmds = {
  pause: function (time, client) {
    client.pause(time)
    return this
  },
  saveScreenshot: function (path, client) {
    client.saveScreenshot(path)
    return this
  },
  clickAndCapture: function (element, fileName, client) {
    return this
      .click(element)
      .pause(500, client)
      .saveScreenshot('e2e/screenshots/' + fileName, client)
  }
}

module.exports = {
  url: 'https://www.github.com/coreyc',
  elements: {
    pinnedRepos: {
      selector: '.js-pinned-repos-reorder-container'
    }
  },
  sections: {
    userProfileNav: {
      commands: [cmds],
      selector: '.user-profile-nav.js-sticky',
      elements: {
        overview: {
          selector: 'a[title=Overview]'
        },
        repositories: {
          selector: 'a[title=Repositories]'
        },
        stars: {
          selector: 'a[title=Stars]'
        },
        followers: {
          selector: 'a[title=Followers]'
        },
        following: {
          selector: 'a[title=Following]'
        }
      }
    }
  }
}