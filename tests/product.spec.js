import { test, expect } from '@playwright/test';
import ProductPage from '../pages/product';
import messages from '../data/messages';

test.describe('Product', () => {
    let productPage;
    

    test.beforeEach(async ({ page }) => {
        productPage = new ProductPage(page);
        await productPage.gotoProductPage();
    });

    test(`add product to cart with filled mandatory fields`, async ({ page }) => {
        await productPage.radio[0].check();
        await productPage.checkbox[0].check();
        await productPage.text_input.fill('testtest');
        await productPage.select[0];
        await productPage.text_area.fill('testtesttesttest');
        await productPage.upload_file.click();

        await page.setInputFiles('input[type=file]', 'D:/Test_automation/testUIProject/tests/Upload.png');

        await productPage.date.fill('2022-01-01');
        await productPage.time.fill('12:00');
        await productPage.datetime.fill('2022-01-01 12:00');
        await productPage.qty.fill('2');
        await productPage.add_to_cart.click();
        await expect(productPage.added_to_success_message).toBeVisible();
        await expect(productPage.added_to_success_message).toContainText(messages.product.success);
        
        
    });
    
    })






    test.describe('Add product to cart with different Radio, Checkbox, and Select indexes', () => {
        let productPage;
        test.beforeEach(async ({ page }) => {
            productPage = new ProductPage(page);
            await productPage.gotoProductPage();
        });

        const testCases = [
            { type: 'radio', indexes: [0, 1, 2] },
            { type: 'checkbox', indexes: [0, 1, 2, 3] },
            { type: 'select', indexes: [0, 1, 2, 3] }
        ];
    
        testCases.forEach(({ type, indexes }) => {
            indexes.forEach(async (index) => {
                test(`Type: ${type}, Index: ${index}`, async ({ page }) => {
                                       
                    switch (type) {
                        case 'radio':
                            if (productPage.radio[index]) {
                                await productPage.radio[index].check();
                            } else {
                                console.log(`Radio ${index} element not found.`);
                            }
                            break;
                        case 'checkbox':
                            if (productPage.checkbox[index]) {
                                await productPage.checkbox[index].check();
                            } else {
                                console.log(`Checkbox ${index} element not found.`);
                            }
                            break;
                        case 'select':
                            if (productPage.select[index]) {
                                await productPage.select[index]; 
                            } else {
                                console.log(`Select ${index} element not found.`);
                            }
                            break;
                        default:
                            console.log('Invalid type.');
                    }
    
                   
                    // common test steps for all test cases
                    await productPage.text_input.fill('testtest');
                    await productPage.text_area.fill('testtesttesttest');
                    await productPage.upload_file.click();
                    await page.setInputFiles('input[type=file]', 'D:/Test_automation/testUIProject/tests/Upload.png');
                    await productPage.date.fill('2022-01-01');
                    await productPage.time.fill('12:00');
                    await productPage.datetime.fill('2022-01-01 12:00');
                    await productPage.qty.fill('2');
                    await productPage.add_to_cart.click();
                    await expect(productPage.added_to_success_message).toBeVisible();
                    await expect(productPage.added_to_success_message).toContainText(messages.product.success);
                });
            });
        });
    });   



    