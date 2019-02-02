describe('Signup', function () {
  before(function () {
    cy.exec('php artisan migrate:fresh && php artisan db:seed')
  })

  it('should sign up and logout', function () {
    cy.visit('/signup')

    cy.get('input[name=email]').type('test@test.com')
    cy.get('input[name=password]').type('testtest')

    cy.get('button[type=submit]').click()

    cy.url().should('include', '/dashboard')

    cy.contains('You need to confirm your email address before adding users')

    cy.get('[data-cy=logout-button]').click()

    cy.contains('Login')
  })

  it('should block registration if email is already taken', function () {
    cy.visit('/signup')

    cy.get('input[name=email]').type('test@test.com')
    cy.get('input[name=password]').type('testtest')

    cy.get('button[type=submit]').click()

    cy.contains('The email has already been taken.')
  })
})
