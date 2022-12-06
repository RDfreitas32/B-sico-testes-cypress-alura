describe('Login site alura', () => {

    beforeEach(() => {
        cy.visit('https://estudantesuam.ead.br/login')

    })
    it('fazendo login na UAM', () => {
        cy.login_uam('xxx', 'xxx');
        cy.get('h2[class="title is-1 mx-5 mt-1"]').should('be.visible');
        cy.get('a[class="column is-one-fifth-desktop is-4-tablet is-5-mobile app-card ulife"]').click();
        cy.contains('body', 'class="ng-scope vsc-initialized"').should('be.visible');
    })

})