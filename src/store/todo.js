import { defineStore } from 'pinia'
import { getTodos } from '@/api/todo'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
    loading: false,
  }),

  actions: {
    async fetchTodos() {
      this.loading = true
      try {
        const res = await getTodos()
        this.todos = res.data
      } catch (err) {
        console.error('fetchTodos error', err)
      } finally {
        this.loading = false
      }
    },
  },
})
