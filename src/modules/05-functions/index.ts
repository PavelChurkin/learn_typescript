/**
 * Модуль 05: Функции
 *
 * Функции - это переиспользуемые блоки кода, которые выполняют определенную задачу.
 * TypeScript добавляет строгую типизацию параметров и возвращаемых значений.
 */

console.log('=== Модуль 05: Функции ===\n');

// ============================================
// 1. ОБЪЯВЛЕНИЕ ФУНКЦИЙ
// ============================================

console.log('1. ОБЪЯВЛЕНИЕ ФУНКЦИЙ\n');

// Function declaration (объявление функции)
function greet(name: string): string {
  return `Привет, ${name}!`;
}
console.log(greet('Иван'));

// Function expression (функциональное выражение)
const add = function (a: number, b: number): number {
  return a + b;
};
console.log(`5 + 3 = ${add(5, 3)}`);

// Arrow function (стрелочная функция)
const multiply = (a: number, b: number): number => {
  return a * b;
};
console.log(`4 * 6 = ${multiply(4, 6)}`);

// Короткая форма arrow function (неявный return)
const square = (x: number): number => x * x;
console.log(`Квадрат 7: ${square(7)}`);

// ============================================
// 2. ПАРАМЕТРЫ ФУНКЦИЙ
// ============================================

console.log('\n2. ПАРАМЕТРЫ ФУНКЦИЙ\n');

// Обязательные параметры
function createUser(name: string, age: number): void {
  console.log(`Пользователь: ${name}, возраст: ${age}`);
}
createUser('Мария', 28);

// Опциональные параметры (необязательные)
function greetUser(name: string, greeting?: string): string {
  // greeting может быть undefined
  return greeting ? `${greeting}, ${name}!` : `Привет, ${name}!`;
}
console.log(greetUser('Петр'));
console.log(greetUser('Петр', 'Добрый день'));

// Параметры по умолчанию
function power(base: number, exponent: number = 2): number {
  return base ** exponent;
}
console.log(`2^2 = ${power(2)}`); // используется значение по умолчанию
console.log(`2^3 = ${power(2, 3)}`); // переопределяем значение

// Rest параметры (переменное количество аргументов)
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(`Сумма 1,2,3,4,5: ${sum(1, 2, 3, 4, 5)}`);
console.log(`Сумма 10,20: ${sum(10, 20)}`);

// ============================================
// 3. ВОЗВРАЩАЕМЫЕ ЗНАЧЕНИЯ
// ============================================

console.log('\n3. ВОЗВРАЩАЕМЫЕ ЗНАЧЕНИЯ\n');

// Явное указание типа возвращаемого значения
function divide(a: number, b: number): number {
  return a / b;
}
console.log(`10 / 2 = ${divide(10, 2)}`);

// Функция без возвращаемого значения (void)
function logMessage(message: string): void {
  console.log(`Лог: ${message}`);
}
logMessage('Сообщение от функции');

// Функция, возвращающая объект
interface Point {
  x: number;
  y: number;
}

function createPoint(x: number, y: number): Point {
  return { x, y };
}
const point = createPoint(10, 20);
console.log(`Точка: (${point.x}, ${point.y})`);

// Функция, возвращающая union type
function processValue(value: number): string | number {
  return value > 10 ? 'Большое' : value;
}
console.log(`processValue(15): ${processValue(15)}`);
console.log(`processValue(5): ${processValue(5)}`);

// ============================================
// 4. ФУНКЦИИ ВЫСШЕГО ПОРЯДКА
// ============================================

console.log('\n4. ФУНКЦИИ ВЫСШЕГО ПОРЯДКА\n');

// Функция, принимающая другую функцию как параметр
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
  return operation(a, b);
}

const addOp = (x: number, y: number): number => x + y;
const multiplyOp = (x: number, y: number): number => x * y;

console.log(`applyOperation(5, 3, add): ${applyOperation(5, 3, addOp)}`);
console.log(`applyOperation(5, 3, multiply): ${applyOperation(5, 3, multiplyOp)}`);

// Функция, возвращающая другую функцию
function createMultiplier(factor: number): (x: number) => number {
  return (x: number): number => x * factor;
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(`double(5): ${double(5)}`);
console.log(`triple(5): ${triple(5)}`);

// ============================================
// 5. CALLBACK ФУНКЦИИ
// ============================================

console.log('\n5. CALLBACK ФУНКЦИИ\n');

// Callback - функция, передаваемая в качестве аргумента
function processArray(arr: number[], callback: (item: number) => void): void {
  for (const item of arr) {
    callback(item);
  }
}

console.log('Обработка массива с callback:');
processArray([1, 2, 3], (num: number) => {
  console.log(`  Элемент: ${num}, Квадрат: ${num * num}`);
});

// ============================================
// 6. ЗАМЫКАНИЯ (CLOSURES)
// ============================================

console.log('\n6. ЗАМЫКАНИЯ\n');

// Замыкание - функция, которая запоминает переменные из внешней области видимости
function createCounter(): () => number {
  let count: number = 0; // переменная сохраняется в замыкании

  return (): number => {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(`Вызов counter(): ${counter()}`); // 1
console.log(`Вызов counter(): ${counter()}`); // 2
console.log(`Вызов counter(): ${counter()}`); // 3

// Замыкание для приватных данных
function createBankAccount(initialBalance: number) {
  let balance: number = initialBalance; // приватная переменная

  return {
    deposit: (amount: number): void => {
      balance += amount;
      console.log(`  Пополнение: ${amount}, Баланс: ${balance}`);
    },
    withdraw: (amount: number): void => {
      if (amount <= balance) {
        balance -= amount;
        console.log(`  Снятие: ${amount}, Баланс: ${balance}`);
      } else {
        console.log(`  Недостаточно средств!`);
      }
    },
    getBalance: (): number => balance
  };
}

console.log('Банковский счет:');
const account = createBankAccount(1000);
account.deposit(500);
account.withdraw(300);
console.log(`  Текущий баланс: ${account.getBalance()}`);

// ============================================
// 7. РЕКУРСИЯ
// ============================================

console.log('\n7. РЕКУРСИЯ\n');

// Рекурсивная функция - функция, которая вызывает сама себя
function factorial(n: number): number {
  // Базовый случай (условие выхода)
  if (n <= 1) {
    return 1;
  }
  // Рекурсивный случай
  return n * factorial(n - 1);
}
console.log(`Факториал 5: ${factorial(5)}`); // 120

// Рекурсия для вычисления чисел Фибоначчи
function fibonacci(n: number): number {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(`Fibonacci(7): ${fibonacci(7)}`); // 13

// Рекурсия для подсчета суммы массива
function sumArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + sumArray(arr.slice(1));
}
console.log(`Сумма [1,2,3,4,5]: ${sumArray([1, 2, 3, 4, 5])}`);

// ============================================
// 8. ПЕРЕГРУЗКА ФУНКЦИЙ
// ============================================

console.log('\n8. ПЕРЕГРУЗКА ФУНКЦИЙ\n');

// Function overloading - несколько сигнатур для одной функции
function format(value: string): string;
function format(value: number): string;
function format(value: boolean): string;
function format(value: string | number | boolean): string {
  if (typeof value === 'string') {
    return `Строка: "${value}"`;
  } else if (typeof value === 'number') {
    return `Число: ${value.toFixed(2)}`;
  } else {
    return `Булево: ${value ? 'истина' : 'ложь'}`;
  }
}

console.log(format('TypeScript'));
console.log(format(42.567));
console.log(format(true));

// ============================================
// 9. GENERIC ФУНКЦИИ
// ============================================

console.log('\n9. GENERIC ФУНКЦИИ\n');

// Generic - обобщенный тип, определяется при вызове
function identity<T>(value: T): T {
  return value;
}

console.log(`identity<string>('hello'): ${identity<string>('hello')}`);
console.log(`identity<number>(42): ${identity<number>(42)}`);

// Generic функция для работы с массивами
function getFirstElement<T>(arr: T[]): T | undefined {
  return arr.length > 0 ? arr[0] : undefined;
}

console.log(`Первый элемент [1,2,3]: ${getFirstElement([1, 2, 3])}`);
console.log(`Первый элемент ['a','b']: ${getFirstElement(['a', 'b'])}`);

// Generic с ограничением типа
interface HasLength {
  length: number;
}

function getLength<T extends HasLength>(item: T): number {
  return item.length;
}

console.log(`Длина 'TypeScript': ${getLength('TypeScript')}`);
console.log(`Длина [1,2,3,4]: ${getLength([1, 2, 3, 4])}`);

// ============================================
// 10. МЕТОДЫ VS ФУНКЦИИ
// ============================================

console.log('\n10. МЕТОДЫ VS ФУНКЦИИ\n');

// Метод - функция, принадлежащая объекту
const calculator = {
  value: 0,

  add(n: number): void {
    this.value += n;
  },

  subtract(n: number): void {
    this.value -= n;
  },

  getValue(): number {
    return this.value;
  }
};

calculator.add(10);
calculator.subtract(3);
console.log(`Значение калькулятора: ${calculator.getValue()}`);

console.log('\n=== Модуль 05 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Используйте стрелочные функции для коротких операций
 * 2. Кэшируйте результаты вычислений для рекурсивных функций (мемоизация)
 * 3. Избегайте глубокой рекурсии - может вызвать переполнение стека
 * 4. Используйте rest параметры вместо arguments
 * 5. Замыкания потребляют память - используйте их осознанно
 * 6. Generic функции обеспечивают типобезопасность без потери производительности
 * 7. Функции высшего порядка улучшают переиспользуемость кода
 * 8. Предпочитайте чистые функции (без побочных эффектов) для лучшей предсказуемости
 */
