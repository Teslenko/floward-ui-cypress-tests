const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 40000,
    execTimeout: 3000,
    taskTimeout: 3000,
    pageLoadTimeout: 60000,
    requestTimeout: 3000,
    responseTimeout: 3000,
    chromeWebSecurity: false,
    env: {
      ENV: "https://floward.co.uk/",
    },
  },
});
