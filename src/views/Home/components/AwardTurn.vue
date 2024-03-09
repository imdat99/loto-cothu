<script setup lang="ts">
defineProps<{ turn: number; total: number }>()
</script>
<template>
  <div
    class="m-auto h-[50px] px-3 text-white font-bold rounded-full text-2xl bg-green-600 border-2 flex"
  >
    <span class="m-auto block">Lần:&nbsp;{{ turn }}/{{ total }}</span>
  </div>
</template>
