import { fiUi } from '@/product/dictionary'
import { fiProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _fi = mergeDict(fiUi as Record<string, unknown>, fiProduct as Record<string, unknown>)

export const fi: Dict = _fi as Dict
