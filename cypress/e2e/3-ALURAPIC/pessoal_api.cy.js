describe('buscar retorno de API uam', () => {

    it('retona API uam', () => {
        cy.request({
            method: 'GET',
            url: 'https://estudantesuam.ead.br/js/app.c37be3f6.js'
        }).then((retorno) => {
            expect(retorno.status).to.be.equal(200)
            expect(retorno.body).is.not.empty
            expect(retorno.body).to.have.string("chunk-00c5d32d")
        })
    })
// Aqui a API está retornando erro por causa do proprio site.
    it.only('retona API login', () => {
        cy.request({    
            method: 'POST',
            url: 'https://apiuam.ead.br/v1/auth/Login',
            body: Cypress.env()
        }).then((retorno_post) => {
            expect(retorno_post.status).to.be.equal(200)
            expect(retorno_post.body).is.not.empty

        })
    })
}) 