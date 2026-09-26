import { plUi } from '@/product/dictionary'
import { plProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _pl = mergeDict(plUi as Record<string, unknown>, plProduct as Record<string, unknown>)

export const pl: Dict = _pl as Dict
