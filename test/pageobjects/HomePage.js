class HomePom {
    get remove(){
        return $('#remove-sauce-labs-backpack')
    }
    get addtocart() {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get filter() {
        return $('.product_sort_container')
    }
    get inventoryname() {
        return $$('.inventory_item_name')
    }
    get intocart() {
        return $('.shopping_cart_container')
    }
    get prods() {
        return $('.shopping_cart_badge')
    }
    async removeProd(){
        await this.remove.click()
    }
    async intocartclick() {
        await this.intocart.click()
    }
    async addtocartProd(Pname) {
        await $("#add-to-cart-sauce-labs-" + Pname).click()
    }
    async proddesc(itemid) {
        await $("#item_" + itemid + "_title_link").click()
    }
    async filterselc(filterText) {
        await this.filter.selectByVisibleText(filterText)
    }

}
module.exports = new HomePom();