import { expect } from '@playwright/test';
import messages from '../data/messages';

class RegistrationPage {
  
      constructor(page) {
          this.page = page
          this.first_name_locator = page.getByPlaceholder('First Name')
          this.last_name_locator = page.getByPlaceholder('Last Name')
          this.email_locator = page.getByPlaceholder('E-Mail')
          this.telephone_locator = page.getByPlaceholder('Telephone')
          this.password_locator = page.locator("//input[@name='password']")
          this.confirm_password_locator = page.locator('//input[@name="confirm"]')
          this.agree_locator = page.getByRole('checkbox')
          this.continue_locator = page.getByRole('button', { name: 'Continue' })
          this.success_locator = page.getByRole('heading', { name: 'Your Account Has Been Created!' })
          this.error_first_name_message = page.getByText('First Name must be between 1')
          this.error_last_name_message = page.getByText('Last Name must be between 1')
          this.error_email_message = page.getByText('E-Mail Address does not')
          this.error_telephone_message = page.getByText('Telephone must be between 3')
          this.error_password_message = page.getByText('Password must be between 4')
      }
      async gotoRegistrationPage() {
          await this.page.goto('https://eurosmeta.com/index.php?route=account/register')
      }

      async fillFirstName(firstName) {
          await this.first_name_locator.fill(firstName)
      }
      async fillLastName(lastName) {
          await this.last_name_locator.fill(lastName)
      }
      async fillEmail(email) {
          await this.email_locator.fill(email)  
      }
      async fillTelephone(telephone) {
          await this.telephone_locator.fill(telephone)
      }
      async fillPassword(password) {
          await this.password_locator.fill(password)
      }
      async fillConfirmPassword(confirmPassword) {
          await this.confirm_password_locator.fill(confirmPassword)
      }
      async checkAgree() {
          await this.agree_locator.check()
      }
      async clickContinue() {
          await this.continue_locator.click()
      }

  
      async doRegistration(firstName, lastName, email, telephone, password, confirmPassword) {
          await this.first_name_locator.fill(firstName)
          await this.last_name_locator.fill(lastName)
          await this.email_locator.fill(email)
          await this.telephone_locator.fill(telephone)
          await this.password_locator.fill(password)
          await this.confirm_password_locator.fill(confirmPassword)
          await this.agree_locator.check()
          await this.continue_locator.click()
      }
     
      async successfullyRegistered() {
          await this.success_locator.click()
      }
    
      async doResetPassword(email) {
        await this.fillEmail(email)
        await this.continue_button_locator.click()
        await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=account/login')
        await expect(this.messagePanel_locator).toHaveText(messages.forgot_password.success)
      
  } 
}
  export default RegistrationPage