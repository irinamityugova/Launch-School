import rlSync from 'readline-sync';

const config = {
  language: () => rlSync.question('| Select your language by entering a corresponding short:\n| "en" for English\n| "sp" for Spanish\n| "ru" for Russian\n'),

  en: {
    printWelcomeMessage: () => {
      console.log(`
|-------------------------------------------------|
|         Welcome to Console Calculator!          |
|-------------------------------------------------|
| Answer the following prompts to get the result. |
| You can reuse the result of operation.          |
| Press Ctrl-C to exit the application.           |
|-------------------------------------------------|`);
    },
    printInputError: (operand) => {
      const maxLineLength = '|------------------------- ERROR ---------------------------|'.length;
      const paddingCount = maxLineLength - `|${operand} is not a registered mathematical operator.`.length - 1;
      const message = `
|------------------------- ERROR ---------------------------|
| ${operand} is not a registered mathematical operator.${'|'.padStart(paddingCount, ' ')}
| Please select from the following commands:                |
| + to add,                                                 |
| - to subtract,                                            |
| * to multiply,                                            |
| / to divide,                                              |
| % to get the remainder of the division,                   |
| ^ to put previous number to the power of the next number. |
|-----------------------------------------------------------|
`;
      console.log(message)
    },
    printResult: (result) => {
      console.log('Result =', result);
    },
    chooseUseResult: () => rlSync.question('Continue with a result? y/n '),
    anotherInput: () => rlSync.question('Would you like to perform another operation? y/n '),
    getNum: () => rlSync.questionInt('Number: '),
    getOperator: () => rlSync.question('Operator: '),
    printDefaultError: () => console.log('Incorrect input'),
  },

  sp: {
    printWelcomeMessage: () => {
      console.log(`
|------------------------------------------------------------------|
|               ¡Bienvenido a Consola Calculadora!                 |
|------------------------------------------------------------------|
| Responda las siguientes indicaciones para obtener el resultado.  |
| Puede reutilizar el resultado de la operación.                   |
| Presione Ctrl-C para salir de la aplicación.                     |
|------------------------------------------------------------------|`);
    },
    printInputError: (operand) => {
      const maxLineLength = '|------------------------------ ERROR -------------------------------|'.length;
      const paddingCount = maxLineLength - `|${operand} no es un operador matemático registrado.`.length - 1;
      const message = `
|------------------------------ ERROR -------------------------------|
| ${operand} no es un operador matemático registrado.${'|'.padStart(paddingCount, ' ')}
| Seleccione entre los siguientes comandos:                          |
| + para agregar,                                                    |
| - restar,                                                          |
| * para multiplicar,                                                |
| / dividir,                                                         |
| % para obtener el resto de la división,                            |
| ^ para poner el número anterior a la potencia del siguiente número.|
|--------------------------------------------------------------------|
  `;
      console.log(message);
    },
    printResult: (result) => {
      console.log('Resultado =', result);
    },
    chooseUseResult: () => rlSync.question('¿Continuar con un resultado? y/n '),
    anotherInput: () => rlSync.question('¿Le gustaría realizar otra operación? y/n '),
    getNum: () => rlSync.questionInt('Número: '),
    getOperator: () => rlSync.question('Operador: '),
    printDefaultError: () => console.log('Entrada incorrecta'),
  },

  ru: {
    printWelcomeMessage: () => {
      console.log(`
|------------------------------------------------------------|
|         Добро пожаловать в консольный калькулятор!         |
|------------------------------------------------------------|
| Ответьте на следующие подсказки, чтобы получить результат. |
| Вы можете повторно использовать результат операции.        |
| Нажмите Ctrl-C, чтобы выйти из приложения.                 |
|------------------------------------------------------------|`);
    },
    printInputError: (operand) => {
      const maxLineLength = '|--------------------------- ОШИБКА ----------------------------|'.length;
      const paddingCount = maxLineLength - `|${operand} не является зарегистрированным математическим оператором.`.length - 1;
      const message = `
|--------------------------- ОШИБКА ----------------------------|
| ${operand} не является зарегистрированным математическим оператором.${'|'.padStart(paddingCount, ' ')}
| Выберите одну из следующих команд:                            |
| + добавить,                                                   |
| - вычитать,                                                   |
| * умножать,                                                   |
| / делить,                                                     |
| %, чтобы получить остаток от деления,                         |
| ^ чтобы возвести предыдущее число в степень следующего числа. |
|---------------------------------------------------------------|
  `
      console.log(message);
    },
    printResult: (result) => {
      console.log('Результат =', result);
    },
    chooseUseResult: () => rlSync.question('Продолжить с результатом? y/n '),
    anotherInput: () => rlSync.question('Хотите провести еще одну операцию? y/n '),
    getNum: () => rlSync.questionInt('Число: '),
    getOperator: () => rlSync.question('Оператор: '),
    printDefaultError: () => console.log('Неверный ввод'),
  },
};

export default config;
