class menuHome {
    get #urlLoja(){
        return $('id:button_login_store')
    }

    async acessaLogin(){
        await this.#urlLoja.click()
    }
}

module.exports = new menuHome()