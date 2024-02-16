import{ use } from '../playwright.config.js';

const pages = {
    mainPage: use.baseURL,
    registerPage: use.baseURL + 'index.php?route=account/register',
    contactsPage: use.baseURL + 'index.php?route=information/contact',
    loginPage: use.baseURL + 'index.php?route=account/login',
    accountPage: use.baseURL + 'index.php?route=account/account',
    forgottenPage: use.baseURL + 'index.php?route=account/forgotten',

   }

export{ pages }