import { deUi } from '@/product/dictionary'
import { deProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _de = mergeDict(deUi as Record<string, unknown>, deProduct as Record<string, unknown>)

export const de: Dict = _de as Dict