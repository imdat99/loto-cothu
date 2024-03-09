<script setup lang="ts">
// @ts-ignore
import { Roller } from 'vue-roller'

defineProps<{ luckyNum: string }>()
</script>
<template>
  <div class="w-full flex">
    <div class="m-auto w-fit font-extrabold text-[9rem] font-sans flex text-white mb-3">
      <div
        v-for="(item, index) of luckyNum"
        class="border-8 border-white w-[10rem] flex mx-2 bg-red-600"
      >
        <Roller :duration="1000" :value="item" class="mx-auto mb-3" />
      </div>
    </div>
  </div>
</template>
