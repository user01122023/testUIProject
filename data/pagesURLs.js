import{ use } from '../playwright.config.js';

const pages = {
    mainPage: use.baseURL,
    registerPage: use.baseURL + 'index.php?route=account/register',
    contactsPage: use.baseURL + 'index.php?route=information/contact',
    accountPage: use.baseURL + 'index.php?route=account/login',
   }

export{ pages }