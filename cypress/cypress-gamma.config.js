const { defineConfig } = require("cypress");

console.log(`Cypress config file: ${__filename}`);
console.log(`defineConfig: ${defineConfig}`);

const appRoot = require('app-root-path');
console.log(`appRoot: ${appRoot}`);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
