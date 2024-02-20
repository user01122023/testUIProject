import { expect } from '@playwright/test';
import messages from '../data/messages';
import testData from '../data/testData';

class EmailPage {
  constructor (page) {
    this.page = page
    this.email_locator = page.getByPlaceholder('Email')  
    this.password_locator = page.getByPlaceholder('Password')
    this.login_button_locator = page.locator("//a[@class='btn btn-default submit' ]");
    this.private_team_inbox_locator = page.getByRole('link', { name: 'Private Team Inbox' })
    this.email_presense_locator = page.locator("//tr[@ng-repeat='email in emails'][1]");
    //this.email_presense_locator = page.locator("//tr[@ng-repeat='email in emails'] contains text()testData.user3.email[0]");
    this.email_contents_locator = page.frameLocator('iframe[name="texthtml_msg_body"]').getByText('Welcome and thank you for registering at Your Store!')
  }
async gotoEmailPage() {
  await this.page.goto('https://www.mailinator.com/');
  await this.page.locator('#menu-item-7937').getByRole('link', { name: 'LOGIN' }).click();
}

async doLoginEmailPage(email, password) {
  await this.email_locator.fill('lidavoj417@ricorit.com');
  await this.password_locator.fill('asdfg12345');
  await this.login_button_locator.click();
}

async checkEmailPresenceAndContents() {
  await this.private_team_inbox_locator.click();
  await this.email_presense_locator.click();
  await this.email_contents_locator.click();
}
async verifyEmailContentsRegistration() {
  await expect(this.email_contents_locator).toContainText(messages.registration.inEmailBoxMessageVerification);
}
}

export default EmailPage


