import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login';
import testData from '../data/testData';
import messages from '../data/messages';

const validEmail = testData.loginTestData.validEmail;
const validPassword = testData.loginTestData.validPassword;
const invalidEmail = testData.loginTestData.invalidEmail;
const invalidPassword = testData.loginTestData.invalidPassword;

test.describe('Login', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
  });

  

  test(`successfull login`, async () => {
    await loginPage.doLogin(validEmail, validPassword);
    await loginPage.checkLoggedIn();
  });

  test(`failing login - invalid username`, async () => {
    await loginPage.doLogin(invalidEmail, validPassword);
    await loginPage.checkInvalidCredentials();
  });

  test(`failing login - invalid password`, async () => {
    await loginPage.doLogin(validEmail, invalidPassword);
    await loginPage.checkInvalidCredentials();
  });

  test(`failing login - invalid username and password`, async () => {
    await loginPage.doLogin(invalidEmail, invalidPassword);
    await loginPage.checkInvalidCredentials();
  });

  test(`failing login - empty fields - username and password`, async () => {
    await loginPage.doLogin('', '');
    await loginPage.checkInvalidCredentials();
  });

  test(`failing login messages`, async () => {
    for (let attempt =1; attempt <= 3; attempt++) {
      await loginPage.doLogin(invalidEmail, invalidPassword);
      await loginPage.checkInvalidCredentials();
      if (attempt = 4 ) {
        await loginPage.doLogin(invalidEmail, invalidPassword);
        await loginPage.checkWrong3Attempts();
      }
    }
  });
  test(`password input is displayed as bullets`, async () => {
    await loginPage.doLogin(validEmail, validPassword);
    await loginPage.passwordInBullets();
  });
  test('forgotten password link', async () => {
    await loginPage.forgottenPasswordLink();
  })

  
});
