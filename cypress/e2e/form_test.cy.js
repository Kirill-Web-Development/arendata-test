describe('Feedback Form Test', () => {
    it('should submit the form successfully with valid data and validate dropdown values', () => {
    
        // ��������� ��������
        cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');
    
        // ��������� ��������� ����
        cy.get('div[class*="question_107"] input').type('�������� ������������'); // ���
        cy.get('div[class*="question_108"] input').type('testuser@example.com'); // Email
        cy.get('div[class*="question_109"] input').type('+7-999-999-99-99'); // �������
        cy.get('div[class*="question_110"] textarea').type('��� �������� ���������.'); // ���������
    
        // ������ � dropdown

        // ������� ������������ ������ ���������� �������� ��� dropdown
        // � ������ ��������� ������� ����� ����������� � ���� ������
        const validValuesForDropdown = ['�����', '������ � ������', '������ � ���.���������', '�����', '������', '������'];

        cy.get('div[class*="question_56519"]').click(); // ��������� dropdown

        // �������� ��� ��� �������� ���������
        cy.get('div[class*="content___e072bcbbb7d0f3b0be0c"][class*="options___cd6837bd8e016eb2f9fd"] div').then(($list) => {
            const dropdownValues = [...$list].map((el) => el.innerText.trim());
            dropdownValues.forEach((value) => {
              expect(validValuesForDropdown).to.include(value); 
            });
          });
    
        // �������� ������ ����� �� ����������� ������
        cy.get('div[class*="option"][class*="item___a66a0ae47d8145dee2ff"]').click();
    
        // ���������� �����
        cy.get('div[class*="action___d45ea1f1799f107d8ccf"]').click();
    
        // �������� ������� ��������� �� ������
        cy.contains('���������� �� ���������!').should('be.visible');
    });
  });