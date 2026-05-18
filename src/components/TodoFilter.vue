<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import type { FilterType } from '@/types'

const store = useTodoStore()

function setFilter(filter: FilterType) {
  store.setFilter(filter)
}
</script>

<template>
  <div class="todo-filter">
    <div class="filter-buttons">
      <button
        @click="setFilter('all')"
        :class="{ active: store.filter === 'all' }"
        class="filter-btn"
      >
        Все
      </button>
      <button
        @click="setFilter('active')"
        :class="{ active: store.filter === 'active' }"
        class="filter-btn"
      >
        Активные
      </button>
      <button
        @click="setFilter('completed')"
        :class="{ active: store.filter === 'completed' }"
        class="filter-btn"
      >
        Завершенные
      </button>
    </div>

    <div class="stats">
      <span>Активных задач: {{ store.activeTodosCount }}</span>
      <button
        v-if="store.todos.length > store.activeTodosCount"
        @click="store.clearCompleted()"
        class="clear-btn"
      >
        Очистить завершенные
      </button>
    </div>
  </div>
</template>


<style scoped>
.todo-filter {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.filter-buttons {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
}

.filter-btn {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-md);
  font-weight: 500;
  color: var(--color-text-light);
  background: var(--color-bg);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.stats {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--color-bg-secondary);
  border-radius: var(--border-radius);
  font-size: var(--font-size-md);
  color: var(--color-text-light);
}

.clear-btn {
  padding: 6px var(--spacing-md);
  font-size: 13px;
  color: var(--color-danger);
  background: transparent;
  border: 1px solid var(--color-danger);
  border-radius: var(--spacing-xs);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.clear-btn:hover {
  background-color: var(--color-danger);
  color: white;
}
</style>
