import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTriggerStore = defineStore('triggerList', () => {
  const triggerVal = ref(true)
  const triggerFn = () => {
    triggerVal.value = !triggerVal.value
  }
  return { triggerVal, triggerFn }
})
