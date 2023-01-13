import rlSync from 'readline-sync';

const config = {
  language: () => rlSync.question('| Select your language by entering a corresponding short:\n| "en" for English\n| "sp" for Spanish\n| "ru" for Russian\n'),
  en: {
    welcomeMessage: () => {
      console.log(`
|-------------------------------------------------|
|         Welcome to Console Calculator!          |
|-------------------------------------------------|
| Answer the following prompts to get the result. |
| You can reuse the result of operation.          |
| Press Ctrl-C to exit the application.           |
|-------------------------------------------------|`);
    },
    invalidInput: (operand) => {
      console.log(`
|------------------------- ERROR ---------------------------|
| ${operand} is not a registered mathematical operator.${'|'.padStart(59 - `${operand} is not a registered mathematical operator.`.length, ' ')}
| Please select from the following commands:                |
| + to add,                                                 |
| - to subtract,                                            |
| * to multiply,                                            |
| / to divide,                                              |
| % to get the remainder of the division,                   |
| ^ to put previous number to the power of the next number. |
|-----------------------------------------------------------|
`);
    },
    resultOutput: (result) => {
      console.log('Result =', result);
    },
    useResult: () => rlSync.question('Continue with a result? y/n '),
    anotherInput: () => rlSync.question('Would you like to perform another operation? y/n '),
    getNum: () => rlSync.questionInt('Number: '),
    getOperator: () => rlSync.question('Operator: '),
    errMessage: () => console.log('Incorrect input'),
  },
  sp: {
    welcomeMessage: () => {
      console.log(`
|------------------------------------------------------------------|
|               ¡Bienvenido a Consola Calculadora!                 |
|------------------------------------------------------------------|
| Responda las siguientes indicaciones para obtener el resultado.  |
| Puede reutilizar el resultado de la operación.                   |
| Presione Ctrl-C para salir de la aplicación.                     |
|------------------------------------------------------------------|`);
    },
    invalidInput: (operand) => {
      console.log(`
|------------------------------ ERROR -------------------------------|
| ${operand} no es un operador matemático registrado.${'|'.padStart(68 - `${operand} no es un operador matemático registrado.`.length, ' ')}
| Seleccione entre los siguientes comandos:                          |
| + para agregar,                                                    |
| - restar,                                                          |
| * para multiplicar,                                                |
| / dividir,                                                         |
| % para obtener el resto de la división,                            |
| ^ para poner el número anterior a la potencia del siguiente número.|
|--------------------------------------------------------------------|
  `);
    },
    resultOutput: (result) => {
      console.log('Resultado =', result);
    },
    useResult: () => rlSync.question('¿Continuar con un resultado? y/n '),
    anotherInput: () => rlSync.question('¿Le gustaría realizar otra operación? y/n '),
    getNum: () => rlSync.questionInt('Número: '),
    getOperator: () => rlSync.question('Operador: '),
    errMessage: () => console.log('Entrada incorrecta'),
  },
  ru: {
    welcomeMessage: () => {
      console.log(`
|------------------------------------------------------------|
|         Добро пожаловать в консольный калькулятор!         |
|------------------------------------------------------------|
| Ответьте на следующие подсказки, чтобы получить результат. |
| Вы можете повторно использовать результат операции.        |
| Нажмите Ctrl-C, чтобы выйти из приложения.                 |
|------------------------------------------------------------|`);
    },
    invalidInput: (operand) => {
      console.log(`
|--------------------------- ОШИБКА ----------------------------|
| ${operand} не является зарегистрированным математическим оператором.${'|'.padStart(63 - `${operand} не является зарегистрированным математическим оператором.`.length, ' ')}
| Выберите одну из следующих команд:                            |
| + добавить,                                                   |
| - вычитать,                                                   |
| * умножать,                                                   |
| / делить,                                                     |
| %, чтобы получить остаток от деления,                         |
| ^ чтобы возвести предыдущее число в степень следующего числа. |
|---------------------------------------------------------------|
  `);
    },
    resultOutput: (result) => {
      console.log('Результат =', result);
    },
    useResult: () => rlSync.question('Продолжить с результатом? y/n '),
    anotherInput: () => rlSync.question('Хотите провести еще одну операцию? y/n '),
    getNum: () => rlSync.questionInt('Число: '),
    getOperator: () => rlSync.question('Оператор: '),
    errMessage: () => console.log('Неверный ввод'),
  },
};

export default config;
