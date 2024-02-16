import { test, expect } from '@playwright/test';
import RegistrationPage from '../pages/registration';
import testData from '../data/testData';
import faker from 'faker';

test.describe('Registration Page Tests', () => {
  let page;
  let registrationPage;

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
        await expect(registrationPage.success_locator).toHaveText('Your Account Has Been Created!');
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_first_name_message).toHaveText('First Name must be between 1 and 32 characters!');
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
        await expect(registrationPage.success_locator).toHaveText('Your Account Has Been Created!');
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_last_name_message).toHaveText('Last Name must be between 1 and 32 characters!');
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
        await expect(registrationPage.success_locator).toHaveText('Your Account Has Been Created!');
            
      } else if (index === 3 || index === 4 || index === 8) {
        await expect(registrationPage.error_telephone_message).toHaveText('Telephone must be between 3 and 32 characters!');
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
        await expect(registrationPage.success_locator).toHaveText('Your Account Has Been Created!');
            
      } else if (index === 3 || index === 4) {
        await expect(registrationPage.error_password_message).toHaveText('Password must be between 4 and 20 characters!');
      } 
      
    });
  })


});
