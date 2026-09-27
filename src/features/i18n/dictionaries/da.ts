import { daUi } from '@/product/dictionary'
import { daProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _da = mergeDict(daUi as Record<string, unknown>, daProduct as Record<string, unknown>)

export const da: Dict = _da as Dict
