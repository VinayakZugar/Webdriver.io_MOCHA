const login = require('./basic.spec');
const HomePom = require('../pageobjects/HomePage');
const cartPom = require('../pageobjects/cart');
const CustInfo = require('../pageobjects/Cust_Info')
const OrderCon = require('../pageobjects/Check_Overview')
const Fpage = require('../pageobjects/FinalPage')
describe('Check_Overview', async () => {
    it('TC_01_Check_user_is_able_to_goOn_OverviewPage', async () => {
        await HomePom.addtocartProd('backpack')
        await HomePom.intocartclick()
        await cartPom.checkout_click()
        await CustInfo.firatname('jdfn')
        await CustInfo.Lastname('sjbhd')
        await CustInfo.Zipcode('379865')
        await CustInfo.continuebtn()
        await expect(browser).toHaveUrlContaining('two.html')
        await expect(OrderCon.title).toHaveTextContaining('Checkout: Overview')
    });
    it('TC_02_Check_user_is_able_to_Purchase_their_order', async () => {
        await Fpage.FbtnCl()
        await expect(browser).toHaveUrlContaining('complete.html')
        await expect(OrderCon.title).toHaveTextContaining('Complete!')
        await expect(OrderCon.complete).toHaveTextContaining('Thank you for your order!')
    });
    it('TC_03_Check_user_is_able_to_Go_HomePage', async () => {
        await Fpage.backHome()
        await expect(browser).toHaveUrlContaining('inventory.html')
    });
    it('TC_04_Check_user_is_able_to_cancel_their_productOnOverviewPage', async () => {
        await HomePom.addtocartProd('backpack')
        await HomePom.intocartclick()
        await cartPom.checkout_click()
        await CustInfo.firatname('jdfn')
        await CustInfo.Lastname('sjbhd')
        await CustInfo.Zipcode('379865')
        await CustInfo.continuebtn()
        await OrderCon.cancelClick()
        await expect(browser).toHaveUrlContaining('inventory.html')
    });
});