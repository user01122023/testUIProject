import { test, expect } from '@playwright/test';
import CheckoutPage from '../pages/checkout';
import messages from '../data/messages';

test.describe('Checkout', () => {
    let checkoutPage;
    

    test.beforeEach(async ({ page }) => {
        checkoutPage = new CheckoutPage(page);
        await checkoutPage.gotoCheckoutPage();
    });

    test(`checkout with filled mandatory fields`, async ({ page }) => {
        await checkoutPage.guest_checkout.check();
        await checkoutPage.continue.click();
        await checkoutPage.first_name.fill('test');
        await checkoutPage.last_name.fill('test');
        await checkoutPage.email.fill('test@tmail.com');
        await checkoutPage.telephone.fill('123456789');
        await checkoutPage.address_1.fill('test');
        await checkoutPage.city.fill('test');
        await checkoutPage.post_code.fill('12345');
        await checkoutPage.country.click();
        await checkoutPage.region.click();
        await checkoutPage.continue_1.click();
        await checkoutPage.checkbox.check();
        await checkoutPage.continue_2.click();
        await checkoutPage.checkout_confirm.click();
        
        await expect(checkoutPage.message).toBeVisible();
        await expect(checkoutPage.message).toContainText(messages.checkout.success);
    })
