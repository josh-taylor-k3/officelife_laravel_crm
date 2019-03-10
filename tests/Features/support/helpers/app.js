// Create a user
Cypress.Commands.add('login', () => {
  cy.exec('php artisan setup:frontendtesting -vvv')

  cy.visit('/login')

  cy.get('input[name=email]').type('admin@admin.com')
  cy.get('input[name=password]').type('admin')
  cy.get('button[type=submit]').click()

  cy.url().should('include', '/home')
})

// Create a company called "Dunder Mifflin"
Cypress.Commands.add('createCompany', () => {
  cy.get('[data-cy=create-company-blank-state]').click()

  cy.url().should('include', '/company/create')

  cy.get('input[name=name]').type('Dunder Mifflin')
  cy.get('[data-cy=create-company-submit]').click()
})

// Create a team called "product"
Cypress.Commands.add('createTeam', () => {
  cy.visit('/1/account')

  cy.get('[data-cy=team-admin-link]').click()
  cy.get('[data-cy=add-team-button]').click()
  cy.get('input[name=name]').type('product')
  cy.get('[data-cy=submit-add-team-button]').click()
})

// Create an employee called "Michael Scott"
Cypress.Commands.add('createEmployee', () => {
  cy.visit('/1/account')

  cy.get('[data-cy=employee-admin-link]').click()
  cy.url().should('include', '/account/employees')

  cy.get('[data-cy=add-employee-button]').click()

  cy.get('input[name=first_name]').type('Michael')
  cy.get('input[name=last_name]').type('Scott')
  cy.get('input[name=email]').type('michael.scott@dundermifflin.com')
  cy.get('[type="radio"]').first().check()

  cy.get('[data-cy=submit-add-employee-button]').click()
})
