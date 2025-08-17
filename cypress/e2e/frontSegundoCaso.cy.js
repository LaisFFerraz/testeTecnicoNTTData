//// colocar produto na lista direto da home, ir para lista de compras, limpar carrinho e voltar para página inicial

/// <reference types="cypress"/>

describe('Cenário 2 - Frontend - Validar fluxo de lista de compras', () => {
    it('Deve executar login, adicionar produto, limpar carrinho e voltar para home', () => {
        cy.visit('https://front.serverest.dev/')
        cy.get('#email').type('testenttlais@gmail.com')
        cy.get('#password').type('senhateste123')
        cy.get('[data-testid="entrar"]').click()

        cy.url().should('include', '/home')
        cy.get('[data-testid="adicionarNaLista"]', { timeout: 15000 }).first().should('be.visible')

        cy.get('[data-testid="adicionarNaLista"]').first().click()

        cy.visit('https://front.serverest.dev/minhaListaDeProdutos')
        cy.url().should('include', '/minhaListaDeProdutos')
        cy.get('[data-testid="product-increase-quantity"]').first().should('exist')

        cy.get('[data-testid="paginaInicial"]').click()
        cy.url().should('include', '/home')

        cy.get('[data-testid="adicionarNaLista"]').eq(1).click()

        cy.visit('https://front.serverest.dev/minhaListaDeProdutos')
        cy.get('[data-testid="product-increase-quantity"]').should('have.length.at.least', 2)

        cy.get('[data-testid="limparLista"]').click()

        cy.get('[data-testid="product-increase-quantity"]').should('not.exist')

        cy.get('[data-testid="paginaInicial"]').click()
        cy.url().should('include', '/home')
    })
})