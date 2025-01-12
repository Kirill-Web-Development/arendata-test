describe('Feedback Form Test', () => {
  it('should submit the form successfully', () => {
    cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');

    cy.get('iframe#ttgraf-33', { timeout: 10000 })
      .should('be.visible')
      .then(($iframe) => {
        const $body = $iframe.contents().find('body');
        cy.wrap($body).as('iframeBody');
      });

    cy.get('@iframeBody').find('div[class*="question_107"] input').should('be.visible').type('Тестовый Пользователь');
    cy.get('@iframeBody').find('div[class*="question_108"] input').should('be.visible').type('testuser@example.com');
    cy.get('@iframeBody').find('div[class*="question_109"] input').should('be.visible').type('+7-999-999-99-99');
    cy.get('@iframeBody').find('div[class*="question_110"] textarea').should('be.visible').type('Это тестовое сообщение.');


    cy.get('@iframeBody').find('div[class*="dropdown___df511e4c595349c5c308"]').should('be.visible').click();

    cy.get('@iframeBody')
      .find('div[class*="option"][class*="item___a66a0ae47d8145dee2ff"]')
      .first()
      .should('be.visible')
      .click();

    cy.get('@iframeBody').find('div[class*="action___d45ea1f1799f107d8ccf"]').should('be.visible').click();
    cy.get('@iframeBody').contains('Благодарим за обращение!').should('be.visible');
  });
});
