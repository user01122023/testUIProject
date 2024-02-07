import { logo } from './locators';
import { expect } from '@playwright/test';

 /** Метод открывает страницу
 * @param {*} page - дефолтный параметр
 * @param {String} targetPage - целевой адрес страницы
 */ 
export async function openPage(page, targetPage){
    try {
        let response = await page.goto(`${targetPage}`);
        if (response && response.status() == 404) throw new Error('Страница не загрузилась или вернула ошибку 404');
        //await page.waitForLoadState('networkidle'); // Ожидание полной загрузки страницы
        await page.waitForLoadState('load');
    } catch (error) {
        throw new Error('Произошла ошибка при загрузке страницы:', error);
    }
   }


/** Метод проверяет наличие логотипа
 * @param {*} page - дефолтный параметр
 */
export async function checkLogo(page){
  const element = await page.$(logo.img); //Поиск селектора на странице
    if (element) {
      true  ;

  const link = await page.$eval(logo.imgLink, link => link.href); //Получение ссылки
    if (link) {
  
      const response = await page.goto(link, { timeout: 5000, waitUntil: 'domcontentloaded' }).catch(() => null); //Проверка валидности ссылки
        if (response) {
          true;
        } else {
          throw new Error(`${link} - невалидная ссылка`)
      }
     } else {
       throw new Error('Ссылка не найдена')
     }

     } else {
      throw new Error('Селектор не найден на странице')
  }
}

/**
 * Метод проверки наличия и кликабельности элемента
 * @param {*} page 
 * @param {String} button - селектор
 * @param {Boolean} clickable - признак кликабельности элемента, по умолчанию true
 */
export async function checkButton(page, button, clickable = true){
  const element = await page.$(`${button}`); //Поиск селектора на странице

  await expect(`${button}`).toBeVisible()
  console.log(`${button}`)
  //console.log(await page.$(`${button}`))
    /*
  if (element) {
      true ;
    } else {
      throw new Error(`Селектор ${button} не найден на странице`)
    }
  const isClickable = await element.isIntersectingViewport();//проверка кликабельности
    if (isClickable && clickable){
      true;
    } else {
      throw new Error(`Элемент ${button} не сщщтветсвует условиям кликабельности`)
    } 
    */
  }
