# 📝 Vue Todo App

Современное приложение для управления задачами, созданное с использованием Vue 3, TypeScript и Pinia.

![Vue 3](https://img.shields.io/badge/Vue.js-3.x-4FC08D?style=flat&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat&logo=vite&logoColor=white)
![Pinia](https://img.shields.io/badge/Pinia-2.x-FFC233?style=flat&logo=pinia&logoColor=white)

## 🚀 Демо

**Живая версия:** [https://vue-todo-app-gold-seven.vercel.app/](https://vue-todo-app-gold-seven.vercel.app/)

## ✨ Функционал

- ✅ Добавление, редактирование и удаление задач
- ✅ Отметка задач как выполненных
- ✅ Фильтрация по статусу (Все / Активные / Завершенные)
- ✅ Счётчик активных задач
- ✅ Сохранение в localStorage (задачи не пропадают после перезагрузки)
- ✅ Редактирование по двойному клику
- ✅ Адаптивный дизайн
- ✅ Плавные анимации

## 🛠️ Технологии

- **Vue 3** — Composition API с `<script setup>`
- **TypeScript** — строгая типизация
- **Pinia** — управление состоянием
- **Vue Router** — маршрутизация
- **Vite** — быстрая сборка
- **ESLint + Prettier** — качество кода

## 📦 Установка и запуск

### Требования

- Node.js 18+
- npm 10+

### Команды

```bash
# Клонирование репозитория
git clone https://github.com/kiasort/vue-todo-app.git

# Установка зависимостей
cd vue-todo-app
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## 📁 Структура проекта

src/
├── components/ # Vue компоненты
│ ├── TodoInput.vue # Поле добавления задачи
│ ├── TodoItem.vue # Отдельная задача
│ ├── TodoList.vue # Список задач
│ └── TodoFilter.vue # Фильтры
├── stores/ # Pinia хранилища
│ └── todoStore.ts # Store для задач
├── types/ # TypeScript типы
│ └── todo.ts # Интерфейсы Todo, FilterType
├── assets/ # Стили
│ └── theme.css # CSS переменные, тема
├── App.vue # Главный компонент
└── main.ts # Точка входа

## 🎨 Особенности реализации

### TypeScript интеграция

```typescript
interface Todo {
  id: number
  title: string
  completed: boolean
  createdAt: Date
}

type FilterType = 'all' | 'active' | 'completed'
```

### Pinia Store (Setup Syntax)

```typescript
export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  const filteredTodos = computed(() => {
    // ... фильтрация
  })

  function addTodo(title: string) {
    // ... логика
  }

  return { todos, filteredTodos, addTodo }
})
```

### Composition API

Все компоненты используют современный Composition API с синтаксисом `<script setup>`.

## 🔮 Планы развития

- [ ] Добавить приоритеты задач
- [ ] Категории и теги
- [ ] Поиск по задачам
- [ ] Темная тема
- [ ] Экспорт/импорт задач
- [ ] Backend интеграция (Firebase/Supabase)

## 👨‍💻 Автор

**Артём** — [GitHub](https://github.com/kiasort)

## 📄 Лицензия

MIT License - свободное использование
