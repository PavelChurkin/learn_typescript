/**
 * Модуль 04: Циклы
 *
 * Циклы позволяют выполнять код многократно.
 * В TypeScript доступны различные типы циклов для разных сценариев.
 */

console.log('=== Модуль 04: Циклы ===\n');

// ============================================
// 1. ЦИКЛ FOR
// ============================================

console.log('1. ЦИКЛ FOR\n');

// Классический цикл for: for (инициализация; условие; шаг)
console.log('Числа от 1 до 5:');
for (let i: number = 1; i <= 5; i++) {
  console.log(`  ${i}`);
}

// Цикл с шагом больше 1
console.log('\nЧетные числа от 0 до 10:');
for (let i: number = 0; i <= 10; i += 2) {
  console.log(`  ${i}`);
}

// Обратный цикл
console.log('\nОбратный отсчет от 5 до 1:');
for (let i: number = 5; i >= 1; i--) {
  console.log(`  ${i}`);
}

// Вложенные циклы (таблица умножения)
console.log('\nТаблица умножения (фрагмент):');
for (let i: number = 1; i <= 3; i++) {
  let row: string = '';
  for (let j: number = 1; j <= 3; j++) {
    row += `${i * j}\t`;
  }
  console.log(`  ${row}`);
}

// ============================================
// 2. ЦИКЛ WHILE
// ============================================

console.log('\n2. ЦИКЛ WHILE\n');

// While выполняется, пока условие истинно (проверка перед итерацией)
let count: number = 1;
console.log('Подсчет от 1 до 5 с while:');
while (count <= 5) {
  console.log(`  ${count}`);
  count++;
}

// While для неизвестного количества итераций
let sum: number = 0;
let num: number = 1;
console.log('\nСумма чисел до достижения 20:');
while (sum < 20) {
  sum += num;
  console.log(`  Добавлено ${num}, сумма = ${sum}`);
  num++;
}

// ============================================
// 3. ЦИКЛ DO-WHILE
// ============================================

console.log('\n3. ЦИКЛ DO-WHILE\n');

// Do-while выполняется минимум один раз (проверка после итерации)
let counter: number = 1;
console.log('Do-while (выполнится минимум один раз):');
do {
  console.log(`  Итерация ${counter}`);
  counter++;
} while (counter <= 3);

// Отличие от while: выполнится один раз даже если условие ложно
let value: number = 10;
console.log('\nDo-while с ложным условием (выполнится один раз):');
do {
  console.log(`  Значение: ${value}`);
  value++;
} while (value < 10); // условие ложно, но блок выполнился один раз

// ============================================
// 4. FOR...OF (ИТЕРАЦИЯ ПО ЗНАЧЕНИЯМ)
// ============================================

console.log('\n4. FOR...OF (ИТЕРАЦИЯ ПО ЗНАЧЕНИЯМ)\n');

// For...of для массивов
const fruits: string[] = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
console.log('Фрукты:');
for (const fruit of fruits) {
  console.log(`  - ${fruit}`);
}

// For...of для строк
const text: string = 'TypeScript';
console.log('\nБуквы в слове "TypeScript":');
for (const char of text) {
  console.log(`  ${char}`);
}

// For...of для чисел (массив)
const numbers: number[] = [10, 20, 30, 40, 50];
let total: number = 0;
for (const num of numbers) {
  total += num;
}
console.log(`\nСумма чисел [10, 20, 30, 40, 50]: ${total}`);

// For...of с entries (доступ к индексу и значению)
console.log('\nФрукты с индексами:');
for (const [index, fruit] of fruits.entries()) {
  console.log(`  ${index}: ${fruit}`);
}

// ============================================
// 5. FOR...IN (ИТЕРАЦИЯ ПО КЛЮЧАМ)
// ============================================

console.log('\n5. FOR...IN (ИТЕРАЦИЯ ПО КЛЮЧАМ)\n');

// For...in для объектов (перебор свойств)
const person = {
  name: 'Иван',
  age: 30,
  city: 'Москва',
  occupation: 'Разработчик'
};

console.log('Свойства объекта person:');
for (const key in person) {
  // key имеет тип string
  console.log(`  ${key}: ${person[key as keyof typeof person]}`);
}

// For...in для массивов (не рекомендуется, лучше использовать for...of)
const colors: string[] = ['Красный', 'Зеленый', 'Синий'];
console.log('\nИндексы массива colors (for...in):');
for (const index in colors) {
  console.log(`  Индекс ${index}: ${colors[index]}`);
}

// ============================================
// 6. ОПЕРАТОРЫ BREAK И CONTINUE
// ============================================

console.log('\n6. ОПЕРАТОРЫ BREAK И CONTINUE\n');

// Break - прерывает выполнение цикла
console.log('Поиск первого числа больше 15:');
for (let i: number = 1; i <= 30; i++) {
  if (i > 15) {
    console.log(`  Найдено: ${i}`);
    break; // выход из цикла
  }
}

// Continue - пропускает текущую итерацию и переходит к следующей
console.log('\nНечетные числа от 1 до 10 (с continue):');
for (let i: number = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // пропускаем четные числа
  }
  console.log(`  ${i}`);
}

// Break в вложенных циклах (выходит только из внутреннего)
console.log('\nВыход из вложенного цикла:');
for (let i: number = 1; i <= 3; i++) {
  console.log(`  Внешний цикл: ${i}`);
  for (let j: number = 1; j <= 3; j++) {
    if (j === 2) {
      console.log(`    Прерывание при j = ${j}`);
      break; // прерывает только внутренний цикл
    }
    console.log(`    Внутренний цикл: ${j}`);
  }
}

// Break с меткой (для выхода из внешнего цикла)
console.log('\nВыход из внешнего цикла с меткой:');
outerLoop: for (let i: number = 1; i <= 3; i++) {
  for (let j: number = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      console.log(`  Прерывание при i=${i}, j=${j}`);
      break outerLoop; // выход из внешнего цикла
    }
    console.log(`  i=${i}, j=${j}`);
  }
}

// ============================================
// 7. МЕТОДЫ МАССИВОВ (ФУНКЦИОНАЛЬНЫЕ ЦИКЛЫ)
// ============================================

console.log('\n7. МЕТОДЫ МАССИВОВ\n');

const nums: number[] = [1, 2, 3, 4, 5];

// forEach - выполняет функцию для каждого элемента
console.log('forEach - вывод элементов:');
nums.forEach((num: number, index: number) => {
  console.log(`  [${index}]: ${num}`);
});

// map - создает новый массив с преобразованными элементами
const doubled: number[] = nums.map((num: number) => num * 2);
console.log(`\nmap - удвоенные числа: [${doubled.join(', ')}]`);

// filter - создает новый массив с элементами, прошедшими проверку
const evenNumbers: number[] = nums.filter((num: number) => num % 2 === 0);
console.log(`filter - четные числа: [${evenNumbers.join(', ')}]`);

// reduce - сводит массив к одному значению
const sumTotal: number = nums.reduce((acc: number, num: number) => acc + num, 0);
console.log(`reduce - сумма: ${sumTotal}`);

// find - находит первый элемент, удовлетворяющий условию
const found: number | undefined = nums.find((num: number) => num > 3);
console.log(`find - первое число > 3: ${found}`);

// some - проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
const hasEven: boolean = nums.some((num: number) => num % 2 === 0);
console.log(`some - есть четные числа: ${hasEven}`);

// every - проверяет, все ли элементы удовлетворяют условию
const allPositive: boolean = nums.every((num: number) => num > 0);
console.log(`every - все числа положительные: ${allPositive}`);

// ============================================
// 8. БЕСКОНЕЧНЫЕ ЦИКЛЫ И ИХ ПРЕДОТВРАЩЕНИЕ
// ============================================

console.log('\n8. БЕСКОНЕЧНЫЕ ЦИКЛЫ\n');

// Бесконечный цикл с условием выхода
let attempts: number = 0;
const maxAttempts: number = 5;
console.log('Цикл с защитой от бесконечности:');
while (true) {
  attempts++;
  console.log(`  Попытка ${attempts}`);

  if (attempts >= maxAttempts) {
    console.log(`  Достигнут лимит попыток (${maxAttempts})`);
    break; // обязательный выход
  }
}

// ============================================
// 9. ПРИМЕРЫ ПРАКТИЧЕСКИХ ЗАДАЧ
// ============================================

console.log('\n9. ПРАКТИЧЕСКИЕ ПРИМЕРЫ\n');

// Пример 1: Факториал
function factorial(n: number): number {
  let result: number = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(`Факториал 5: ${factorial(5)}`); // 120

// Пример 2: Числа Фибоначчи
function fibonacci(n: number): number[] {
  const sequence: number[] = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}
console.log(`Первые 8 чисел Фибоначчи: [${fibonacci(8).join(', ')}]`);

// Пример 3: Проверка на простое число
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  if (num <= 3) return true;

  // Проверяем только до квадратного корня
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(`17 простое число: ${isPrime(17)}`); // true
console.log(`18 простое число: ${isPrime(18)}`); // false

// Пример 4: Переворот строки
function reverseString(str: string): string {
  let reversed: string = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(`Переворот "TypeScript": ${reverseString('TypeScript')}`);

console.log('\n=== Модуль 04 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Выбирайте правильный цикл для задачи:
 *    - for: когда известно количество итераций
 *    - while: когда условие выхода сложное
 *    - for...of: для итерации по значениям массива/строки
 *    - for...in: для итерации по свойствам объекта
 *
 * 2. Кэшируйте длину массива в переменной при использовании for:
 *    const len = array.length;
 *    for (let i = 0; i < len; i++) { ... }
 *
 * 3. Используйте методы массивов (map, filter, reduce) для функционального стиля
 *
 * 4. Break и continue помогают избежать лишних итераций
 *
 * 5. Избегайте модификации массива во время итерации
 *
 * 6. For...of обычно быстрее forEach для больших массивов
 *
 * 7. Для проверки простого числа проверяйте только до sqrt(n)
 *
 * 8. Используйте метки для break/continue только когда действительно нужно
 */
