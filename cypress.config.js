const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zylalabs.com/',
    viewportHeight: 900,
    viewportWidth: 1440,
    chromeWebSecurity: false,
    exit: false,
    defaultCommandTimeout: 15000,
    requestTimeout: 15000,
    responseTimeout: 15000,
    pageLoadTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 0
    },
    env: {
      PERCY_ENABLE: true,
      PERCY_BROWSER_FAMILY: 'chrome',
      PERCY_TARGET_BROWSER: 'chrome'
    },
    setupNodeEvents(on, config) {
      // Forzar Percy solo para Chrome
      if (config.browser && config.browser.name !== 'chrome') {
        config.env.PERCY_ENABLE = false;
      }
      return config;
    },
  },
});
