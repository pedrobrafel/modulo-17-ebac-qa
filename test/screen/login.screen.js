class menuLogin {
    get #urlLoja() { return $('android.widget.EditText') }
    get #continue() { return $('id:bottom_button') }
    get #continueComCredenciais () { return $('id:login_site_creds') }
    get #username() { return $('android=new UiSelector().text("Username")') }
    get #password() { return $('android=new UiSelector().text("Password")') }
    get #senha2fa() { return $('id:login_enter_password') }

    async insereUrlLoja(url) {
        this.#urlLoja.setValue(url)
    }

    async continue() {
        await this.#continue.click()
    }

    async continueComCredenciais() {
        await this.#continueComCredenciais.click()
    }

    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async valida2FA() {
        await this.#senha2fa.click()
    }

    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new menuLogin()