import {browser, element, ExpectedConditions, by} from 'protractor';
import {loginPage} from '../pages/loginPage.po';
import {BrowserUtil} from "../utils/browser.util";
import {dataProvider} from "../data/dataProvider";

describe('Login', () => {
    const loginData = require('../../data/login.json');
    const loginPg = new loginPage();

    beforeEach(() => {
        browser.waitForAngularEnabled(false);
    });
    afterEach(() => {
        browser.refresh();
    });

    it('Unsuccessful login', (done) => {
        BrowserUtil.waitUntilReady(loginPg.userName());
        loginPg.login(loginData.login);
        BrowserUtil.waitUntilReady(loginPg.errorMessage());
            expect(loginPg.errorMessage().isDisplayed()).toBe(true, 'Wrong username or password. Please try again');
            done();
    });

    it('Forgot password', (done) => {
        BrowserUtil.waitUntilReady(loginPg.forgotPassword());
        loginPg.forgotPassword().click();
        BrowserUtil.waitUntilReady(loginPg.emailAddress());
        loginPg.resetPassword(loginData.login);
        BrowserUtil.waitUntilReady(loginPg.errorMessageOne());
            expect(loginPg.errorMessageOne().isDisplayed()).toBe(true, 'Unrecognized email address.');
            done();
    });
});