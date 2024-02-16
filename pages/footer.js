import { expect } from '@playwright/test';

class FooterPage {
  constructor (page) {
    this.page = page;
    this.information_locator = page.getByRole('heading', { name: 'Information' });
    this.about_us_locator = page.locator("//a[contains(text(), 'About Us')]");
    this.delivery_information_locator = page.locator("//a[contains(text(), 'Delivery Information')]");
    this.privacy_policy_locator = page.locator("//a[contains(text(), 'Privacy Policy')]");
    this.terms_and_conditions_locator = page.locator("//a[contains(text(), 'Terms & Conditions')]");
    this.customer_service_locator = page.getByRole('heading', { name: 'Customer Service' });
    this.contact_us_locator = page.locator("//a[contains(text(), 'Contact Us')]");
    this.returns_locator = page.locator("//a[contains(text(), 'Returns')]");
    //this.product_returns_locator = page.getByRole('heading', { name: 'Product Returns' });
    this.site_map_locator = page.locator("//a[contains(text(), 'Site Map')]");
    this.extras_locator = page.getByRole('heading', { name: 'Extras' });
    this.brands_locator = page.locator("//a[contains(text(), 'Brands')]");
    //this.find_your_favorite_brand_locator = page.getByRole('heading', { name: 'Find Your Favorite Brand' });
    this.gift_certificates_locator = page.locator("//a[contains(text(), 'Gift Certificates')]");
    //this.purchase_a_gift_certificate_locator = page.getByRole('heading', { name: 'Purchase a Gift Certificate' });
    this.affiliate_locator = page.locator("//a[contains(text(), 'Affiliate')]");
    //this.affiliate_program_locator = page.getByRole('heading', { name: 'Affiliate Program' });
    this.my_account_locator = page.getByRole('heading', { name: 'My Account' });
    this.order_history_locator = page.getByRole('link', { name: 'Order History' });
    this.new_customer_locator = page.getByRole('heading', { name: 'New Customer' });
    this.wish_list_locator = page.getByRole('link', { name: 'Wish List', exact: true });
    this.newsletter_locator = page.getByRole('link', { name: 'Newsletter' });
    this.opencart_locator = page.getByRole('link', { name: 'OpenCart' });
    this.the_best_free_and_open_source_ecommerce_locator = page.getByRole('heading', { name: 'The best FREE and open-source' });
    this.powered_by_opencart_your_opencart_locator = page.getByRole('link', { name: 'Powered By OpenCart Your' });
    this.opencart_locator = page.getByRole('link', { name: 'OpenCart' });
  }

  async gotoHomePage() {
    await this.page.goto('https://eurosmeta.com')
  }

  async checkHeaderInformation() {      
    await this.information_locator.waitFor({ state: 'visible' });  
    await expect(this.information_locator).toHaveText('Information')
       
  }
  async checkLinkAboutUs() {
    await this.about_us_locator.waitFor({ state: 'visible' });
    await this.about_us_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=information/information&information_id=4')
    await expect(this.page).toHaveTitle('About Us')   
  }

  async checkLinkDeliveryInformation() {
    await this.delivery_information_locator.waitFor({ state: 'visible' });
    await this.delivery_information_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=information/information&information_id=6')
    await expect(this.page).toHaveTitle('Delivery Information')   
  }

  async checkLinkPrivacyPolicy() {
    await this.privacy_policy_locator.waitFor({ state: 'visible' });
    await this.privacy_policy_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=information/information&information_id=3')
    await expect(this.page).toHaveTitle('Privacy Policy')   
  }

  async checkLinkTermsAndConditions() {
    await this.terms_and_conditions_locator.waitFor({ state: 'visible' });
    await this.terms_and_conditions_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=information/information&information_id=5')
    await expect(this.page).toHaveTitle('Terms & Conditions')
  }

  async checkLinkContactUs() {
    await this.contact_us_locator.waitFor({ state: 'visible' });
    await this.contact_us_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=information/contact')
    await expect(this.page).toHaveTitle('Contact Us')
  }

  async checkLinkReturns() {
    await this.returns_locator.waitFor({ state: 'visible' });
    await this.returns_locator.click()
    await expect(this.page).toHaveURL('https://eurosmeta.com/index.php?route=account/return/add')
    await expect(this.page).toHaveTitle('Product Returns')
  }

}

export default FooterPage