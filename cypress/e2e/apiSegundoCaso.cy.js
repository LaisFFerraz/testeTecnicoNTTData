/// <reference types="cypress"/>

describe('Cenário 2 - API - Listar produtos existentes', () => {
  let produtos = []

  before(() => {
    cy.log('Validando a lista de produtos')

  })

  it('Deve listar produtos cadastrados', () => {
    cy.request({
      url: 'https://serverest.dev/produtos',
      method: 'GET',
      failOnStatusCode: false
    }).then((resposta) => {
      expect(resposta.status).to.equal(200)
      expect(resposta.body).to.have.property('produtos')

      produtos = resposta.body.produtos

      expect(produtos).to.be.an('array').and.to.have.length.greaterThan(0)

      produtos.forEach(produto => {
        expect(produto).to.have.property('_id')
        expect(produto).to.have.property('nome')
        expect(produto).to.have.property('preco')
      })
    })
  })

  after(() => {
    cy.log('Testes finalizados! Total de produtos listados: ${produtos.length}')
  })
})