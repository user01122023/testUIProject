import{ use } from '../playwright.config.js';

const pages = {
    mainPage: use.baseURL,
    registerPage: use.baseURL + 'index.php?route=account/register',
    contactsPage: use.baseURL + 'index.php?route=information/contact',
    loginPage: use.baseURL + 'index.php?route=account/login',
    accountPage: use.baseURL + 'index.php?route=account/account',
    forgottenPage: use.baseURL + 'index.php?route=account/forgotten',
    aboutUsPage: use.baseURL + 'index.php?route=information/information&information_id=4',
    deliveryInformationPage: use.baseURL + 'index.php?route=information/information&information_id=6',
    privacyPolicyPage: use.baseURL + 'index.php?route=information/information&information_id=3',
    termsAndConditionsPage: use.baseURL + 'index.php?route=information/information&information_id=5',
    contactUsPage: use.baseURL + 'index.php?route=information/contact',
    productReturnsPage: use.baseURL + 'index.php?route=account/return/add',
    productPage: use.baseURL + 'index.php?route=product/product&product_id=42'
   }

export{ pages }