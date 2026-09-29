import { huUi } from '@/product/dictionary'
import { huProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _hu = mergeDict(huUi as Record<string, unknown>, huProduct as Record<string, unknown>)

export const hu: Dict = _hu as Dict