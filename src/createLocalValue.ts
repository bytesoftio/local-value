import { ObservableValue, createValue } from "@bytesoftio/value"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"

const cache: Record<string, ObservableValue> = {}

export const createLocalValue = <S>(storageKey: string, initialState: S): ObservableValue<S> => {
  let value = cache[storageKey] as ObservableValue<S>

  if ( ! value) {
    value = createValue(readLocalStorage(storageKey, initialState) as S)
    value.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = value
  }

  return value
}