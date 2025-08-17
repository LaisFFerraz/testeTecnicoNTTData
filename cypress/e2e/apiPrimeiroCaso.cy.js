/// <reference types="cypress"/>

describe('Cenário 1 - API - Criar, listar e deletar um usuário', () => {
    let usuarioCriado

    before(() => {
    cy.log('Validando um usuário')
        const novoUsuario = {
            nome: "Usuário Teste Cypress",
            email: `teste_${Date.now()}@qa.com`,
            password: "123456",
            administrador: "true"
        }

        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: novoUsuario
        }).then((resposta) => {
            expect(resposta.status).to.equal(201)
            usuarioCriado = { ...novoUsuario, _id: resposta.body._id }
        })
    })

    it('Deve listar o usuário criado no before', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((resposta) => {
            expect(resposta.status).to.equal(200)
            expect(resposta.body).to.have.property('usuarios')
            expect(resposta.body.quantidade).to.be.greaterThan(0)

            const usuarioEncontrado = resposta.body.usuarios.find(
                u => u._id === usuarioCriado._id
            )

            expect(usuarioEncontrado).to.exist
            expect(usuarioEncontrado.email).to.equal(usuarioCriado.email)
        })
    })

    after(() => {
        if (usuarioCriado && usuarioCriado._id) {
            cy.request({
                method: 'DELETE',
                url: `https://serverest.dev/usuarios/${usuarioCriado._id}`,
                failOnStatusCode: false
            }).then((resposta) => {
                if (resposta.status === 200) {
                    cy.log('Usuário deletado com sucesso')
                } else if (resposta.status === 404) {
                    cy.log('Usuário já não existia')
                } else {
                    cy.log(`Status inesperado: ${resposta.status}`)
                }
            })
        }
    cy.log('Testes finalizados!')
    })
})