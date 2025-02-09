describe('Adminland - Employee management', function () {
  it('should create an employee with different permission levels', function () {
    cy.login()
    cy.createCompany()

    cy.createEmployee('Michael', 'Scott', 'michael.scott@dundermifflin.com', 'admin', false)
    cy.contains('Michael Scott')
    cy.hasAuditLog('Added Michael Scott as an employee', '/1/account/employees')

    cy.createEmployee('Dwight', 'Schrute', 'dwight.schrute@dundermifflin.com', 'hr', false)
    cy.contains('Dwight Schrute')
    cy.hasAuditLog('Added Dwight Schrute as an employee', '/1/account/employees')

    cy.createEmployee('Jim', 'Halpert', 'jim.halpert@dundermifflin.com', 'user', false)
    cy.contains('Jim Halpert')
    cy.hasAuditLog('Added Jim Halpert as an employee', '/1/account/employees')
  })

  it('should let a new admin create an account after being invited to use the app', function () {
    cy.login()
    cy.createCompany()
    cy.createEmployee('Michael', 'Scott', 'michael.scott@dundermifflin.com', 'admin', true)

    cy.get("[name='Michael Scott']").invoke('attr', 'data-invitation-link').then((link) => {
      cy.logout()
      cy.visit('/invite/employee/' + link)
      cy.get('[data-cy=accept-create-account]').click()
      cy.get('input[name=password]').type('admin1012')
      cy.get('[data-cy=create-cta]').click()
      cy.get('body').should('contain', 'Dunder Mifflin')
    })
  })

  it('should let a new hr create an account after being invited to use the app', function () {
    cy.login()
    cy.createCompany()
    cy.createEmployee('Michael', 'Scott', 'michael.scott@dundermifflin.com', 'hr', true)

    cy.get("[name='Michael Scott']").invoke('attr', 'data-invitation-link').then((link) => {
      cy.logout()
      cy.visit('/invite/employee/' + link)
      cy.get('[data-cy=accept-create-account]').click()
      cy.get('input[name=password]').type('admin1012')
      cy.get('[data-cy=create-cta]').click()
      cy.get('body').should('contain', 'Dunder Mifflin')
    })
  })

  it('should let a new user create an account after being invited to use the app', function () {
    cy.login()
    cy.createCompany()
    cy.createEmployee('Michael', 'Scott', 'michael.scott@dundermifflin.com', 'user', true)

    cy.get("[name='Michael Scott']").invoke('attr', 'data-invitation-link').then((link) => {
      cy.logout()
      cy.visit('/invite/employee/' + link)
      cy.get('[data-cy=accept-create-account]').click()
      cy.get('input[name=password]').type('admin1012')
      cy.get('[data-cy=create-cta]').click()
      cy.get('body').should('contain', 'Dunder Mifflin')
    })
  })
})
