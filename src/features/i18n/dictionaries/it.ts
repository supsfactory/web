import { itUi } from '@/product/dictionary'
import { itProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _it = mergeDict(itUi as Record<string, unknown>, itProduct as Record<string, unknown>)

export const it: Dict = _it as Dict