import { test, expect } from '@playwright/test';
import { openPage, checkLogo, checkButton } from '../data/methods';
import { pages as pg } from '../data/pagesURLs';
import { buttons as bn} from '../data/locators';


test.describe('checking pages', () =>{
  test('Check open MainPage', async ({ page }) => {
     await openPage(page, pg.mainPage);
     await checkLogo(page);
    });

  test('Check open RegisterPage', async ({ page }) => {
     await openPage(page, pg.registerPage);
     await checkLogo(page);
    });

  test('Check open contactsPage', async ({ page  }) => {
     await openPage(page, pg.contactsPage);
     await checkButton(page, bn.contactsInPage)
     await checkLogo(page);
    });

  test('Check open accountPage', async ({ page }) => {
    await openPage(page, pg.accountPage);
    await checkButton(page, bn.accountInPage)
    await checkLogo(page);
    });    
})

