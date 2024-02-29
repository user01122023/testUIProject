import { test, expect } from '@playwright/test';

import EmailPage from '../pages/mail';


let page;
let mail;

test ('check email contents', async ({ page }) => {
    const mail = new EmailPage(page);
    await mail.gotoEmailPage();
    await mail.doLoginEmailPage('lidavoj417@ricorit.com', 'asdfg12345');
    await mail.checkEmailPresenceAndContents();
    await mail.verifyEmailContentsRegistration();
})