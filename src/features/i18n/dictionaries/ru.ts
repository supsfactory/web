import { ruUi } from '@/product/dictionary'
import { ruProduct } from '@/product/dictionary'
import { mergeDict } from '@/product/dictionary'
import { type Dict } from './en'

const _ru = mergeDict(ruUi as Record<string, unknown>, ruProduct as Record<string, unknown>)

export const ru: Dict = _ru as Dict
