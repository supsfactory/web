import { trUi } from '@/product/dictionary'
import { trProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _tr = mergeDict(trUi as Record<string, unknown>, trProduct as Record<string, unknown>)

export const tr: Dict = _tr as Dict