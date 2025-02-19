const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zylalabs.com/',
    viewportHeight: 900,
    viewportWidth: 1440,
    chromeWebSecurity: false,
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
