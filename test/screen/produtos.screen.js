class menuProdutos {
    get #addProduto(){
        return $('id:addProductButton')
    }

    get #setTipoProduto(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    async tipoProduto(){
        await this.#addProduto.click()
        await this.#setTipoProduto.click()
    }
}

module.exports = new menuProdutos()