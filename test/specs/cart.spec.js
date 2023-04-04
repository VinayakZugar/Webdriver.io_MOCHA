const login = require('./basic.spec');
const HomePom = require('../pageobjects/HomePage');
const cartPom = require('../pageobjects/cart');

describe('Cart', () => {
    it('TC_01_verfying_User_is_able_to_Go_in_Cart_page', async() => {
        await HomePom.addtocartProd('backpack')
        await HomePom.intocartclick()
        await expect(cartPom.inventoryitem).toBeDisplayed()
        await expect(browser).toHaveUrlContaining('cart.html')
    });

    it('TC_02_verfying_User_is_able_to_goForCheckout', async() => {
        await cartPom.checkout_click()
        await expect(browser).toHaveUrlContaining('checkout-step-one.html')
        await browser.back()
    });
    it('TC_03_verfying_User_is_able_to_removeTheirProdIntoCart', async() => {
        await cartPom.removecheckout()
        await expect(cartPom.inventoryitem).not.toBeDisplayed()
    });
    it('TC_04_verfying_User_is_able_to_do_continue_with_Shopping', async() => {
        await cartPom.continueShopclick()
        await expect(browser).toHaveUrlContaining('inventory.html')
        await HomePom.addtocartProd('backpack')
        await expect(HomePom.prods).toHaveTextContaining('1')
        await HomePom.intocartclick()
        await expect(browser).toHaveUrlContaining('cart.html')
    });
});