import { csUi } from '@/product/dictionary'
import { csProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _cs = mergeDict(csUi as Record<string, unknown>, csProduct as Record<string, unknown>)

export const cs: Dict = _cs as Dict
