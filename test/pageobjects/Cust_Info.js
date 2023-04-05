class CustInfo {

    get firstN() {
        return $('#first-name')

    }
    get lastN() {
        return $('#last-name')
    }
    get zipC() {
        return $('#postal-code')
    }
    get continue(){
        return $('#continue')
    }
    get cancel(){
        return $('#cancel')
    }
    get error(){
        return $('h3[data-test="error"]')
    }

    async firatname(Fname) {
        await this.firstN.setValue(Fname)
    }
    async Lastname(Lname) {
        await this.lastN.setValue(Lname)
    }

    async Zipcode(code) {
        await this.zipC.setValue(code)
    }

    async continuebtn(){
        await this.continue.click()
    }
    async cancelBtn(){
        await this.cancel.click()
    }
    
    
}
module.exports = new CustInfo();