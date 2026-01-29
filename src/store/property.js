import { defineStore } from 'pinia'
import { getProperties } from '../api/property'

export const usePropertyStore = defineStore('property', {
  state: () => ({
    list: [],
    loading: false,
  }),

  actions: {
    async fetchProperties() {
      this.loading = true
      try {
        const res = await getProperties()
        this.list = res   // res คือ array แล้ว
      } catch (err) {
        console.error('fetchProperties error', err)
      } finally {
        this.loading = false
      }
    },
  },
})
