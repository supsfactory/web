import { roUi } from '@/product/dictionary'
import { roProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _ro = mergeDict(roUi as Record<string, unknown>, roProduct as Record<string, unknown>)

export const ro: Dict = _ro as Dict
