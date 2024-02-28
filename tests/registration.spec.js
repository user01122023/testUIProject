import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/registration';
import EmailPage from '../pages/mail';
import testData from '../data/testData';
import messages from '../data/messages';
import faker from 'faker';
import { beforeAll, afterAll } from '../hooks/setup';



test.beforeAll(beforeAll);
test.afterAll(afterAll);

test.describe('Registration Page Tests', () => {
  let page;
  let registrationPage;
  let mail;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    registrationPage = new RegistrationPage(page);
    await registrationPage.gotoRegistrationPage();
    
  });

  test.afterEach(async () => {
    await page.close();
  });

  const { lastName, telephone, password, confirmPassword } = testData.user2;

  // Iterate over each firstName value
  testData.user2.firstName.forEach((firstName, index) => {
    test(`Registration with firstName "${firstName}"`, async () => {
      
      await registrationPage.doRegistration(
        firstName,
        lastName[0],
        faker.internet.email(),
        telephone[0],
        password[0], 
        confirmPassword[0] 
      );
      if (index === 0 || index === 1 || index === 2 || index === 5 || index === 6 || index === 7) {
        await expect(registrationPage.success_locator).toHaveText(messages.registration.success);
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_first_name_message).toHaveText(messages.registration.invalidFirstName);
      } 
      
    });
  });

  

  // Iterate over each lastName value
  testData.user2.lastName.forEach((lastName, index) => {
    test(`Registration with lastName "${lastName}"`, async () => {
      await registrationPage.doRegistration(
        testData.user2.firstName[0],
        lastName,
        faker.internet.email(),
        telephone[0],
        password[0], 
        confirmPassword[0] 
      );
      if (index === 0 || index === 1 || index === 2 || index === 5 || index === 6 || index === 7) {
        await expect(registrationPage.success_locator).toHaveText(messages.registration.success);
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_last_name_message).toHaveText(messages.registration.invalidLastName);
      } 
      
    });
  });

  // Iterate over each telephone value
  testData.user2.telephone.forEach((telephone, index) => {
    test(`Registration with telephone "${telephone}"`, async () => {
      await registrationPage.doRegistration(
        testData.user2.firstName[0],
        lastName[0],
        faker.internet.email(),
        telephone,
        password[0], 
        confirmPassword[0] 
      );
      if (index === 0 || index === 1 || index === 2 || index === 5 || index === 6 || index === 7) {
        await expect(registrationPage.success_locator).toHaveText(messages.registration.success);
            
      } else if (index === 3 || index === 4 || index === 8) {
        await expect(registrationPage.error_telephone_message).toHaveText(messages.registration.invalidTelephone);
      } 
      
    });
  });

  // Iterate over each password value
  testData.user2.password.forEach((password, index) => {
    test(`Registration with password "${password}"`, async () => {
      await registrationPage.doRegistration(
        testData.user2.firstName[0],
        lastName[0],
        faker.internet.email(),
        telephone[0],
        password, 
        password 
      );
      if (index === 0 || index === 1 || index === 2 || index === 5 || index === 6 || index === 7) {
        await expect(registrationPage.success_locator).toHaveText(messages.registration.success);
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_password_message).toHaveText(messages.registration.invalidPassword);
      } 
      
    });
  });
  testData.user3.email.forEach((email, index) => {
    let testName = `Registration with email "${email}"`;
    if (index === 3) { //index 3 corresponds to the repeated email
        testName = `Registration with repeated email "${email}"`;
    }
    test(testName, async () => {
      await registrationPage.doRegistration(
        testData.user2.firstName[0],
        lastName[0],
        email,
        telephone[0],
        password[0], 
        confirmPassword[0] 
      );
    
      if (index === 0 || index === 4 || index === 5) {
        await expect(registrationPage.success_locator).toHaveText(messages.registration.success);
        

      } else if (index === 2) {
        await expect(registrationPage.error_email_message).toHaveText(messages.registration.invalidEmail);
        
      } else if (index === 3) {
        await expect(registrationPage.warning_email_message).toHaveText(messages.registration.duplicatedEmail);
      }
        else if (index === 1 || index === 6) {            
            await page.screenshot({ path: 'data/invalidEmail-'+email+'.png', fullPage: true });                  
        }
    });
 
  });
});

/*
         const page = await registrationPage.page;
         page.on('dialog', dialog => dialog.accept());
         await page.getByRole('button', { name: 'Continue' }).click();   */
         
         
         /*const page = await registrationPage.page;
         let dialogMessage = '';

         page.on('dialog', async dialog => {
         dialogMessage = dialog.message();
         await dialog.defaultValue();
         await dialog.page(); 
         await dialog.accept(); // Accept the dialog
        });

         await page.getByRole('button', { name: 'Continue' }).click();
         await expect(dialogMessage).toContain('Please include an @ in the email address');*/
 