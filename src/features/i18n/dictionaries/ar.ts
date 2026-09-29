import { arUi } from '@/product/dictionary'
import { arProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _ar = mergeDict(arUi as Record<string, unknown>, arProduct as Record<string, unknown>)

export const ar: Dict = _ar as Dict
