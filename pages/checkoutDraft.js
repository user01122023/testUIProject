import { expect } from '@playwright/test';
import messages from '../data/messages';
import { pages } from '../data/pagesURLs'; 

class CheckoutPage {

  constructor(page) {
    this.page = page
    this.checkout = page.getByRole('link', { name: ' Checkout' })
    this.guest_checkout = page.getByLabel('Guest Checkout')
    this.continue = page.getByRole('button', { name: 'Continue' })
    this.first_name = page.getByPlaceholder('First Name')
    this.last_name = page.getByPlaceholder('Last Name')
    this.email = page.getByRole('textbox', { name: '* E-Mail' })
    this.telephone = page.getByPlaceholder('Telephone')
    this.address_1 = page.getByPlaceholder('Address 1')
    this.city = page.getByPlaceholder('City')
    this.post_code = page.getByPlaceholder('Post Code')
    this.country = page.getByLabel('Country')
    this.region = page.getByLabel('Region / State')
    this.continue_1 = page.getByRole('button', { name: 'Continue' })
    this.checkbox = page.getByRole('checkbox')
    this.continue_2 = page.getByRole('button', { name: 'Continue' })
    this.total = page.locator('tfoot').getByRole('cell', { name: '$528.00' })
    this.checkout_confirm = page.getByRole('button', { name: 'Confirm Order' })
    this.message = page.getByRole('heading', { name: 'Your order has been placed!' })
    this.checkout_confirm = page.getByRole('heading', { name: 'Your order has been placed!' })    
  }
    
  }
  async gotoProductPage() {
    await this.page.goto(pages.productPage)
  }
  
  async gotoCheckoutPage() {
      
  }

export default CheckoutPage