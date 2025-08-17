/// <reference types="cypress"/>

describe('Cenário 3 - API - Listar carrinhos existentes', () => {
  before(() => {
    cy.log('Validando os produtos')

  })

    it('Deve listar carrinhos e verificar produtos', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/carrinhos',
            failOnStatusCode: false
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.have.property('carrinhos')
            expect(resposta.body.carrinhos.length).to.be.greaterThan(0)

            const primeiroCarrinho = resposta.body.carrinhos[0]
            expect(primeiroCarrinho).to.have.property('produtos')
            expect(primeiroCarrinho.produtos.length).to.be.greaterThan(0)
            expect(primeiroCarrinho.produtos[0]).to.have.property('idProduto')
            expect(primeiroCarrinho.produtos[0]).to.have.property('quantidade')
        })
    })
      after(() => {
    cy.log('Testes finalizados!')
  })
})