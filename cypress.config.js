const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: false,
    chromeWebSecurity: false,
    env: {
      baseUrl:
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    },
  },
});
