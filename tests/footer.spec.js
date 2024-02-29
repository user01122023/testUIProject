import { test, expect } from '@playwright/test';
import FooterPage from '../pages/footer';



test.describe('Forgotten password', () => {
  let footerPage;

  test.beforeEach(async ({ page }) => {
    footerPage = new FooterPage(page);
    await footerPage.gotoHomePage();
  });

  test(`check header information`, async () => {
    await footerPage.checkHeaderInformation();
  });

  test(`check link About Us`, async () => {
    await footerPage.checkLinkAboutUs();
  });

  test('check link Delivery Information', async () => {
    await footerPage.checkLinkDeliveryInformation();
  });

  test('check link Privacy Policy', async () => {
    await footerPage.checkLinkPrivacyPolicy();
  });

  test('check link Terms & Conditions', async () => {
    await footerPage.checkLinkTermsAndConditions();
  })

  test('check link Contact Us', async () => {
    await footerPage.checkLinkContactUs();
  });

  test('check link Returns', async () => {
    await footerPage.checkLinkReturns();
  })
  
});
