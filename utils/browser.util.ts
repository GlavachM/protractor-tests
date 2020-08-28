import {browser, element, by, ExpectedConditions, protractor, ElementFinder} from 'protractor';

/**
 * @export
 * @class BrowserUtil
 */
export class BrowserUtil {
    constructor() {
    }

    /**
     * @static
     * @memberof BrowserUtil
     */
    static waitUntilReady = function (elm) {
        browser.wait(function () {
            return elm.isPresent();
        }, 1200000);
        browser.wait(function () {
            return elm.isDisplayed();
        }, 1200000,);
    };
    static waitUntilNotInDom = function (locator) {
        var EC = protractor.ExpectedConditions;
        browser.wait(function () {
            return EC.stalenessOf(locator);
        }, 600000);
        browser.wait(function () {
            return EC.invisibilityOf(locator);
        }, 600000);
    };
}
