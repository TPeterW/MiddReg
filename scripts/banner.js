require('chromedriver');
const webdriver = require('selenium-webdriver');

console.log("Hello world");

const driver = new webdriver.Builder()
    .withCapabilities(webdriver.Capabilities.chrome())
	.build();

console.log(driver);