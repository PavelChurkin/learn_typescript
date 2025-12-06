/**
 * Модуль 08: Советы по производительности и оптимизации
 *
 * Этот модуль содержит практические рекомендации по написанию
 * производительного и оптимизированного TypeScript кода.
 */

console.log('=== Модуль 08: Производительность и оптимизация ===\n');

// ============================================
// 1. ВЫБОР ПРАВИЛЬНЫХ СТРУКТУР ДАННЫХ
// ============================================

console.log('1. ВЫБОР ПРАВИЛЬНЫХ СТРУКТУР ДАННЫХ\n');

// Используйте Set для уникальных значений
const startSet = performance.now();
const uniqueSet = new Set([1, 2, 3, 4, 5]);
uniqueSet.has(3); // O(1) - константное время
const endSet = performance.now();

// Сравните с Array
const startArray = performance.now();
const uniqueArray = [1, 2, 3, 4, 5];
uniqueArray.includes(3); // O(n) - линейное время
const endArray = performance.now();

console.log(`Set.has(): ${(endSet - startSet).toFixed(6)} мс`);
console.log(`Array.includes(): ${(endArray - startArray).toFixed(6)} мс`);

// Используйте Map для пар ключ-значение
const userMap = new Map<number, string>();
userMap.set(1, 'Иван');
userMap.set(2, 'Мария');
console.log(`Map.get(1): ${userMap.get(1)}`);

// Map vs Object для частых операций добавления/удаления
console.log('Map эффективнее Object для частых изменений');

// ============================================
// 2. ОПТИМИЗАЦИЯ ЦИКЛОВ
// ============================================

console.log('\n2. ОПТИМИЗАЦИЯ ЦИКЛОВ\n');

const largeArray = Array.from({ length: 1000 }, (_, i) => i);

// Плохо: вычисление length на каждой итерации
console.time('Цикл без кэширования length');
for (let i = 0; i < largeArray.length; i++) {
  // операция
}
console.timeEnd('Цикл без кэширования length');

// Хорошо: кэширование length
console.time('Цикл с кэшированием length');
const len = largeArray.length;
for (let i = 0; i < len; i++) {
  // операция
}
console.timeEnd('Цикл с кэшированием length');

// Для простой итерации используйте for...of
console.time('for...of');
for (const item of largeArray) {
  // операция
}
console.timeEnd('for...of');

// ============================================
// 3. ИЗБЕГАЙТЕ ЛИШНИХ ВЫЧИСЛЕНИЙ
// ============================================

console.log('\n3. ИЗБЕГАЙТЕ ЛИШНИХ ВЫЧИСЛЕНИЙ\n');

// Плохо: вычисление в цикле
console.time('Вычисление в цикле');
for (let i = 0; i < 1000; i++) {
  const result = Math.sqrt(16) * 2; // вычисляется 1000 раз
}
console.timeEnd('Вычисление в цикле');

// Хорошо: вычисление один раз
console.time('Вычисление вне цикла');
const precomputed = Math.sqrt(16) * 2; // вычисляется один раз
for (let i = 0; i < 1000; i++) {
  const result = precomputed;
}
console.timeEnd('Вычисление вне цикла');

// ============================================
// 4. МЕМОИЗАЦИЯ
// ============================================

console.log('\n4. МЕМОИЗАЦИЯ\n');

// Без мемоизации
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// С мемоизацией
const fibCache = new Map<number, number>();
function fibonacciMemoized(n: number): number {
  if (n <= 1) return n;
  if (fibCache.has(n)) {
    return fibCache.get(n)!;
  }
  const result = fibonacciMemoized(n - 1) + fibonacciMemoized(n - 2);
  fibCache.set(n, result);
  return result;
}

console.time('Fibonacci без мемоизации (n=30)');
fibonacci(30);
console.timeEnd('Fibonacci без мемоизации (n=30)');

console.time('Fibonacci с мемоизацией (n=30)');
fibonacciMemoized(30);
console.timeEnd('Fibonacci с мемоизацией (n=30)');

// ============================================
// 5. РАБОТА СО СТРОКАМИ
// ============================================

console.log('\n5. РАБОТА СО СТРОКАМИ\n');

// Плохо: конкатенация в цикле
console.time('Конкатенация строк');
let str = '';
for (let i = 0; i < 1000; i++) {
  str += 'x'; // каждый раз создается новая строка
}
console.timeEnd('Конкатенация строк');

// Хорошо: использование массива
console.time('Массив + join');
const parts: string[] = [];
for (let i = 0; i < 1000; i++) {
  parts.push('x');
}
const result = parts.join('');
console.timeEnd('Массив + join');

// Шаблонные строки эффективны
const name = 'TypeScript';
const version = '5.0';
const message = `Изучаем ${name} версии ${version}`; // эффективно
console.log(message);

// ============================================
// 6. РАБОТА С МАССИВАМИ
// ============================================

console.log('\n6. РАБОТА С МАССИВАМИ\n');

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Плохо: несколько проходов
console.time('Несколько проходов');
const filtered1 = numbers.filter(n => n > 5);
const doubled1 = filtered1.map(n => n * 2);
const sum1 = doubled1.reduce((a, b) => a + b, 0);
console.timeEnd('Несколько проходов');

// Хорошо: один проход с reduce
console.time('Один проход');
const sum2 = numbers.reduce((acc, n) => {
  return n > 5 ? acc + n * 2 : acc;
}, 0);
console.timeEnd('Один проход');

// find() останавливается на первом найденном
const found = numbers.find(n => n > 7); // эффективнее filter()[0]
console.log(`find(n > 7): ${found}`);

// ============================================
// 7. ИСПОЛЬЗОВАНИЕ CONST И LET
// ============================================

console.log('\n7. ИСПОЛЬЗОВАНИЕ CONST И LET\n');

// const позволяет движку JavaScript оптимизировать код
const PI = 3.14159; // компилятор знает, что значение не изменится
let radius = 5; // может измениться

// Используйте const по умолчанию
const immutableArray = [1, 2, 3];
// можно изменять содержимое, но не ссылку
immutableArray.push(4);

console.log('Используйте const для неизменяемых привязок');

// ============================================
// 8. ДЕСТРУКТУРИЗАЦИЯ
// ============================================

console.log('\n8. ДЕСТРУКТУРИЗАЦИЯ\n');

const user = {
  id: 1,
  name: 'Иван',
  email: 'ivan@example.com',
  age: 30
};

// Эффективно: извлекаем только нужные свойства
const { name, email } = user;
console.log(`${name}: ${email}`);

// Для массивов
const [first, second] = [1, 2, 3, 4, 5];
console.log(`Первые два: ${first}, ${second}`);

// ============================================
// 9. КОРОТКОЕ ЗАМЫКАНИЕ
// ============================================

console.log('\n9. КОРОТКОЕ ЗАМЫКАНИЕ\n');

// Используйте && и || для условных операций
function expensiveOperation(): string {
  console.log('  Дорогая операция выполнена');
  return 'результат';
}

// && - выполняется только если левая часть true
const condition = false;
const result1 = condition && expensiveOperation(); // expensiveOperation не вызовется
console.log('&& с false - операция не выполнена');

// || - выполняется только если левая часть false
const value = 'существует';
const result2 = value || expensiveOperation(); // expensiveOperation не вызовется
console.log('|| с существующим значением - операция не выполнена');

// Nullish coalescing (??) для значений по умолчанию
const config = null;
const defaultConfig = config ?? { timeout: 5000 };
console.log(`Config timeout: ${defaultConfig.timeout}`);

// ============================================
// 10. ТИПИЗАЦИЯ И ПРОИЗВОДИТЕЛЬНОСТЬ
// ============================================

console.log('\n10. ТИПИЗАЦИЯ И ПРОИЗВОДИТЕЛЬНОСТЬ\n');

// Строгая типизация помогает компилятору оптимизировать
function addNumbers(a: number, b: number): number {
  return a + b; // компилятор знает, что это числа
}

// Избегайте any - это отключает оптимизации
function addAny(a: any, b: any): any {
  return a + b; // компилятор не может оптимизировать
}

console.log('Строгая типизация улучшает производительность');

// Generic функции эффективны
function identity<T>(value: T): T {
  return value; // нет overhead во время выполнения
}

console.log(`identity<number>(42): ${identity<number>(42)}`);

// ============================================
// 11. АСИНХРОННОСТЬ
// ============================================

console.log('\n11. АСИНХРОННОСТЬ\n');

// Promise для асинхронных операций
function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// async/await для читаемости
async function asyncExample(): Promise<void> {
  console.log('Начало асинхронной операции');
  await delay(100);
  console.log('Асинхронная операция завершена');
}

// Не блокируем основной поток
console.log('Асинхронные операции не блокируют выполнение');

// ============================================
// 12. ИЗБЕГАЙТЕ ГЛУБОКОЙ ВЛОЖЕННОСТИ
// ============================================

console.log('\n12. ИЗБЕГАЙТЕ ГЛУБОКОЙ ВЛОЖЕННОСТИ\n');

// Плохо: глубокая вложенность
function processDataBad(data: any): string {
  if (data) {
    if (data.items) {
      if (data.items.length > 0) {
        return 'OK';
      }
    }
  }
  return 'ERROR';
}

// Хорошо: ранний выход
function processDataGood(data: any): string {
  if (!data) return 'ERROR';
  if (!data.items) return 'ERROR';
  if (data.items.length === 0) return 'ERROR';
  return 'OK';
}

console.log('Guard clauses улучшают читаемость и производительность');

// ============================================
// 13. ОПТИМИЗАЦИЯ ОБЪЕКТОВ
// ============================================

console.log('\n13. ОПТИМИЗАЦИЯ ОБЪЕКТОВ\n');

// Используйте Object.keys/values/entries
const obj = { a: 1, b: 2, c: 3 };

console.time('Object.keys');
Object.keys(obj).forEach(key => {
  // операция
});
console.timeEnd('Object.keys');

// Spread для копирования эффективен
const copy = { ...obj };
console.log(`Копия: ${JSON.stringify(copy)}`);

// Избегайте delete - устанавливайте в undefined
const toModify = { x: 1, y: 2, z: 3 };
toModify.y = undefined as any; // лучше чем delete toModify.y
console.log('Используйте undefined вместо delete');

// ============================================
// 14. СВОДКА РЕКОМЕНДАЦИЙ
// ============================================

console.log('\n14. СВОДКА РЕКОМЕНДАЦИЙ\n');

const recommendations = [
  '1. Используйте правильные структуры данных (Set, Map)',
  '2. Кэшируйте длину массива в циклах',
  '3. Выносите вычисления из циклов',
  '4. Применяйте мемоизацию для тяжелых функций',
  '5. Используйте массив + join вместо конкатенации строк',
  '6. Объединяйте операции над массивами',
  '7. Используйте const по умолчанию',
  '8. Применяйте деструктуризацию',
  '9. Используйте короткое замыкание (&&, ||, ??)',
  '10. Строго типизируйте код',
  '11. Используйте async/await для асинхронности',
  '12. Избегайте глубокой вложенности',
  '13. Предпочитайте Object.keys/values/entries',
  '14. Используйте optional chaining (?.)',
  '15. Применяйте nullish coalescing (??)'
];

recommendations.forEach(rec => console.log(`  ${rec}`));

console.log('\n=== Модуль 08 завершен ===\n');

/**
 * КЛЮЧЕВЫЕ ВЫВОДЫ:
 *
 * 1. СТРУКТУРЫ ДАННЫХ - выбирайте правильный инструмент (Set, Map, Array)
 * 2. ЦИКЛЫ - кэшируйте, оптимизируйте, объединяйте операции
 * 3. ВЫЧИСЛЕНИЯ - выносите из циклов, используйте мемоизацию
 * 4. СТРОКИ - массив + join вместо конкатенации
 * 5. ТИПИЗАЦИЯ - строгие типы помогают оптимизации
 * 6. АСИНХРОННОСТЬ - не блокируйте основной поток
 * 7. КОД - простота и читаемость часто приводят к лучшей производительности
 *
 * Помните: преждевременная оптимизация - корень всех зол.
 * Сначала пишите чистый и понятный код, затем оптимизируйте узкие места.
 */
