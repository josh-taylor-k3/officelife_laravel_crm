Cypress.Commands.add('login', () => {
  cy.exec('php artisan setup:frontendtesting -vvv')

  cy.visit('/login')

  cy.get('input[name=email]').type('admin@admin.com')
  cy.get('input[name=password]').type('admin')
  cy.get('button[type=submit]').click()

  cy.url().should('include', '/home')
})
