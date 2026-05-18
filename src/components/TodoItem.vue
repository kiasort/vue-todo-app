<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'
import type { Todo } from '@/types'

interface Props {
  todo: Todo
}

const props = defineProps<Props>()
const store = useTodoStore()
const isEditing = ref(false)
const editValue = ref(props.todo.title)

function toggleComplete() {
  store.toggleTodo(props.todo.id)
}

function startEdit() {
  isEditing.value = true
  editValue.value = props.todo.title
}

function saveEdit() {
  if (editValue.value.trim()) {
    store.editTodo(props.todo.id, editValue.value)
    isEditing.value = false
  }
}

function cancelEdit() {
  isEditing.value = false
  editValue.value = props.todo.title
}

function deleteTodo() {
  store.deleteTodo(props.todo.id)
}
</script>

<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input type="checkbox" class="checkbox" :checked="todo.completed" @change="toggleComplete" />

    <div v-if="!isEditing" class="todo-content" @dblclick="startEdit">
      <span class="todo-title">{{ todo.title }}</span>
      <span>{{ new Date(todo.createdAt).toLocaleDateString('ru-RU') }}</span>
    </div>

    <input
      v-else
      v-model="editValue"
      @keyup.enter="saveEdit"
      @keyup.esc="cancelEdit"
      @blur="saveEdit"
      class="edit-input"
      autofocus
    />

    <div class="actions">
      <button class="edit-btn" v-if="!isEditing" @click="startEdit" title="Редактировать">
        ✏️
      </button>

      <button class="delete-btn" @click="deleteTodo" title="Удалить">🗑️</button>
    </div>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg);
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  margin-bottom: var(--spacing-sm);
  transition: all var(--transition-base);
}

.todo-item:hover {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.todo-item.completed {
  opacity: 0.6;
  background-color: var(--color-bg-secondary);
}

.checkbox {
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: var(--color-primary);
}

.todo-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  cursor: pointer;
}

.todo-title {
  font-size: var(--font-size-base);
  color: var(--color-text);
}

.completed .todo-title {
  text-decoration: line-through;
  color: var(--color-text-muted);
}

.todo-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.edit-input {
  flex: 1;
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-base);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
  outline: none;
}

.actions {
  display: flex;
  gap: var(--spacing-sm);
}

.edit-btn,
.delete-btn {
  padding: var(--spacing-sm) var(--spacing-md);
  font-size: var(--font-size-lg);
  background: transparent;
  border: none;
  cursor: pointer;
  border-radius: var(--border-radius-sm);
  transition: background-color var(--transition-fast);
}

.edit-btn:hover {
  background-color: var(--color-bg-secondary);
}

.delete-btn:hover {
  background-color: var(--color-danger-light);
}
</style>
