class addProduto {

    get #cardImage() {
        return $('id:addImagemContainer')
    }

    get #tipoUpload() {
        return $('id:textWPMediaLibrary')
    }

    get #selecionaImagem() {
        return $('(//android.widget.ImageView[@content-desc="Product image"])[1]')
    }

    get #botaoDone() {
        return $('id:menu_done')
    }

    get #botaoVoltar() {
        return $('~Navigate up')
    }

    get #produtoTitulo() {
        return $('id:editText')
    }

    get #descricaoProduto() {
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #descricaoCampo() {
        return $('id:visualEditor')
    }

    get #addPreco() {
        return $('android= new UiSelector().text("Add price")')
    }

    get #precoNormal() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #precoDeVenda() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #estoque() {
        return $('android= new UiSelector().text("Inventory")')
    }

    get #sku() {
        return $('id:edit_text')
    }

    get #gerenEstoque() {
        return $('id:manageStock_switch')
    }

    get #quantidade() {
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #envio() {
        return $('android= new UiSelector().text("Shipping")')
    }

    get #peso() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #comprimento() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #largura() {
        return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #height() {
        return $('//android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #detalhes() {
        return $('id:productDetail_addMoreButton')
    }

    get #botaoPublicar() {
        return $('id:menu_done')
    }
    get #botaoOpcoes() {
        return $('~More options')
    }


    get #validarNaLoja() {
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }

    async publicarProduto() {
        await this.#botaoPublicar.click()
    }



    async addImagem() {
        await this.#cardImage.click()
        await this.#tipoUpload.click()
        await this.#selecionaImagem.click()
        await this.#botaoDone.click()
        await this.#botaoVoltar.click()
    }


    async tituloProduto() {
        await this.#produtoTitulo.setValue('Casaco by Test')
    }



    async descricaoProduto() {
        await this.#descricaoProduto.click()
        await this.#descricaoCampo.setValue('Casaco teste automacao mobile')
        await this.#botaoVoltar.click()
    }



    async addPreco() {
        await this.#addPreco.click()
        await this.#precoNormal.setValue('129.90')
        await this.#precoDeVenda.setValue('69.99')
        await this.#botaoVoltar.click()
    }



    async addEstoque() {
        await this.estoque.click()
        let sku = `${Math.floor(Math.random() * 1000)}`

        await this.#sku.setValue(sku)
        await this.#gerenEstoque.click()
        await this.#quantidade.setValue('1000')
        await this.#botaoVoltar.click()
    }

    async addDetalhes() {
        await this.#detalhes.click()
    }

    async addEnvio() {
        await this.#envio.click()
        await this.#peso.setValue('160')
        await this.#comprimento.setValue('320')
        await this.#largura.setValue('120')
        await this.#height.setValue('450')
        await this.#botaoVoltar.click()
    }

    async opcoes() {
        await this.#botaoOpcoes.waitForExist({ timeout: 50000 })
        await this.#botaoOpcoes.click()
    }

    async validaProduto() {
        return await this.#validarNaLoja.getText()
    }
}

module.exports = new addProduto()