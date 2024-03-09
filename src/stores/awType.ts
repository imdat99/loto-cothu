import { AWARD_TYPES } from '@/lib/constant'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAwTypeStore = defineStore('awardType', () => {
  const awardType = ref(AWARD_TYPES.SPECIAL)
  return { awardType }
})
