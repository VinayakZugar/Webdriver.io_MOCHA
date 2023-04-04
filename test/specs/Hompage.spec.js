const login = require('./basic.spec')
const HomePom = require('../pageobjects/HomePage')
describe('Hompage', async () => {

    it('TC_01_Verifying_Homepage', async () => {
        await browser.maximizeWindow()
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    });

    it('TC_02_Verifying_user_is_able_to_go_on_product_description', async () => {
        await HomePom.proddesc('4')
        await expect(browser).toHaveUrlContaining('item.html')
        await browser.back()
    });

    it('TC_03_Verifying_user_is_able_to_add_product', async () => {
        await HomePom.addtocartProd('backpack')
        await expect(HomePom.prods).toHaveTextContaining('1')
        await HomePom.intocartclick()
        await expect(browser).toHaveUrlContaining('cart.html')
        await browser.back()
    });
    it('TC_04_Verifying_user_is_able_to_add_filter', async () => {
        await HomePom.filterselc('Name (Z to A)')
        await HomePom.filterselc('Name (A to Z)')
        await HomePom.filterselc('Price (high to low)')
        await HomePom.filterselc('Price (low to high)')
    });
});