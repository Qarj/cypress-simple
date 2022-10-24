const { defineConfig } = require("cypress");

console.log(`Cypress config file: ${__filename}`);
console.log(`defineConfig: ${defineConfig}`);

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
