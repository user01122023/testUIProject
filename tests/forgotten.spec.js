import { test, expect } from '@playwright/test';
import ForgottenPage from '../pages/forgotten';
import testData from '../data/testData';
import messages from '../data/messages';

const validEmail = testData.loginTestData.validEmail;
const validPassword = testData.loginTestData.validPassword;
const invalidEmail = testData.loginTestData.invalidEmail;
const invalidPassword = testData.loginTestData.invalidPassword;

test.describe('Forgotten password', () => {
  let forgottenPage;

  test.beforeEach(async ({ page }) => {
    forgottenPage = new ForgottenPage(page);
    await forgottenPage.gotoForgottenPage();
  });
  

  test(`reset password with valid e-mail`, async () => {
    await forgottenPage.doResetPassword(validEmail);
    await forgottenPage.resetWithValidEmail();
  });

  
  test(`reset password with invalid e-mail`, async () => {
    await forgottenPage.doResetPassword(invalidEmail);
    await forgottenPage.resetWithInvalidEmail(); 
  });

  test(`reset password with empty e-mail`, async () => {
    await forgottenPage.doResetPassword();
    await forgottenPage.resetWithEmptyEmail();
  })
  // exicting email

  

  
  

  
});
