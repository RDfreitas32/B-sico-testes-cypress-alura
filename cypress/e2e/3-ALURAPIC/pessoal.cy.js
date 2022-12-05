describe('Login site alura', () => {

    beforeEach(() => {
        cy.visit('https://estudantesuam.ead.br/login')

    })
    it('fazendo login na UAM', () => {
        cy.login_uam('41784248827', 'Dinekima32');
        cy.get('button[class="button mb-5 is-primary is-rounded"]').should('be.visible');
        cy.get('button[class="button mb-5 is-primary is-rounded"]').click();
        cy.get('h2[class="title is-1 mx-5 mt-1"]').should('be.visible');
    })

})