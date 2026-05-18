<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const store = useTodoStore()
const inputValue = ref('')

function handleSubmit() {
  if (inputValue.value.trim()) {
    store.addTodo(inputValue.value)
    inputValue.value = ''
  }
}
</script>

<template>
  <div class="todo-input">
    <input
      v-model="inputValue"
      @keyup.enter="handleSubmit"
      type="text"
      placeholder="Что нужно сделать?"
      class="input-field"
    />
    <button @click="handleSubmit" class="add-button">Добавить</button>
  </div>
</template>

<style scoped>
.todo-input {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.input-field {
  flex: 1;
  padding: var(--spacing-md) var(--spacing-lg);
  font-size: var(--font-size-base);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  outline: none;
  transition: border-color var(--transition-base);
}

.input-field:focus {
  border-color: var(--color-primary);
}

.add-button {
  padding: var(--spacing-md) var(--spacing-xl);
  font-size: var(--font-size-base);
  font-weight: 600;
  color: white;
  background-color: var(--color-primary);
  border: none;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: background-color var(--transition-base);
}

.add-button:hover {
  background-color: var(--color-primary-dark);
}

.add-button:active {
  transform: scale(0.98);
}
</style>
