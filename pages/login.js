import { expect } from '@playwright/test';
import messages from '../data/messages';

class LoginPage {

    constructor(page) {
        this.page = page
        this.email_locator = page.getByPlaceholder('E-Mail Address')
        this.password_locator = page.getByPlaceholder('Password')
        this.password_input_locator = page.locator('//input[@type="password"]')
        this.login_button_locator = page.getByRole('button', { name: 'Login' })
        this.messagePanel_locator = page.locator("//*[@id='account-login']/div[1]")
        this.forgotten_password_link_locator = page.locator('#content').getByRole('link', { name: 'Forgotten Password' });
        this.forgotten_password_email_locator = page.locator('#content').getByPlaceholder('E-Mail Address');
    }

    async gotoLoginPage() {
        await this.page.goto('https://eurosmeta.com/index.php?route=account/login')
    }
    
    async fillEmail(email) {
        await this.email_locator.fill(email)
    }
    async fillPassword(password) {
        await this.password_locator.fill(password)
    }
    async doLogin(email, password) {
        await this.fillEmail(email)
        await this.fillPassword(password)
        await this.login_button_locator.click()
    }
    async checkLoggedIn() {
        await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=account/account')
        await expect(this.page).toHaveTitle('My Account')   
    }
    async checkInvalidCredentials() {
        await expect(this.messagePanel_locator).toHaveText(messages.login.invalid)
    }
    async checkWrong3Attempts() {
        await expect(this.messagePanel_locator).toHaveText(messages.login.wrong_3_attempts)
    }
    async passwordInBullets() {
        await expect(this.password_input_locator).toHaveAttribute('type', 'password')
    }
    async forgottenPasswordLink() {
        await this.forgotten_password_link_locator.click()
        await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=account/forgotten')
    }
    async restoreForgottenPassword() {
        await this.forgotten_password_link_locator.click()
        await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=account/forgotten')
        await this.forgotten_password_email_locator.fill(email)
        
    }
}
export default LoginPage;