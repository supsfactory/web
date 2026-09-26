import { noUi } from '@/product/dictionary'
import { noProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _no = mergeDict(noUi as Record<string, unknown>, noProduct as Record<string, unknown>)

export const no: Dict = _no as Dict
