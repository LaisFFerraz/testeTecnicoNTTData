/// <reference types="cypress"/>

describe('Cenário 1 - Frontend - Validar cadastro, login e logout', () => {
    let usuario
    let usuarioId

    before(() => {
        const timestamp = Date.now()
        usuario = {
            nome: `Teste NTT ${timestamp}`,
            email: `testentt_${timestamp}@email.com`,
            senha: 'senhateste123'
        }
    })

    it('Deve cadastrar um novo usuário', () => {
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="cadastrar"]').click()

        cy.url().should('include', '/cadastrarusuarios')

        cy.get('#nome').type(usuario.nome)
        cy.get('#email').type(usuario.email)
        cy.get('#password').type(usuario.senha)

        cy.get('[data-testid="checkbox"]').click()
        cy.get('[data-testid="cadastrar"]').click()

        cy.contains('Cadastro realizado com sucesso').should('be.visible')

        cy.request('GET', `https://serverest.dev/usuarios?email=${usuario.email}`)
            .then((res) => {
                usuarioId = res.body.usuarios[0]._id
            })
    })

    it('Deve realizar login e logout com o usuário cadastrado', () => {
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="email"]').type(usuario.email)
        cy.get('[data-testid="senha"]').type(usuario.senha)
        cy.get('[data-testid="entrar"]').click()

        cy.url().should('include', '/home')
        cy.contains(`Bem Vindo ${usuario.nome}`, { timeout: 10000 }).should('be.visible')

        cy.get('[data-testid="logout"]', { timeout: 10000 }).should('be.visible').click()

        cy.url().should('include', '/login')
        cy.contains('Login').should('be.visible')
    })

    after(() => {
        if (usuarioId) {
            cy.request('DELETE', `https://serverest.dev/usuarios/${usuarioId}`)
        }
    })
})
