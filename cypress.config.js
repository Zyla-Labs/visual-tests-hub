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

      // Configuración del navegador para evitar detección de bots por Cloudflare
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' || browser.name === 'chrome') {
          console.log('Configurando navegador para evitar detección de Cloudflare');
          
          // Agregar flags para parecer navegador real y evitar detección de automation
          launchOptions.args.push(
            '--lang=en-US',
            '--disable-blink-features=AutomationControlled',
            '--exclude-switches=enable-automation',
            '--disable-dev-shm-usage',
            '--no-sandbox',
            '--start-maximized'
          );
          
          // Configurar preferencias para parecer navegador real
          launchOptions.preferences = {
            ...launchOptions.preferences,
            'profile.default_content_setting_values.notifications': 2,
            'profile.default_content_settings.popups': 0,
            'profile.managed_default_content_settings.images': 1
          };
        }
        return launchOptions;
      });

      return config;
    },
  },
});
