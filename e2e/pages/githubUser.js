const cmds = {
  saveScreenshot: (path, client) => {
    client.saveScreenshot(path);
    return this;
  }
}

module.exports = {
  url: 'https://www.github.com/coreyc',
  commands: [cmds],
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
};