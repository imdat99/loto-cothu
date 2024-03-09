import { AWARD_TYPES } from './constant'

export type Award = {
  [K in keyof typeof AWARD_TYPES]: number[]
}
export type MenuOption = {
  value: any
  text: string
}
