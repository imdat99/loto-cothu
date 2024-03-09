<script setup lang="ts">
import { AWARD_SELECT, AWARD_TYPES } from '@/lib/constant'
import { formatAward, luckyMain, formatEnd } from '@/lib/utils'
import { onMounted, reactive, ref, toRefs, watch } from 'vue'
import AwardNumber from './components/AwardNumber.vue'
import AwardSpin from './components/AwardSpin.vue'
import { useAwTypeStore } from '@/stores/awType'
import { useCounterStore } from '@/stores/counter'
const luckyNumberList = luckyMain()
const number = ref('')
const { awardType } = toRefs(useAwTypeStore())
const counter = useCounterStore()
watch(awardType, () => {
  number.value = ''
})
const listAw = reactive<any>({
  SPECIAL: [],
  FIRST: [],
  SECOND: [],
  THIRD: [],
  CONSOLATION: []
})
/**
 * Hàm đưa ra các số từ các số đã chuẩn bị từ phương thức LuckyDraw
 */
const handleSpin = () => {
  let temp = number.value.trimEnd().length === 4 ? '' : number.value.trimEnd()
  if ([AWARD_TYPES.SPECIAL, AWARD_TYPES.FIRST].includes(awardType.value)) {
    temp += formatAward(
      luckyNumberList[awardType.value][Math.ceil(counter.awardCount[awardType.value]) - 1]
    )[((counter.awardCount[awardType.value] / 0.25) % 4 || 4) - 1]
  } else {
    temp = formatAward(luckyNumberList[awardType.value][counter.awardCount[awardType.value] - 1])
  }
  number.value = formatEnd(temp)
  if (number.value.trimEnd().length === 4) {
    listAw[awardType.value] = listAw[awardType.value].concat(Number(temp))
  }
}
</script>
<template>
  <section class="flex flex-wrap justify-center w-full">
    <AwardNumber :lucky-num="number || '    '" />
    <div class="border-4 border-white rounded-xl list-shadow w-10/12 flex justify-between p-8">
      <ul class="text-2xl font-medium space-y-3">
        <li v-for="([key, item], index) of Object.entries(AWARD_SELECT)" :key="index">
          <div class="flex relative">
            <span class="text-red-900 w-fit block min-w-[150px]"
              >{{ item.includes('khuyến') ? 'Giải KK' : item }}:&nbsp;
            </span>
            <p :class="index === 4 ? 'absolute w-[880px] left-[100px] text-xl' : ''">
              {{ listAw[key].join(', ') }}
            </p>
          </div>
        </li>
      </ul>
      <AwardSpin @toggle-spin="handleSpin" @reset="number = ''" />
    </div>
  </section>
</template>
<style scoped>
.list-shadow {
  box-shadow: 0px 2px 15px 9px rgb(235, 44, 44);
}
</style>
