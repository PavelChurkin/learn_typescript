/**
 * Модуль 02: Переменные и операторы
 *
 * В этом модуле рассматриваются способы объявления переменных
 * и различные операторы для работы с данными.
 */

console.log('=== Модуль 02: Переменные и операторы ===\n');

// ============================================
// 1. ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ
// ============================================

console.log('1. ОБЪЯВЛЕНИЕ ПЕРЕМЕННЫХ\n');

// var - старый способ (избегайте использования)
// var имеет функциональную область видимости и может вызывать проблемы
var oldStyle: string = 'Устаревший способ';
console.log(`var: ${oldStyle}`);

// let - современный способ для изменяемых переменных
// let имеет блочную область видимости
let mutableValue: number = 10;
console.log(`let (до изменения): ${mutableValue}`);
mutableValue = 20; // можно изменить
console.log(`let (после изменения): ${mutableValue}`);

// const - для неизменяемых привязок (рекомендуется по умолчанию)
const immutableValue: number = 100;
console.log(`const: ${immutableValue}`);
// immutableValue = 200; // ошибка компиляции

// ============================================
// 2. ОБЛАСТЬ ВИДИМОСТИ (SCOPE)
// ============================================

console.log('\n2. ОБЛАСТЬ ВИДИМОСТИ\n');

// Блочная область видимости для let и const
{
  let blockScoped: string = 'Доступна только в блоке';
  const alsoBlockScoped: string = 'Тоже в блоке';
  console.log(`Внутри блока: ${blockScoped}, ${alsoBlockScoped}`);
}
// console.log(blockScoped); // ошибка: переменная не доступна вне блока

// Функциональная область видимости для var
function testVarScope(): void {
  if (true) {
    var functionScoped = 'Доступна во всей функции';
  }
  console.log(`var доступна вне if: ${functionScoped}`); // работает, но не рекомендуется
}
testVarScope();

// ============================================
// 3. АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ
// ============================================

console.log('\n3. АРИФМЕТИЧЕСКИЕ ОПЕРАТОРЫ\n');

const a: number = 10;
const b: number = 3;

// Основные арифметические операции
console.log(`Сложение: ${a} + ${b} = ${a + b}`); // 13
console.log(`Вычитание: ${a} - ${b} = ${a - b}`); // 7
console.log(`Умножение: ${a} * ${b} = ${a * b}`); // 30
console.log(`Деление: ${a} / ${b} = ${a / b}`); // 3.333...
console.log(`Остаток от деления: ${a} % ${b} = ${a % b}`); // 1
console.log(`Возведение в степень: ${a} ** ${b} = ${a ** b}`); // 1000

// Унарные операторы
let counter: number = 5;
console.log(`Исходное значение: ${counter}`);
console.log(`Префиксный инкремент: ${++counter}`); // сначала увеличивает, потом возвращает (6)
console.log(`Постфиксный инкремент: ${counter++}`); // сначала возвращает, потом увеличивает (6, потом 7)
console.log(`После постфиксного инкремента: ${counter}`); // 7
console.log(`Декремент: ${--counter}`); // 6

// ============================================
// 4. ОПЕРАТОРЫ ПРИСВАИВАНИЯ
// ============================================

console.log('\n4. ОПЕРАТОРЫ ПРИСВАИВАНИЯ\n');

let x: number = 10;
console.log(`Начальное значение: ${x}`);

x += 5; // x = x + 5
console.log(`После += 5: ${x}`); // 15

x -= 3; // x = x - 3
console.log(`После -= 3: ${x}`); // 12

x *= 2; // x = x * 2
console.log(`После *= 2: ${x}`); // 24

x /= 4; // x = x / 4
console.log(`После /= 4: ${x}`); // 6

x %= 4; // x = x % 4
console.log(`После %= 4: ${x}`); // 2

x **= 3; // x = x ** 3
console.log(`После **= 3: ${x}`); // 8

// ============================================
// 5. ОПЕРАТОРЫ СРАВНЕНИЯ
// ============================================

console.log('\n5. ОПЕРАТОРЫ СРАВНЕНИЯ\n');

const num1: number = 10;
const num2: number = 20;
const str1: string = '10';

// Строгое и нестрогое сравнение
console.log(`${num1} == ${str1}: ${num1 == str1}`); // true (приводит типы)
console.log(`${num1} === ${str1}: ${num1 === str1}`); // false (строгое сравнение типов)
console.log(`${num1} != ${str1}: ${num1 != str1}`); // false
console.log(`${num1} !== ${str1}: ${num1 !== str1}`); // true

// Сравнение больше/меньше
console.log(`${num1} > ${num2}: ${num1 > num2}`); // false
console.log(`${num1} < ${num2}: ${num1 < num2}`); // true
console.log(`${num1} >= ${num1}: ${num1 >= num1}`); // true
console.log(`${num1} <= ${num2}: ${num1 <= num2}`); // true

// ============================================
// 6. ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// ============================================

console.log('\n6. ЛОГИЧЕСКИЕ ОПЕРАТОРЫ\n');

const isTrue: boolean = true;
const isFalse: boolean = false;

// AND (&&) - логическое И (все должны быть true)
console.log(`true && true: ${isTrue && isTrue}`); // true
console.log(`true && false: ${isTrue && isFalse}`); // false

// OR (||) - логическое ИЛИ (хотя бы одно true)
console.log(`true || false: ${isTrue || isFalse}`); // true
console.log(`false || false: ${isFalse || isFalse}`); // false

// NOT (!) - логическое НЕ (инверсия)
console.log(`!true: ${!isTrue}`); // false
console.log(`!false: ${!isFalse}`); // true

// Короткое замыкание (short-circuit evaluation)
const getValue = (): string => {
  console.log('  Функция getValue вызвана');
  return 'значение';
};

console.log('Тест короткого замыкания с &&:');
false && getValue(); // getValue не будет вызвана
console.log('Тест короткого замыкания с ||:');
true || getValue(); // getValue не будет вызвана
console.log('Без короткого замыкания:');
false || getValue(); // getValue будет вызвана

// ============================================
// 7. ОПЕРАТОРЫ ОБЪЕДИНЕНИЯ
// ============================================

console.log('\n7. ОПЕРАТОРЫ ОБЪЕДИНЕНИЯ\n');

// Nullish coalescing operator (??) - возвращает правый операнд, если левый null или undefined
const value1: string | null = null;
const value2: string | null = 'существует';
const value3: number | undefined = undefined;
const value4: number = 0;

console.log(`null ?? 'по умолчанию': ${value1 ?? 'по умолчанию'}`); // 'по умолчанию'
console.log(`'существует' ?? 'по умолчанию': ${value2 ?? 'по умолчанию'}`); // 'существует'
console.log(`undefined ?? 42: ${value3 ?? 42}`); // 42
console.log(`0 ?? 42: ${value4 ?? 42}`); // 0 (потому что 0 не null и не undefined)

// Сравнение с оператором ||
console.log(`0 || 42: ${value4 || 42}`); // 42 (потому что 0 - ложное значение)

// Optional chaining (?.) - безопасное обращение к свойствам
interface User {
  name: string;
  address?: {
    city?: string;
  };
}

const user1: User = { name: 'Иван' };
const user2: User = { name: 'Мария', address: { city: 'Москва' } };

console.log(`Город пользователя 1: ${user1.address?.city ?? 'не указан'}`); // не указан
console.log(`Город пользователя 2: ${user2.address?.city ?? 'не указан'}`); // Москва

// ============================================
// 8. СТРОКОВЫЕ ОПЕРАТОРЫ
// ============================================

console.log('\n8. СТРОКОВЫЕ ОПЕРАТОРЫ\n');

const firstName: string = 'Иван';
const lastName: string = 'Петров';

// Конкатенация строк
const fullName: string = firstName + ' ' + lastName;
console.log(`Полное имя: ${fullName}`);

// Шаблонные строки (template literals)
const age: number = 25;
const message: string = `Меня зовут ${fullName}, мне ${age} лет.`;
console.log(message);

// Многострочные шаблонные строки
const multiline: string = `
  Это многострочная
  строка в TypeScript.
  Очень удобно!
`;
console.log(multiline);

// ============================================
// 9. ТЕРНАРНЫЙ ОПЕРАТОР
// ============================================

console.log('\n9. ТЕРНАРНЫЙ ОПЕРАТОР\n');

const userAge: number = 18;
// условие ? значение_если_true : значение_если_false
const status: string = userAge >= 18 ? 'Совершеннолетний' : 'Несовершеннолетний';
console.log(`Возраст ${userAge}: ${status}`);

// Вложенные тернарные операторы (использовать с осторожностью)
const score: number = 85;
const grade: string = score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : 'D';
console.log(`Оценка ${score}: ${grade}`);

// ============================================
// 10. ОПЕРАТОР TYPEOF
// ============================================

console.log('\n10. ОПЕРАТОР TYPEOF\n');

const strVar: string = 'текст';
const numVar: number = 42;
const boolVar: boolean = true;
const objVar: object = { key: 'value' };
const arrVar: number[] = [1, 2, 3];
const funcVar: Function = () => {};

console.log(`typeof '${strVar}': ${typeof strVar}`); // string
console.log(`typeof ${numVar}: ${typeof numVar}`); // number
console.log(`typeof ${boolVar}: ${typeof boolVar}`); // boolean
console.log(`typeof {}: ${typeof objVar}`); // object
console.log(`typeof []: ${typeof arrVar}`); // object (массивы - это объекты)
console.log(`typeof function: ${typeof funcVar}`); // function

console.log('\n=== Модуль 02 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Используйте const по умолчанию, let только когда нужно переназначение
 * 2. Избегайте var - используйте let/const для лучшей оптимизации
 * 3. Используйте строгое сравнение (===) вместо нестрогого (==)
 * 4. Операторы && и || используют короткое замыкание - это оптимизирует выполнение
 * 5. Шаблонные строки более читаемы и производительны, чем конкатенация
 * 6. Оператор ?? эффективнее цепочки проверок на null/undefined
 * 7. Optional chaining (?.) предотвращает ошибки и улучшает читаемость
 */
