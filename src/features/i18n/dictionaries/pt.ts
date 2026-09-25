import { ptUi } from '@/product/dictionary'
import { ptProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _pt = mergeDict(ptUi as Record<string, unknown>, ptProduct as Record<string, unknown>)

export const pt: Dict = _pt as Dict