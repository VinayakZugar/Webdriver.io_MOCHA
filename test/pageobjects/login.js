class loginPage {

    get username() {
        return $('#user-name')
    }

    get password() {
        return $('#password')
    }

    get loginbtn() {
        return $('#login-button')
    }
    get error() {
        return $("h3[data-test='error']")
    }

    async usernamevalue(user) {
        await this.username.setValue(user)
    }

    async passwordValue(pass) {
        await this.password.setValue(pass)

    }

    async errormsg() {
        await this.error.getText()
    }

    async btn() {
        await this.loginbtn.click()
    }

}

module.exports = new loginPage();