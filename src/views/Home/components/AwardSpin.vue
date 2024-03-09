<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { AWARD_SELECT, NUMBER_AWARDS } from '@/lib/constant'
import { useAwTypeStore } from '@/stores/awType'
import { useCounterStore } from '@/stores/counter'
import { toRefs } from 'vue'
import AwardSelect from './AwardSelect.vue'
import AwardTurn from './AwardTurn.vue'

const emit = defineEmits(['toggleSpin', 'reset'])
const counter = useCounterStore()

const { awardType } = toRefs(useAwTypeStore())

const handleSpin = () => {
  counter.increment(awardType.value)
  emit('toggleSpin')
}
</script>
<template>
  <div class="w-fit">
    <div class="flex space-x-2">
      <AwardSelect
        :menu-options="Object.entries(AWARD_SELECT).map(([value, text]) => ({ value, text }))"
        :placeholder="'Chọn giải'"
        v-model="awardType"
      />
      <div @click="$emit('reset')">
        <AwardTurn
          :turn="
            Math.floor(
              counter.awardCount[awardType] === NUMBER_AWARDS[awardType]
                ? counter.awardCount[awardType]
                : counter.awardCount[awardType] + 1
            )
          "
          :total="NUMBER_AWARDS[awardType]"
        />
      </div>
    </div>
    <div class="flex mt-5 justify-end">
      <button
        :disabled="counter.awardCount[awardType] === NUMBER_AWARDS[awardType]"
        @click="handleSpin"
        class="w-32 h-32 rounded-full text-white text-3xl font-medium bg-primary ring-4 shadow-md shadow-slate-50 ring-cyan-50 hover:bg-red-500 hover:ring-red-200 disabled:bg-slate-500"
      >
        Quay
      </button>
    </div>
  </div>
</template>
