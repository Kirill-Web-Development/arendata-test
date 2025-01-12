describe('Feedback Form Test', () => {
    it('should submit the form successfully with valid data and validate dropdown values', () => {
    
        // Открываем страницу
        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');
    
        // Заполняем текстовые поля
        cy.get('div[class*="question_107"] input').type('Тестовый Пользователь'); // Имя
        cy.get('div[class*="question_108"] input').type('testuser@example.com'); // Email
        cy.get('div[class*="question_109"] input').type('+7-999-999-99-99'); // Телефон
        cy.get('div[class*="question_110"] textarea').type('Это тестовое сообщение.'); // Сообщение
    
        // Работа с dropdown

        // Заранее определенный массив допустимых значений для dropdown
        // В рамках реального проекта можно подтягивать с базы данных
        const validValuesForDropdown = ['Заказ', 'Вопрос о товаре', 'Вопрос в тех.поддержку', 'Отзыв', 'Жалоба', 'Другое'];

        cy.get('div[class*="question_56519"]').click(); // Открываем dropdown

        // Проверка что все значения допустимы
        cy.get('div[class*="content___e072bcbbb7d0f3b0be0c"][class*="options___cd6837bd8e016eb2f9fd"] div').then(($list) => {
            const dropdownValues = [...$list].map((el) => el.innerText.trim());
            dropdownValues.forEach((value) => {
              expect(validValuesForDropdown).to.include(value); 
            });
          });
    
        // Выбираем первую опцию из выпадающего списка
        cy.get('div[class*="option"][class*="item___a66a0ae47d8145dee2ff"]').click();
    
        // Отправляем форму
        cy.get('div[class*="action___d45ea1f1799f107d8ccf"]').click();
    
        // Проверка наличия сообщения об успехе
        cy.contains('Благодарим за обращение!').should('be.visible');
    });
  });