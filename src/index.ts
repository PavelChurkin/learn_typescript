/**
 * Главный файл учебной программы по TypeScript
 *
 * Этот файл предоставляет обзор всех модулей курса.
 * Для запуска отдельных модулей используйте соответствующие npm скрипты.
 */

console.log('╔═══════════════════════════════════════════════════════════╗');
console.log('║    УЧЕБНАЯ ПРОГРАММА ПО TYPESCRIPT                        ║');
console.log('╚═══════════════════════════════════════════════════════════╝\n');

console.log('Добро пожаловать в курс по изучению TypeScript!\n');

console.log('Доступные модули:\n');

const modules = [
  {
    number: '01',
    name: 'Введение в TypeScript и базовые типы данных',
    command: 'npm run module01',
    topics: ['Базовые типы', 'Расширенные типы', 'Литеральные типы', 'Type assertion']
  },
  {
    number: '02',
    name: 'Переменные и операторы',
    command: 'npm run module02',
    topics: ['var, let, const', 'Арифметические операторы', 'Логические операторы', 'Nullish coalescing']
  },
  {
    number: '03',
    name: 'Условные конструкции',
    command: 'npm run module03',
    topics: ['if/else', 'switch', 'Тернарный оператор', 'Type guards']
  },
  {
    number: '04',
    name: 'Циклы',
    command: 'npm run module04',
    topics: ['for, while, do-while', 'for...of, for...in', 'break, continue', 'Методы массивов']
  },
  {
    number: '05',
    name: 'Функции',
    command: 'npm run module05',
    topics: ['Arrow functions', 'Параметры', 'Замыкания', 'Generic функции']
  },
  {
    number: '06',
    name: 'Массивы',
    command: 'npm run module06',
    topics: ['Методы массивов', 'filter, map, reduce', 'Деструктуризация', 'Многомерные массивы']
  },
  {
    number: '07',
    name: 'Объекты',
    command: 'npm run module07',
    topics: ['Интерфейсы', 'Классы', 'Геттеры/Сеттеры', 'Методы Object']
  },
  {
    number: '08',
    name: 'Производительность и оптимизация',
    command: 'npm run module08',
    topics: ['Структуры данных', 'Мемоизация', 'Оптимизация циклов', 'Best practices']
  }
];

modules.forEach(module => {
  console.log(`Модуль ${module.number}: ${module.name}`);
  console.log(`  Команда: ${module.command}`);
  console.log(`  Темы: ${module.topics.join(', ')}`);
  console.log();
});

console.log('═══════════════════════════════════════════════════════════\n');

console.log('Как использовать курс:\n');
console.log('1. Установите зависимости: npm install');
console.log('2. Запустите любой модуль командой из списка выше');
console.log('3. Изучайте код, читайте комментарии');
console.log('4. Экспериментируйте с примерами\n');

console.log('Советы:\n');
console.log('• Изучайте модули последовательно');
console.log('• Каждая строка кода прокомментирована');
console.log('• Запускайте примеры и смотрите результаты');
console.log('• Модифицируйте код для лучшего понимания');
console.log('• Обращайте внимание на советы по производительности\n');

console.log('═══════════════════════════════════════════════════════════\n');

console.log('Для компиляции всех модулей: npm run build');
console.log('Для запуска этого файла: npm start\n');

console.log('Приятного изучения TypeScript! 🚀\n');

/**
 * Экспорт модулей для использования в других файлах
 */
export const courseModules = modules;

export function getModuleInfo(moduleNumber: string): typeof modules[0] | undefined {
  return modules.find(m => m.number === moduleNumber);
}

export function listAllModules(): void {
  modules.forEach(module => {
    console.log(`${module.number}: ${module.name}`);
  });
}
