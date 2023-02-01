const menuHome = require("../screens/home.screen")
const menuLogin = require("../screens/login.screen")
const menuLoja = require("../screens/ebacStore.screen")
const menuProdutos = require("../screens/produtos.screen");
const addProduto = require("../screens/cadastraProduto.screen");


let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Acesso e cadastro de produto na loja Ebac-shop', () => {
   
    it('Deve acessar e cadastrar um produto', async () => {
        await menuHome.acessaLogin()
        await menuLogin.insereUrlLoja(urlLoja)
        await menuLogin.continue()
        await menuLogin.continueComCredenciais()
        await menuLogin.login(usuario, senha)
        await menuLogin.valida2FA()
        await menuLogin.twoFactorLogin(senha)

        expect(await menuLoja.logoLojaVisivel()).toBeTruthy()
        expect(await menuLoja.validaNomeLoja()).toEqual('EBAC - Shop')

        await menuLoja.acessaProdutos()
        await menuProdutos.tipoProduto()   

        await addProduto.addImagem()    
        await newProductScreeen.tituloProduto()      
        await newProductScreeen.descricaoProduto()      
        await newProductScreeen.addPreco()
        await newProductScreeen.addEstoque()
        await newProductScreeen.addDetalhes()
        await newProductScreeen.addEnvio()
        await newProductScreeen.publicarProduto()
        await newProductScreeen.opcoes()

        expect(await newProductScreeen.validaProduto()).toEqual('View product on store')
    });
})
