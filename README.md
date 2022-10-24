# cypress-simple

A simple Cypress 10+ installation

## Installation

```bash
npm install
```

## Run Cypress

```bash
npm run cypress:open
```

In the console you will see a console log of

```js
Cypress config file: /Users/user.name/git/cypress-simple/cypress.config.js
defineConfig: defineConfig(config) {
    return config;
  }
```

## Using app-root-path

Run script

```bash
npm run cypress:open:gamma
```

Will see console output
```txt
Cypress config file: /Users/user.name/git/cypress-simple/cypress/cypress-gamma.config.js
defineConfig: defineConfig(config) {
    return config;
  }
appRoot: /Users/user.name/git/cypress-simple
```