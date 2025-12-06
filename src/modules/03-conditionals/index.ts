/**
 * Модуль 03: Условные конструкции
 *
 * Условные конструкции позволяют выполнять различный код
 * в зависимости от определенных условий.
 */

console.log('=== Модуль 03: Условные конструкции ===\n');

// ============================================
// 1. ОПЕРАТОР IF
// ============================================

console.log('1. ОПЕРАТОР IF\n');

// Простой if
const temperature: number = 25;
if (temperature > 20) {
  console.log(`Температура ${temperature}°C - тепло!`);
}

// if с блоком else
const age: number = 16;
if (age >= 18) {
  console.log('Вы совершеннолетний');
} else {
  console.log('Вы несовершеннолетний');
}

// if-else if-else (каскад условий)
const score: number = 85;
if (score >= 90) {
  console.log(`Оценка ${score}: Отлично (A)`);
} else if (score >= 80) {
  console.log(`Оценка ${score}: Хорошо (B)`);
} else if (score >= 70) {
  console.log(`Оценка ${score}: Удовлетворительно (C)`);
} else if (score >= 60) {
  console.log(`Оценка ${score}: Посредственно (D)`);
} else {
  console.log(`Оценка ${score}: Неудовлетворительно (F)`);
}

// ============================================
// 2. ВЛОЖЕННЫЕ УСЛОВИЯ
// ============================================

console.log('\n2. ВЛОЖЕННЫЕ УСЛОВИЯ\n');

const isLoggedIn: boolean = true;
const hasPermission: boolean = true;
const isActive: boolean = true;

// Вложенные if (не рекомендуется для глубокой вложенности)
if (isLoggedIn) {
  console.log('Пользователь вошел в систему');
  if (hasPermission) {
    console.log('  У пользователя есть права доступа');
    if (isActive) {
      console.log('    Аккаунт активен - доступ разрешен');
    } else {
      console.log('    Аккаунт неактивен - доступ запрещен');
    }
  } else {
    console.log('  Недостаточно прав доступа');
  }
} else {
  console.log('Пользователь не вошел в систему');
}

// Улучшенная версия с использованием логических операторов
if (isLoggedIn && hasPermission && isActive) {
  console.log('\nПроверка (оптимизированная): Доступ разрешен');
} else {
  console.log('\nПроверка (оптимизированная): Доступ запрещен');
}

// ============================================
// 3. ОПЕРАТОР SWITCH
// ============================================

console.log('\n3. ОПЕРАТОР SWITCH\n');

// Switch для проверки конкретных значений
const dayOfWeek: number = 3;
let dayName: string;

switch (dayOfWeek) {
  case 1:
    dayName = 'Понедельник';
    break; // break прерывает выполнение switch
  case 2:
    dayName = 'Вторник';
    break;
  case 3:
    dayName = 'Среда';
    break;
  case 4:
    dayName = 'Четверг';
    break;
  case 5:
    dayName = 'Пятница';
    break;
  case 6:
    dayName = 'Суббота';
    break;
  case 7:
    dayName = 'Воскресенье';
    break;
  default:
    dayName = 'Неизвестный день';
}
console.log(`День недели ${dayOfWeek}: ${dayName}`);

// Switch с группировкой случаев (fall-through)
const month: number = 12;
let season: string;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = 'Зима';
    break;
  case 3:
  case 4:
  case 5:
    season = 'Весна';
    break;
  case 6:
  case 7:
  case 8:
    season = 'Лето';
    break;
  case 9:
  case 10:
  case 11:
    season = 'Осень';
    break;
  default:
    season = 'Неизвестный месяц';
}
console.log(`Месяц ${month}: ${season}`);

// Switch со строками
const command: string = 'start';
switch (command) {
  case 'start':
    console.log('Запуск программы...');
    break;
  case 'stop':
    console.log('Остановка программы...');
    break;
  case 'restart':
    console.log('Перезапуск программы...');
    break;
  case 'pause':
    console.log('Приостановка программы...');
    break;
  default:
    console.log('Неизвестная команда');
}

// ============================================
// 4. ТЕРНАРНЫЙ ОПЕРАТОР
// ============================================

console.log('\n4. ТЕРНАРНЫЙ ОПЕРАТОР\n');

// Простой тернарный оператор: условие ? значение_если_true : значение_если_false
const userAge: number = 20;
const accessLevel: string = userAge >= 18 ? 'Полный доступ' : 'Ограниченный доступ';
console.log(`Возраст ${userAge}: ${accessLevel}`);

// Вложенные тернарные операторы (использовать с осторожностью)
const points: number = 1500;
const rank: string = points >= 2000
  ? 'Мастер'
  : points >= 1000
    ? 'Эксперт'
    : points >= 500
      ? 'Продвинутый'
      : 'Новичок';
console.log(`Очки ${points}: Ранг "${rank}"`);

// Тернарный оператор для присваивания
const isWeekend: boolean = true;
const workHours: number = isWeekend ? 0 : 8;
console.log(`Выходной: ${isWeekend}, Рабочих часов: ${workHours}`);

// ============================================
// 5. ЛОГИЧЕСКИЕ ВЫРАЖЕНИЯ
// ============================================

console.log('\n5. ЛОГИЧЕСКИЕ ВЫРАЖЕНИЯ\n');

// Проверка нескольких условий с помощью логических операторов
const username: string = 'admin';
const password: string = 'secret123';

if (username === 'admin' && password === 'secret123') {
  console.log('Вход выполнен успешно');
} else {
  console.log('Неверные учетные данные');
}

// Использование отрицания
const isOnline: boolean = false;
if (!isOnline) {
  console.log('Пользователь оффлайн');
}

// Комбинация логических операторов
const time: number = 14; // 14:00
const isWorkDay: boolean = true;

if ((time >= 9 && time < 18) && isWorkDay) {
  console.log('Рабочее время');
} else {
  console.log('Нерабочее время');
}

// ============================================
// 6. ПРОВЕРКА НА NULL И UNDEFINED
// ============================================

console.log('\n6. ПРОВЕРКА НА NULL И UNDEFINED\n');

// Проверка с помощью if
let value: string | null = null;
if (value === null) {
  console.log('Значение равно null');
}

// Проверка на null или undefined
let optionalValue: string | undefined = undefined;
if (optionalValue == null) {
  // == проверяет и null, и undefined
  console.log('Значение null или undefined');
}

// Использование оператора ??
const defaultValue: string = value ?? 'значение по умолчанию';
console.log(`Значение с fallback: ${defaultValue}`);

// Проверка существования значения
let data: string | null | undefined = 'данные';
if (data) {
  // проверяет на truthy значение
  console.log(`Данные существуют: ${data}`);
}

// ============================================
// 7. GUARD CLAUSES (ЗАЩИТНЫЕ УСЛОВИЯ)
// ============================================

console.log('\n7. GUARD CLAUSES\n');

// Плохой подход: глубокая вложенность
function processOrder1(order: { id: number; items: any[]; isPaid: boolean }): void {
  if (order) {
    if (order.items.length > 0) {
      if (order.isPaid) {
        console.log('Плохой подход: Обработка заказа...');
      }
    }
  }
}

// Хороший подход: ранний выход с помощью guard clauses
function processOrder2(order: { id: number; items: any[]; isPaid: boolean } | null): void {
  // Guard clause: проверка на null
  if (!order) {
    console.log('Хороший подход: Заказ не найден');
    return;
  }

  // Guard clause: проверка на пустой массив
  if (order.items.length === 0) {
    console.log('Хороший подход: Заказ пуст');
    return;
  }

  // Guard clause: проверка оплаты
  if (!order.isPaid) {
    console.log('Хороший подход: Заказ не оплачен');
    return;
  }

  // Основная логика
  console.log('Хороший подход: Обработка заказа...');
}

const testOrder = { id: 1, items: ['item1'], isPaid: true };
processOrder1(testOrder);
processOrder2(testOrder);

// ============================================
// 8. TYPE GUARDS (ЗАЩИТА ТИПОВ)
// ============================================

console.log('\n8. TYPE GUARDS\n');

// Type guard с typeof
function printValue(value: string | number): void {
  if (typeof value === 'string') {
    // TypeScript знает, что здесь value - строка
    console.log(`Строка (длина ${value.length}): ${value}`);
  } else {
    // TypeScript знает, что здесь value - число
    console.log(`Число (округленное): ${value.toFixed(2)}`);
  }
}

printValue('TypeScript');
printValue(3.14159);

// Type guard с instanceof
class Dog {
  bark(): void {
    console.log('Гав!');
  }
}

class Cat {
  meow(): void {
    console.log('Мяу!');
  }
}

function makeSound(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

makeSound(new Dog());
makeSound(new Cat());

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

// Пользовательская функция type guard
function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird): void {
  if (isFish(animal)) {
    console.log('Рыба плывет');
    animal.swim();
  } else {
    console.log('Птица летит');
    animal.fly();
  }
}

const myFish: Fish = { swim: () => console.log('  Плаваю...') };
const myBird: Bird = { fly: () => console.log('  Лечу...') };

move(myFish);
move(myBird);

console.log('\n=== Модуль 03 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Используйте guard clauses для уменьшения вложенности и улучшения читаемости
 * 2. Switch может быть быстрее множественных if-else для большого числа случаев
 * 3. Используйте логические операторы && и || для коротких проверок
 * 4. Тернарный оператор компактнее if-else для простых условий
 * 5. Type guards помогают TypeScript оптимизировать код и предотвращать ошибки
 * 6. Избегайте глубокой вложенности - она усложняет понимание и поддержку кода
 * 7. Используйте === вместо == для предотвращения неявного приведения типов
 * 8. Оператор ?? эффективнее проверки на null/undefined
 */
