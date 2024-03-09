import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { AWARD_TYPES } from '@/lib/constant'

export const useCounterStore = defineStore('counter', () => {
  const awardCount = reactive({
    SPECIAL: 0,
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    CONSOLATION: 0
  })
  function increment(type: AWARD_TYPES) {
    if ([AWARD_TYPES.SPECIAL, AWARD_TYPES.FIRST].includes(type)) {
      awardCount[type] += 0.25
    } else {
      awardCount[type]++
    }
  }
  function reset() {
    Object.entries(AWARD_TYPES).forEach(([key]) => {
      awardCount[key as AWARD_TYPES] = 0
    })
  }
  return { awardCount, increment, reset }
})
