import { frUi } from '@/product/dictionary'
import { frProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _fr = mergeDict(frUi as Record<string, unknown>, frProduct as Record<string, unknown>)

export const fr: Dict = _fr as Dict
