import { CreateLocalValue } from "./types"
import { createValue, HookValue } from "@bytesoftio/use-value"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/use-local-store"

const cache: Record<string, HookValue> = {}

export const createLocalValue: CreateLocalValue = <S>(storageKey, initialState) => {
  let value = cache[storageKey] as HookValue<S>

  if ( ! value) {
    value = createValue(readLocalStorage(storageKey, initialState))
    value.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = value
  }

  return value
}