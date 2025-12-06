/**
 * Модуль 06: Массивы
 *
 * Массивы - это упорядоченные коллекции элементов одного или разных типов.
 * TypeScript предоставляет мощные инструменты для работы с массивами.
 */

console.log('=== Модуль 06: Массивы ===\n');

// ============================================
// 1. СОЗДАНИЕ МАССИВОВ
// ============================================

console.log('1. СОЗДАНИЕ МАССИВОВ\n');

// Создание массива с помощью литерала
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Числа: [${numbers.join(', ')}]`);

// Альтернативный синтаксис с Array<T>
const strings: Array<string> = ['один', 'два', 'три'];
console.log(`Строки: [${strings.join(', ')}]`);

// Пустой массив
const empty: number[] = [];
console.log(`Пустой массив: [${empty.join(', ')}]`);

// Массив с помощью конструктора Array
const arrayFromConstructor: number[] = new Array(3).fill(0);
console.log(`Array(3).fill(0): [${arrayFromConstructor.join(', ')}]`);

// Создание массива с помощью Array.of
const arrayOf: number[] = Array.of(1, 2, 3);
console.log(`Array.of(1,2,3): [${arrayOf.join(', ')}]`);

// Создание массива с помощью Array.from
const arrayFrom: number[] = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(`Array.from (1-5): [${arrayFrom.join(', ')}]`);

// ============================================
// 2. ТИПИЗАЦИЯ МАССИВОВ
// ============================================

console.log('\n2. ТИПИЗАЦИЯ МАССИВОВ\n');

// Массив чисел
const scores: number[] = [85, 90, 78, 92];
console.log(`Оценки: [${scores.join(', ')}]`);

// Массив строк
const names: string[] = ['Иван', 'Мария', 'Петр'];
console.log(`Имена: [${names.join(', ')}]`);

// Массив смешанных типов (union)
const mixed: (string | number)[] = ['текст', 42, 'еще текст', 100];
console.log(`Смешанный: [${mixed.join(', ')}]`);

// Массив объектов
interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Анна', age: 25 },
  { name: 'Борис', age: 30 }
];
console.log(`Пользователи: ${users.map(u => `${u.name}(${u.age})`).join(', ')}`);

// Readonly массив (нельзя изменять)
const readonly: readonly number[] = [1, 2, 3];
console.log(`Readonly: [${readonly.join(', ')}]`);
// readonly.push(4); // ошибка компиляции

// ============================================
// 3. ДОСТУП К ЭЛЕМЕНТАМ
// ============================================

console.log('\n3. ДОСТУП К ЭЛЕМЕНТАМ\n');

const fruits: string[] = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];

// Доступ по индексу (начинается с 0)
console.log(`Первый элемент: ${fruits[0]}`);
console.log(`Второй элемент: ${fruits[1]}`);

// Последний элемент
console.log(`Последний элемент: ${fruits[fruits.length - 1]}`);

// Доступ к несуществующему индексу
console.log(`Несуществующий индекс: ${fruits[10]}`); // undefined

// ============================================
// 4. ИЗМЕНЕНИЕ МАССИВА
// ============================================

console.log('\n4. ИЗМЕНЕНИЕ МАССИВА\n');

const items: string[] = ['a', 'b', 'c'];
console.log(`Исходный: [${items.join(', ')}]`);

// Добавление в конец (push)
items.push('d');
console.log(`После push('d'): [${items.join(', ')}]`);

// Добавление в начало (unshift)
items.unshift('z');
console.log(`После unshift('z'): [${items.join(', ')}]`);

// Удаление с конца (pop)
const last = items.pop();
console.log(`После pop() (удален ${last}): [${items.join(', ')}]`);

// Удаление с начала (shift)
const first = items.shift();
console.log(`После shift() (удален ${first}): [${items.join(', ')}]`);

// Изменение элемента по индексу
items[1] = 'X';
console.log(`После items[1]='X': [${items.join(', ')}]`);

// ============================================
// 5. МЕТОДЫ ПОИСКА
// ============================================

console.log('\n5. МЕТОДЫ ПОИСКА\n');

const nums: number[] = [10, 20, 30, 40, 50];

// indexOf - поиск первого вхождения
console.log(`indexOf(30): ${nums.indexOf(30)}`); // 2
console.log(`indexOf(99): ${nums.indexOf(99)}`); // -1 (не найдено)

// lastIndexOf - поиск последнего вхождения
const duplicates: number[] = [1, 2, 3, 2, 1];
console.log(`lastIndexOf(2) в [1,2,3,2,1]: ${duplicates.lastIndexOf(2)}`); // 3

// includes - проверка наличия элемента
console.log(`includes(40): ${nums.includes(40)}`); // true
console.log(`includes(99): ${nums.includes(99)}`); // false

// find - поиск первого элемента по условию
const found = nums.find(num => num > 25);
console.log(`find(num > 25): ${found}`); // 30

// findIndex - индекс первого элемента по условию
const foundIndex = nums.findIndex(num => num > 25);
console.log(`findIndex(num > 25): ${foundIndex}`); // 2

// ============================================
// 6. МЕТОДЫ ФИЛЬТРАЦИИ И ПРЕОБРАЗОВАНИЯ
// ============================================

console.log('\n6. МЕТОДЫ ФИЛЬТРАЦИИ И ПРЕОБРАЗОВАНИЯ\n');

const values: number[] = [1, 2, 3, 4, 5, 6];

// filter - создает новый массив с элементами, прошедшими проверку
const evens = values.filter(num => num % 2 === 0);
console.log(`filter (четные): [${evens.join(', ')}]`);

// map - создает новый массив с преобразованными элементами
const doubled = values.map(num => num * 2);
console.log(`map (удвоенные): [${doubled.join(', ')}]`);

// map с индексом
const indexed = values.map((num, index) => `[${index}]=${num}`);
console.log(`map с индексом: ${indexed.join(', ')}`);

// flatMap - map + flatten
const nested = [1, 2, 3].flatMap(x => [x, x * 2]);
console.log(`flatMap: [${nested.join(', ')}]`);

// ============================================
// 7. МЕТОДЫ АГРЕГАЦИИ
// ============================================

console.log('\n7. МЕТОДЫ АГРЕГАЦИИ\n');

const data: number[] = [5, 10, 15, 20, 25];

// reduce - сворачивает массив к одному значению
const sum = data.reduce((acc, num) => acc + num, 0);
console.log(`reduce (сумма): ${sum}`);

// reduce для поиска максимума
const max = data.reduce((max, num) => num > max ? num : max, data[0]);
console.log(`reduce (максимум): ${max}`);

// reduceRight - reduce справа налево
const concatenated = ['a', 'b', 'c'].reduceRight((acc, str) => acc + str, '');
console.log(`reduceRight: ${concatenated}`);

// ============================================
// 8. МЕТОДЫ ПРОВЕРКИ
// ============================================

console.log('\n8. МЕТОДЫ ПРОВЕРКИ\n');

const testArray: number[] = [2, 4, 6, 8, 10];

// every - проверяет, все ли элементы удовлетворяют условию
const allEven = testArray.every(num => num % 2 === 0);
console.log(`every (все четные): ${allEven}`);

// some - проверяет, есть ли хотя бы один элемент, удовлетворяющий условию
const hasLarge = testArray.some(num => num > 7);
console.log(`some (есть > 7): ${hasLarge}`);

// ============================================
// 9. МЕТОДЫ СОРТИРОВКИ
// ============================================

console.log('\n9. МЕТОДЫ СОРТИРОВКИ\n');

// sort - сортирует массив (изменяет исходный)
const unsorted: number[] = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b); // копируем, чтобы не изменять исходный
console.log(`sort (возрастание): [${sorted.join(', ')}]`);

// Сортировка по убыванию
const descending = [...unsorted].sort((a, b) => b - a);
console.log(`sort (убывание): [${descending.join(', ')}]`);

// Сортировка строк
const words: string[] = ['банан', 'яблоко', 'апельсин'];
const sortedWords = [...words].sort();
console.log(`sort (строки): [${sortedWords.join(', ')}]`);

// reverse - переворачивает массив
const reversed = [...values].reverse();
console.log(`reverse: [${reversed.join(', ')}]`);

// ============================================
// 10. МЕТОДЫ ИЗВЛЕЧЕНИЯ
// ============================================

console.log('\n10. МЕТОДЫ ИЗВЛЕЧЕНИЯ\n');

const original: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

// slice - извлекает часть массива (не изменяет исходный)
const sliced = original.slice(2, 5); // от индекса 2 до 5 (не включая 5)
console.log(`slice(2, 5): [${sliced.join(', ')}]`);

// slice без второго параметра (до конца)
const fromThree = original.slice(3);
console.log(`slice(3): [${fromThree.join(', ')}]`);

// slice с отрицательным индексом (с конца)
const lastThree = original.slice(-3);
console.log(`slice(-3): [${lastThree.join(', ')}]`);

// splice - удаляет/добавляет элементы (изменяет исходный)
const forSplice = [1, 2, 3, 4, 5];
const removed = forSplice.splice(2, 2, 99, 88); // удаляем 2 элемента с индекса 2, вставляем 99, 88
console.log(`splice(2,2,99,88) удалено: [${removed.join(', ')}]`);
console.log(`splice результат: [${forSplice.join(', ')}]`);

// ============================================
// 11. МЕТОДЫ ОБЪЕДИНЕНИЯ
// ============================================

console.log('\n11. МЕТОДЫ ОБЪЕДИНЕНИЯ\n');

const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

// concat - объединяет массивы
const concatenatedArr = arr1.concat(arr2);
console.log(`concat: [${concatenatedArr.join(', ')}]`);

// Spread operator (рекомендуется)
const spread = [...arr1, ...arr2];
console.log(`spread: [${spread.join(', ')}]`);

// join - объединяет элементы в строку
const joined = arr1.join(' - ');
console.log(`join(' - '): ${joined}`);

// ============================================
// 12. МНОГОМЕРНЫЕ МАССИВЫ
// ============================================

console.log('\n12. МНОГОМЕРНЫЕ МАССИВЫ\n');

// Двумерный массив (матрица)
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log('Матрица 3x3:');
matrix.forEach(row => {
  console.log(`  [${row.join(', ')}]`);
});

// Доступ к элементам
console.log(`Элемент [1][1]: ${matrix[1][1]}`); // 5

// flat - разглаживает вложенные массивы
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flattened = nestedArray.flat(2); // глубина 2
console.log(`flat: [${flattened.join(', ')}]`);

// ============================================
// 13. ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
// ============================================

console.log('\n13. ДЕСТРУКТУРИЗАЦИЯ\n');

const colors: string[] = ['красный', 'зеленый', 'синий', 'желтый'];

// Базовая деструктуризация
const [first2, second2] = colors;
console.log(`Первые два: ${first2}, ${second2}`);

// Пропуск элементов
const [, , third] = colors;
console.log(`Третий элемент: ${third}`);

// Rest в деструктуризации
const [primary, ...others] = colors;
console.log(`Первый: ${primary}, Остальные: [${others.join(', ')}]`);

// ============================================
// 14. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// ============================================

console.log('\n14. ПРАКТИЧЕСКИЕ ПРИМЕРЫ\n');

// Пример 1: Удаление дубликатов
const withDuplicates: number[] = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log(`Уникальные: [${unique.join(', ')}]`);

// Пример 2: Группировка по условию
const numbersToGroup: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const grouped = {
  even: numbersToGroup.filter(n => n % 2 === 0),
  odd: numbersToGroup.filter(n => n % 2 !== 0)
};
console.log(`Четные: [${grouped.even.join(', ')}]`);
console.log(`Нечетные: [${grouped.odd.join(', ')}]`);

// Пример 3: Поиск пересечения массивов
const a: number[] = [1, 2, 3, 4, 5];
const b: number[] = [3, 4, 5, 6, 7];
const intersection = a.filter(x => b.includes(x));
console.log(`Пересечение: [${intersection.join(', ')}]`);

// Пример 4: Разбиение на группы (chunks)
function chunk<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

const toChunk = [1, 2, 3, 4, 5, 6, 7, 8];
const chunked = chunk(toChunk, 3);
console.log('Разбиение на группы по 3:');
chunked.forEach((ch, i) => console.log(`  Группа ${i + 1}: [${ch.join(', ')}]`));

console.log('\n=== Модуль 06 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Используйте методы массивов (map, filter) вместо циклов for - они более выразительны
 * 2. Для больших массивов избегайте множественных проходов - объединяйте операции
 * 3. Метод find() эффективнее filter()[0] - он останавливается на первом найденном
 * 4. Используйте Set для удаления дубликатов - это быстрее ручной фильтрации
 * 5. splice изменяет исходный массив, slice создает новый - учитывайте это
 * 6. spread оператор [...arr] создает поверхностную копию массива
 * 7. reduce мощный, но может быть менее читаемым - используйте с осторожностью
 * 8. Кэшируйте length массива в циклах for для оптимизации
 * 9. includes() быстрее indexOf() !== -1 для проверки наличия
 * 10. flatMap эффективнее map().flat()
 */
