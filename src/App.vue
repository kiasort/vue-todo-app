<script setup lang="ts">
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFilter from './components/TodoFilter.vue'
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1 class="app-title">📝 Todo App</h1>
      <p class="app-subtitle">Управляйте задачами эффективно</p>
    </header>

    <main class="app-main">
      <TodoInput />
      <TodoList />
      <TodoFilter />
    </main>


  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: var(--spacing-xl);
}

.app-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
  color: white;
}

.app-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.app-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
}

.app-main {
  flex: 1;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background: white;
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
}

.app-footer {
  text-align: center;
  margin-top: var(--spacing-xl);
  color: white;
  opacity: 0.8;
  font-size: var(--font-size-md);
}

.footer-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  font-size: 17px;
  font-weight: 700;
  li{
    margin-right: 25px;
  }
  :last-child{
    margin: 0;
  }
}




@media (max-width: 768px) {
  .app {
    padding: var(--spacing-md);
  }

  .app-title {
    font-size: 36px;
  }

  .app-main {
    padding: var(--spacing-lg);
  }
}
</style>
