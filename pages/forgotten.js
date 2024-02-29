import { expect } from '@playwright/test';
import messages from '../data/messages';
import { pages } from '../data/pagesURLs';

class ForgottenPage {

    constructor(page) {
        this.page = page
        this.forgotten_password_email_locator = page.locator('#content').getByPlaceholder('E-Mail Address');
        this.continue_button_locator = page.getByRole('button', { name: 'Continue' });
        this.messagePanel_locator = page.locator("//*[@id='account-login']/div[1]")
    }

    async gotoForgottenPage() {
        await this.page.goto(pages.forgottenPage)
    }
    
    async fillEmail(email) {
        await this.forgotten_password_email_locator.fill(email)
    }
    
    async doResetPassword(email) {
        await this.fillEmail(email)
        await this.continue_button_locator.click()
        await expect(this.page).toHaveURL(pages.loginPage)
        await expect(this.messagePanel_locator).toHaveText(messages.forgot_password.success)
        
    }
    async resetWithValidEmail() {
        await expect(this.messagePanel_locator).toHaveText(messages.forgot_password.success)
    }
    
    async resetWithInvalidEmail() {
        await expect(this.messagePanel_locator).toHaveText(messages.forgot_password.invalid)
    }
    async resetWithEmptyEmail() {
        await expect(this.messagePanel_locator).toHaveText(messages.forgot_password.invalid)
    }
    
    
    
}
export default ForgottenPage;