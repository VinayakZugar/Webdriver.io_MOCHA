const login = require('./basic.spec');
const HomePom = require('../pageobjects/HomePage');
const cartPom = require('../pageobjects/cart');
const CustInfo = require('../pageobjects/Cust_Info')

describe('Cust_Info', async () => {
    it('TC_01_to_verify_User_is_able_to_go_onCust_Info', async () => {
        await HomePom.addtocartProd('backpack')
        await HomePom.intocartclick()
        await cartPom.checkout_click()
        await expect(browser).toHaveUrlContaining('checkout-step-one.html')
    });
    it('TC_02_to_verify_Page_with_Valid_Cust_info', async () => {
        await CustInfo.firatname('raj')
        await CustInfo.Lastname('Yadav')
        await CustInfo.Zipcode('457899')
        await CustInfo.continuebtn()
        await expect(browser).toHaveUrlContaining('checkout-step-two.html')
        await browser.back()

    });
    it('TC_03_to_verify_Page_with_InValid_Cust_info', async () => {
        await CustInfo.firatname('79745')
        await CustInfo.Lastname('7857##')
        await CustInfo.Zipcode('djsdd')
        await CustInfo.continuebtn()
        await browser.back()
    });
    it('TC_04_to_verify_Page_with_Empty_Cust_info', async () => {
        await CustInfo.firatname('')
        await CustInfo.Lastname('')
        await CustInfo.Zipcode('')
        await CustInfo.continuebtn()
        await expect(browser).toHaveUrlContaining('checkout-step-one.html')
        await expect(CustInfo.error).toHaveTextContaining('First Name is required')
    });
    it('TC_05_to_verify_user_is_able_to_cancel_Their_product', async () => {
       await CustInfo.cancelBtn()
       await expect(browser).toHaveUrlContaining('cart.html')
    });
});