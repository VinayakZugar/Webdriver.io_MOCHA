class Fpage {
    get Fbtn() {
        return $('#finish')
    }
    async FbtnCl() {
        await this.Fbtn.click()
    }
    get backH() {
        return $('#back-to-products')
    }

    async backHome() {
        await this.backH.click()
    }
}
module.exports = new Fpage();