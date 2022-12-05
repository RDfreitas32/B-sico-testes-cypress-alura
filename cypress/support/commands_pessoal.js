
Cypress.Commands.add('login_uam', (cpf, senha) => {
    cy.get('input[placeholder="Número da matrícula ou CPF"]').click();
    cy.get('input[placeholder="Número da matrícula ou CPF"]').type(cpf);
    cy.get('input[type="password"]').click();
    cy.get('input[type="password"]').type(senha);
    cy.get('button[class="button is-primary is-rounded"]').click();
})