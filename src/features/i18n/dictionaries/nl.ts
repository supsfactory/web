import { nlUi } from '@/product/dictionary'
import { nlProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _nl = mergeDict(nlUi as Record<string, unknown>, nlProduct as Record<string, unknown>)

export const nl: Dict = _nl as Dict