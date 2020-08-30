import {browser, element, by, ExpectedConditions} from 'protractor';

export class loginPage {

    userName() {
        return element(by.css('[formcontrolname="username"]'));
    }

    userPassword() {
        return element(by.css('[type="password"]'));
    }

    signIn(){
        return element(by.css('[type="submit"]'));
    }

    errorMessage(){
        return element(by.css('[class="error ng-star-inserted"]'));
    }

    forgotPassword(){
        return element(by.css('[href="/access/forgot-password"]'));
    }

    emailAddress(){
        return element(by.css('[aria-invalid="false"]'));
    }

    sendButton(){
        return element(by.css('[type="submit"]'));
    }

    errorMessageOne(){
        return element(by.css('[class="error pb-4 ng-star-inserted"]'));
    }

    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} username Username to login as
     * @param {string} password Password to login as
     */
    
    login(loginData) {
        this.userName().sendKeys(loginData.username);
        this.userPassword().sendKeys(loginData.password);
        this.signIn().click();    
    }

    resetPassword(loginData){
        this.emailAddress().sendKeys(loginData.username);
        this.sendButton().click();
    }
}
