import { expect } from '@playwright/test';
import messages from '../data/messages';
import { pages } from '../data/pagesURLs'; 

class ProductPage {

  constructor(page) {
    this.page = page
    this.radio_small = page.getByLabel('Small\n(+$12.00)')
    this.radio_medium = page.getByLabel('Medium\n(+$24.00)')
    this.radio_large = page.getByLabel('Large\n(+$36.00)')
    this.radio = [this.radio_small, this.radio_medium, this.radio_large]
    this.checkbox_1 = page.getByLabel('Checkbox 1\n(+$12.00)')
    this.checkbox_2 = page.getByLabel('Checkbox 2\n(+$24.00)')
    this.checkbox_3 = page.getByLabel('Checkbox 3\n(+$36.00)')
    this.checkbox_4 = page.getByLabel('Checkbox 4\n(+$48.00)')
    this.checkbox = [this.checkbox_1, this.checkbox_2, this.checkbox_3, this.checkbox_4]
    this.text_input = page.getByPlaceholder('Text', { exact: true })
    this.select_red = page.getByLabel('Select').selectOption('4')
    this.select_green = page.getByLabel('Select').selectOption('1')
    this.select_blue = page.getByLabel('Select').selectOption('3')
    this.select_yellow = page.getByLabel('Select').selectOption('2')
    this.select = [this.select_red, this.select_green, this.select_blue, this.select_yellow]
    this.text_area = page.getByPlaceholder('Textarea')
    this.upload_file = page.getByRole('button', { name: 'Upload File' })
    this.date = page.locator('//*[@id="input-option219"]')
    this.time = page.locator('//*[@id="input-option221"]')
    this.datetime = page.locator('//*[@id="input-option220"]')
    this.qty = page.getByLabel('Qty')
    this.add_to_cart = page.getByRole('button', { name: 'Add to Cart', exact: true })
    this.added_to_success_message = page.locator(`//*[@id="product-product"]/div[1]`)

    
    
  }
  async gotoProductPage() {
    await this.page.goto(pages.productPage)
  }
  
}

export default ProductPage


