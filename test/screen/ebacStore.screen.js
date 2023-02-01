class menuLoja {
    get #logoLoja() { return $('~My store') }

    get #nomeLoja() { return $('id:toolbar_subtitle') }

    async validaNomeLoja() {
        await this.#nomeLoja.waitForExist({ timeout: 50000 })
        return await this.#nomeLoja.getText()
    }

    async logoLojaVisivel() {
        await this.#logoLoja.waitForExist({ timeout: 50000 })
        return await this.#logoLoja.isDisplayed()
    }

    get #produtosLoja() { return $('id:products') }

    async acessaProdutos() { await this.#produtosLoja.click() }
}

module.exports = new menuLoja()