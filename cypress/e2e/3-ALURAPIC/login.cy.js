
const { it } = require("mocha");

describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')
})

    describe('Testes login', () =>{

        it('fazer login válido', () => {
            cy.login('flavio', '123')
            cy.contains('a', '(Logout)').should('be.visible');
        })
    })

        it('fazer login inválido', () => {
            cy.login('flavioA', '1234')
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Invalid user name or password')
        })
        
    })


    it.only('fazer login do flavio', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(1)
            expect(res.body).to.have.property('email')
            expect(res.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    })
})