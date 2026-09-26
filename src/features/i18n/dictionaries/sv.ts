import { svUi } from '@/product/dictionary'
import { svProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _sv = mergeDict(svUi as Record<string, unknown>, svProduct as Record<string, unknown>)

export const sv: Dict = _sv as Dict