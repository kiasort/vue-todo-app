import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { FilterType, Todo } from '@/types'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  const filter = ref<FilterType>('all')
  const nextId = ref(1)

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter((todo) => !todo.completed)
      case 'completed':
        return todos.value.filter((todo) => todo.completed)
      default:
        return todos.value
    }
  })

  const activeTodosCount = computed(() => {
    return todos.value.filter((todo) => !todo.completed).length
  })

  function addTodo(title: string) {
    if (title.trim() === '') return

    const newTodo: Todo = {
      id: nextId.value++,
      title: title.trim(),
      completed: false,
      createdAt: new Date(),
    }
    todos.value.push(newTodo)
    saveTodos()
  }

  function toggleTodo(id: number) {
    const todo = todos.value.find((t) => t.id === id)
    if (todo) {
      todo.completed = !todo.completed
      saveTodos()
    }
  }

  function deleteTodo(id: number) {
    const index = todos.value.findIndex((t) => t.id === id)
    if (index > -1) {
      todos.value.splice(index, 1)
      saveTodos()
    }
  }

  function editTodo(id: number, newTitle: string) {
    const todo = todos.value.find((t) => t.id === id)
    if (todo && newTitle.trim() !== '') {
      todo.title = newTitle.trim()
      saveTodos()
    }
  }

  function setFilter(newFilter: FilterType) {
    filter.value = newFilter
  }

  function clearCompleted() {
    todos.value = todos.value.filter((todo) => !todo.completed)
    saveTodos()
  }

  function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  function loadTodos() {
    const saved = localStorage.getItem('todos')
    if (saved) {
      todos.value = JSON.parse(saved)
      const maxId = todos.value.reduce((max, todo) => Math.max(max, todo.id), 0)
      nextId.value = maxId + 1
    }
  }

  loadTodos()

  return {
    todos,
    filter,
    filteredTodos,
    activeTodosCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    setFilter,
    clearCompleted,
  }
})
