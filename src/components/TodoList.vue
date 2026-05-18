<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import TodoItem from './TodoItem.vue'

const store = useTodoStore()
</script>

<template>
  <div class="todo-list">
    <div v-if="store.filteredTodos.length === 0" class="empty-state">
      <p v-if="store.filter === 'all'">📝 Нет задач. Добавьте первую!</p>
      <p v-else-if="store.filter === 'active'">✅ Нет активных задач</p>
      <p v-else>🎉 Нет завершенных задач</p>
    </div>

    <TransitionGroup name="list" tag="div">
      <TodoItem v-for="todo in store.filteredTodos" :key="todo.id" :todo="todo" />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.todo-list {
  min-height: 200px;
}

.empty-state {
  text-align: center;
  padding: 48px 24px;
  color: var(--color-text-muted);
  font-size: var(--font-size-lg);
}

/* Анимации появления/исчезновения */
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-move {
  transition: transform 0.3s ease;
}
</style>
