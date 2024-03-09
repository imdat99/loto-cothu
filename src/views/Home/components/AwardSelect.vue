<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { MenuOption } from '@/lib/Types'
import type { SelectRootEmits } from 'radix-vue'
import { useForwardPropsEmits } from 'radix-vue'

const props = defineProps<{ placeholder: string; menuOptions: MenuOption[] }>()

const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <Select v-bind="forwarded">
    <SelectTrigger
      class="w-[250px] h-[50px] text-green-800 font-bold rounded-full text-2xl bg-yellow-400 border-2"
    >
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          class="text-xl font-medium"
          v-for="({ value, text }, index) in menuOptions"
          :key="index"
          :value="value"
        >
          {{ text }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>
