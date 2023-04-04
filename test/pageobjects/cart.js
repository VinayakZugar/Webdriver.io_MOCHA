class cartPom{
    get inventoryitem(){
        return $('#item_4_title_link')
    }
    get remove(){
        return $('#remove-sauce-labs-backpack')
    }
    get continueShop(){
        return $('#continue-shopping')
    }

    get checkout(){
        return $('#checkout')
    }
    async continueShopclick(){
        await this.continueShop.click()
    }
    async checkout_click(){
        await this.checkout.click()
    }
    async checkoutclick(){
        await this.continueShop.click()
    }
    async removecheckout(){
        await this.remove.click()
    }
}
module.exports = new cartPom();