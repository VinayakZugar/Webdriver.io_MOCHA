class OrderCon {
    get title() {
        return $('span.title')
    }
    get cancel() {
        return $('#cancel')
    }
    get complete() {
        return $('.complete-header')
    }
    async cancelClick() {
        await this.cancel.click()
    }
}
module.exports = new OrderCon();
