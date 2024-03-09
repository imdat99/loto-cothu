<script setup lang="ts">
import { RouterView } from 'vue-router'

import backgroundImage from '@/assets/background.png'
import { toRefs, watch } from 'vue'
import { useCounterStore } from './stores/counter'
import { useTriggerStore } from './stores/trigger'
const { triggerFn, triggerVal } = toRefs(useTriggerStore())
const counter = useCounterStore()
const handleClick = () => {
  counter.reset()
  triggerFn.value()
}
watch(triggerVal, () => {
  if (!triggerVal.value) {
    setTimeout(() => {
      handleClick()
    }, 0)
  }
})
</script>

<template>
  <main
    class="flex min-h-screen flex-col bg-cover"
    :style="{
      'background-image': `url(${backgroundImage})`
    }"
  >
    <header class="mt-3 mb-5 flex relative h-[135px] z-10">
      <div @click="handleClick">
        <img
          alt="Thạch bàn logo"
          class="rounded-full h-[75px] w-[75px] cursor-pointer"
          src="@/assets/tblogo.png"
        />
      </div>
      <img
        alt="Vue logo"
        class="absolute w-[450px] left-8 -top-8 -z-10"
        src="@/assets/chao_xuan.png"
        width="100"
      />
    </header>
    <div class="flex-1" v-if="triggerVal">
      <div class="max-w-[1280px] mx-auto px-4 md:px-8 bg-repeat bg-contain">
        <RouterView />
      </div>
    </div>
  </main>
  <!-- footer -->
</template>
