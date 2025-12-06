/**
 * Модуль 07: Объекты
 *
 * Объекты - это коллекции пар ключ-значение.
 * TypeScript добавляет строгую типизацию для объектов через интерфейсы и типы.
 */

console.log('=== Модуль 07: Объекты ===\n');

// ============================================
// 1. СОЗДАНИЕ ОБЪЕКТОВ
// ============================================

console.log('1. СОЗДАНИЕ ОБЪЕКТОВ\n');

// Объектный литерал
const person = {
  name: 'Иван',
  age: 30,
  city: 'Москва'
};
console.log(`Персона: ${person.name}, ${person.age} лет, ${person.city}`);

// Объект с типизацией
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: 'Мария',
  age: 25,
  email: 'maria@example.com'
};
console.log(`Пользователь: ${user.name} (${user.email})`);

// Создание через конструктор Object
const obj = new Object();
obj['key'] = 'value';
console.log(`Object(): ${JSON.stringify(obj)}`);

// Создание с помощью Object.create
const prototype = { greet() { return 'Привет!'; } };
const derived = Object.create(prototype);
console.log(`Object.create: ${derived.greet()}`);

// ============================================
// 2. ДОСТУП К СВОЙСТВАМ
// ============================================

console.log('\n2. ДОСТУП К СВОЙСТВАМ\n');

const car = {
  brand: 'Toyota',
  model: 'Camry',
  year: 2023
};

// Точечная нотация
console.log(`Марка: ${car.brand}`);

// Скобочная нотация
console.log(`Модель: ${car['model']}`);

// Динамический доступ
const key = 'year';
console.log(`Год: ${car[key]}`);

// Опциональное обращение (optional chaining)
interface Address {
  street?: string;
  city?: string;
}

interface Person {
  name: string;
  address?: Address;
}

const person1: Person = { name: 'Иван' };
const person2: Person = { name: 'Мария', address: { city: 'Москва' } };

console.log(`Город person1: ${person1.address?.city ?? 'не указан'}`);
console.log(`Город person2: ${person2.address?.city ?? 'не указан'}`);

// ============================================
// 3. ИЗМЕНЕНИЕ ОБЪЕКТОВ
// ============================================

console.log('\n3. ИЗМЕНЕНИЕ ОБЪЕКТОВ\n');

const product = {
  name: 'Ноутбук',
  price: 50000
};

console.log(`До изменения: ${JSON.stringify(product)}`);

// Изменение существующего свойства
product.price = 45000;
console.log(`После изменения цены: ${JSON.stringify(product)}`);

// Добавление нового свойства
(product as any).inStock = true;
console.log(`После добавления свойства: ${JSON.stringify(product)}`);

// Удаление свойства
delete (product as any).inStock;
console.log(`После удаления свойства: ${JSON.stringify(product)}`);

// ============================================
// 4. МЕТОДЫ ОБЪЕКТОВ
// ============================================

console.log('\n4. МЕТОДЫ ОБЪЕКТОВ\n');

const calculator = {
  value: 0,

  add(n: number): void {
    this.value += n;
  },

  subtract(n: number): void {
    this.value -= n;
  },

  multiply(n: number): void {
    this.value *= n;
  },

  getValue(): number {
    return this.value;
  },

  reset(): void {
    this.value = 0;
  }
};

calculator.add(10);
calculator.multiply(5);
calculator.subtract(8);
console.log(`Результат калькулятора: ${calculator.getValue()}`);

// ============================================
// 5. ИНТЕРФЕЙСЫ И ТИПЫ
// ============================================

console.log('\n5. ИНТЕРФЕЙСЫ И ТИПЫ\n');

// Интерфейс
interface Book {
  title: string;
  author: string;
  year: number;
  isbn?: string; // опциональное свойство
}

const book: Book = {
  title: 'TypeScript Deep Dive',
  author: 'Basarat Ali Syed',
  year: 2023
};
console.log(`Книга: "${book.title}" - ${book.author}`);

// Type alias
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };
console.log(`Точка: (${point.x}, ${point.y})`);

// Readonly свойства
interface Config {
  readonly apiUrl: string;
  readonly timeout: number;
}

const config: Config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000
};
console.log(`Config: ${config.apiUrl}`);
// config.apiUrl = 'new url'; // ошибка компиляции

// ============================================
// 6. ВЛОЖЕННЫЕ ОБЪЕКТЫ
// ============================================

console.log('\n6. ВЛОЖЕННЫЕ ОБЪЕКТЫ\n');

interface Company {
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  employees: number;
}

const company: Company = {
  name: 'Tech Corp',
  address: {
    street: 'Ленинский проспект',
    city: 'Москва',
    country: 'Россия'
  },
  employees: 150
};

console.log(`Компания: ${company.name}`);
console.log(`Адрес: ${company.address.city}, ${company.address.street}`);

// ============================================
// 7. ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
// ============================================

console.log('\n7. ДЕСТРУКТУРИЗАЦИЯ\n');

const employee = {
  firstName: 'Алексей',
  lastName: 'Смирнов',
  position: 'Разработчик',
  salary: 100000
};

// Базовая деструктуризация
const { firstName, lastName } = employee;
console.log(`Сотрудник: ${firstName} ${lastName}`);

// Переименование переменных
const { position: job, salary: wage } = employee;
console.log(`Должность: ${job}, Зарплата: ${wage}`);

// Значения по умолчанию
const { department = 'IT' } = employee as any;
console.log(`Отдел: ${department}`);

// Вложенная деструктуризация
const organization = {
  name: 'ACME',
  location: {
    city: 'Москва',
    country: 'Россия'
  }
};

const { location: { city, country } } = organization;
console.log(`Локация: ${city}, ${country}`);

// ============================================
// 8. SPREAD И REST ОПЕРАТОРЫ
// ============================================

console.log('\n8. SPREAD И REST\n');

const original = { a: 1, b: 2, c: 3 };

// Spread для копирования
const copy = { ...original };
console.log(`Копия: ${JSON.stringify(copy)}`);

// Spread для объединения
const additional = { d: 4, e: 5 };
const merged = { ...original, ...additional };
console.log(`Объединенный: ${JSON.stringify(merged)}`);

// Перезапись свойств
const updated = { ...original, b: 99 };
console.log(`Обновленный: ${JSON.stringify(updated)}`);

// Rest в деструктуризации
const { a, ...rest } = merged;
console.log(`a: ${a}, rest: ${JSON.stringify(rest)}`);

// ============================================
// 9. МЕТОДЫ OBJECT
// ============================================

console.log('\n9. МЕТОДЫ OBJECT\n');

const sample = {
  name: 'Пример',
  value: 42,
  active: true
};

// Object.keys - массив ключей
const keys = Object.keys(sample);
console.log(`keys: [${keys.join(', ')}]`);

// Object.values - массив значений
const values = Object.values(sample);
console.log(`values: [${values.join(', ')}]`);

// Object.entries - массив пар [ключ, значение]
const entries = Object.entries(sample);
console.log('entries:');
entries.forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

// Object.assign - копирование/объединение
const target = { x: 1 };
const source = { y: 2, z: 3 };
Object.assign(target, source);
console.log(`Object.assign: ${JSON.stringify(target)}`);

// Object.freeze - запрет изменений
const frozen = Object.freeze({ immutable: true });
console.log(`Frozen: ${JSON.stringify(frozen)}`);
// frozen.immutable = false; // ошибка в строгом режиме

// Object.seal - запрет добавления/удаления свойств
const sealed = Object.seal({ canChange: 1 });
sealed.canChange = 2; // можно изменить
// sealed.newProp = 3; // нельзя добавить
console.log(`Sealed: ${JSON.stringify(sealed)}`);

// ============================================
// 10. ПЕРЕБОР СВОЙСТВ
// ============================================

console.log('\n10. ПЕРЕБОР СВОЙСТВ\n');

const data = {
  id: 1,
  name: 'Данные',
  type: 'test'
};

// for...in
console.log('for...in:');
for (const key in data) {
  console.log(`  ${key}: ${data[key as keyof typeof data]}`);
}

// Object.keys + forEach
console.log('Object.keys + forEach:');
Object.keys(data).forEach(key => {
  console.log(`  ${key}: ${data[key as keyof typeof data]}`);
});

// Object.entries + for...of
console.log('Object.entries + for...of:');
for (const [key, value] of Object.entries(data)) {
  console.log(`  ${key}: ${value}`);
}

// ============================================
// 11. КЛАССЫ И ОБЪЕКТЫ
// ============================================

console.log('\n11. КЛАССЫ\n');

// Класс как шаблон для объектов
class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  makeSound(): string {
    return 'Звук животного';
  }

  getInfo(): string {
    return `${this.name}, ${this.age} лет`;
  }
}

const animal = new Animal('Мурка', 3);
console.log(`Животное: ${animal.getInfo()}`);
console.log(`Звук: ${animal.makeSound()}`);

// Наследование
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age); // вызов конструктора родителя
    this.breed = breed;
  }

  makeSound(): string {
    return 'Гав-гав!';
  }

  getBreed(): string {
    return this.breed;
  }
}

const dog = new Dog('Рекс', 5, 'Лабрадор');
console.log(`Собака: ${dog.getInfo()}, Порода: ${dog.getBreed()}`);
console.log(`Звук: ${dog.makeSound()}`);

// ============================================
// 12. ГЕТТЕРЫ И СЕТТЕРЫ
// ============================================

console.log('\n12. ГЕТТЕРЫ И СЕТТЕРЫ\n');

class Rectangle {
  private _width: number;
  private _height: number;

  constructor(width: number, height: number) {
    this._width = width;
    this._height = height;
  }

  get width(): number {
    return this._width;
  }

  set width(value: number) {
    if (value > 0) {
      this._width = value;
    }
  }

  get height(): number {
    return this._height;
  }

  set height(value: number) {
    if (value > 0) {
      this._height = value;
    }
  }

  get area(): number {
    return this._width * this._height;
  }
}

const rect = new Rectangle(10, 20);
console.log(`Прямоугольник: ${rect.width} x ${rect.height}`);
console.log(`Площадь: ${rect.area}`);

rect.width = 15;
console.log(`После изменения ширины: ${rect.area}`);

// ============================================
// 13. СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ
// ============================================

console.log('\n13. СТАТИЧЕСКИЕ СВОЙСТВА И МЕТОДЫ\n');

class MathHelper {
  static PI: number = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }

  static circleCircumference(radius: number): number {
    return 2 * this.PI * radius;
  }
}

console.log(`Площадь круга (r=5): ${MathHelper.circleArea(5).toFixed(2)}`);
console.log(`Длина окружности (r=5): ${MathHelper.circleCircumference(5).toFixed(2)}`);

// ============================================
// 14. ПРАКТИЧЕСКИЕ ПРИМЕРЫ
// ============================================

console.log('\n14. ПРАКТИЧЕСКИЕ ПРИМЕРЫ\n');

// Пример 1: Слияние объектов
function mergeObjects<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = mergeObjects(obj1, obj2);
console.log(`Слияние: ${JSON.stringify(mergedObj)}`);

// Пример 2: Глубокое клонирование
function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

const deepOriginal = { x: 1, nested: { y: 2 } };
const deepCopy = deepClone(deepOriginal);
deepCopy.nested.y = 99;
console.log(`Original: ${JSON.stringify(deepOriginal)}`);
console.log(`Deep copy: ${JSON.stringify(deepCopy)}`);

// Пример 3: Фильтрация свойств объекта
function filterObject<T extends object>(
  obj: T,
  predicate: (key: string, value: any) => boolean
): Partial<T> {
  const result: any = {};
  for (const [key, value] of Object.entries(obj)) {
    if (predicate(key, value)) {
      result[key] = value;
    }
  }
  return result;
}

const toFilter = { a: 1, b: 2, c: 3, d: 4 };
const filtered = filterObject(toFilter, (key, value) => value > 2);
console.log(`Фильтрация (value > 2): ${JSON.stringify(filtered)}`);

console.log('\n=== Модуль 07 завершен ===\n');

/**
 * СОВЕТЫ ПО ПРОИЗВОДИТЕЛЬНОСТИ:
 *
 * 1. Используйте Object.keys/values/entries вместо for...in для лучшей производительности
 * 2. Spread оператор создает поверхностную копию - для глубокого клонирования используйте специальные методы
 * 3. Object.freeze и Object.seal полезны для иммутабельности, но могут замедлить код
 * 4. Деструктуризация улучшает читаемость без потери производительности
 * 5. Используйте optional chaining (?.) для безопасного доступа к вложенным свойствам
 * 6. Классы компилируются в прототипы - это эффективный способ создания объектов
 * 7. Геттеры и сеттеры добавляют небольшой оверхед, но улучшают инкапсуляцию
 * 8. Статические методы эффективнее методов экземпляра для утилитарных функций
 * 9. JSON.parse/stringify для клонирования работает медленно на больших объектах
 * 10. Избегайте delete - лучше устанавливайте свойство в undefined
 */
