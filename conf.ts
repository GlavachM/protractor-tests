import { Config, browser } from 'protractor';
import { SpecReporter } from 'jasmine-spec-reporter';

export let config: Config = {
  allScriptsTimeout: 110000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 150000,
    print: function() {}
  },

  maxSessions: 1,

  noGlobals: true,

  onPrepare: () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 600000;
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayErrorMessages: true, displaySuccessful: true, displayFailed: true} }));

    browser.driver.manage().window().setSize(1200, 900);
    browser.driver.get("http://internal.admin.v2.lms-development.penceo.com/access/login");
  },
    specs: [ 'specs/**/login.spec.js' ],

  seleniumAddress: 'http://localhost:4444/wd/hub'
};
