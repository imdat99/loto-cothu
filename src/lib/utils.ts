import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { Award } from './Types'
import { NUMBER_AWARDS } from './constant'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
/**
 * Thêm số 0 vào trước con số giải khi con số không đủ 4 chữ số
 * @param num
 * @returns
 */
export const formatAward = (num: number) => String(num).padStart(4, '0')
/**
 * Thêm khoảng trắng vào sau các con số giải đặc biệt
 * @param num
 * @returns
 */
export const formatEnd = (num: any) => String(num).padEnd(4, ' ')

/**
 * Class chứa các phương thức đưa ra các con số giải
 */
class LuckyDraw {
  //Biến chứa các giải không trùng nhau
  private usedNumbers: Set<number>

  public awardList: Award = {
    SPECIAL: [],
    FIRST: [],
    SECOND: [],
    THIRD: [],
    CONSOLATION: []
  }
  constructor() {
    this.usedNumbers = new Set()
    this.awardList = {
      SPECIAL: Array.from({ length: NUMBER_AWARDS.SPECIAL }, this.generateWinningNumber.bind(this)),
      FIRST: Array.from({ length: NUMBER_AWARDS.FIRST }, this.generateWinningNumber.bind(this)),
      SECOND: Array.from({ length: NUMBER_AWARDS.SECOND }, this.generateWinningNumber.bind(this)),
      THIRD: Array.from({ length: NUMBER_AWARDS.THIRD }, this.generateWinningNumber.bind(this)),
      CONSOLATION: Array.from(
        { length: NUMBER_AWARDS.CONSOLATION },
        this.generateWinningNumber.bind(this)
      )
    }
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  private generateWinningNumber(): number {
    let randomNumber = this.getRandomNumber(1, 2172)
    while (this.usedNumbers.has(randomNumber)) {
      randomNumber = this.getRandomNumber(1, 2172)
    }
    this.usedNumbers.add(randomNumber)
    return randomNumber
  }
}
/**
 * Execute the main lucky draw function and return the list of awards.
 *
 * @return {Array} list of awards
 */
export function luckyMain() {
  const luckyDraw = new LuckyDraw()
  return luckyDraw.awardList
}
