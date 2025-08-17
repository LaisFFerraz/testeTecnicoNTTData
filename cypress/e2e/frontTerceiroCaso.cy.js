// buscar produto, colocar na lista e aumentar quantidade

/// <reference types="cypress"/>

describe('Cenário 3 - Frontend - Validar fluxo de busca de produtos', () => {
    it('Deve buscar produto, adicionar na lista e aumentar quantidade', () => {
        cy.visit('https://front.serverest.dev/')
        cy.get('#email').type('testenttlais@email.com')
        cy.get('#password').type('senhateste123')
        cy.get('[data-testid="entrar"]').click()

        cy.url().should('include', '/home')
        cy.get('[data-testid="adicionarNaLista"]', { timeout: 15000 }).first().should('be.visible')

        cy.get('[data-testid="pesquisar"]').type('Gorgeous Cotton Bike')
        cy.get('[data-testid="botaoPesquisar"]').click()

        cy.get('.card.col-3').first().click()

        cy.get('[data-testid="adicionarNaLista"]').click()

        cy.visit('https://front.serverest.dev/minhaListaDeProdutos')
        cy.url().should('include', '/minhaListaDeProdutos')

        cy.contains('Gorgeous Cotton Bike').should('be.visible')

        cy.get('.card-body').then((produtosAntes) => {
            const qtdAntes = produtosAntes.length

            cy.get('[data-testid="product-increase-quantity"]').first().click()

            cy.get('.card-body').should('have.length.gte', qtdAntes)
        })
    })
})