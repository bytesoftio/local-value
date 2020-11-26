import { ObservableValue, createValue } from "@bytesoftio/value"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"

const cache: Record<string, ObservableValue> = {}

export const createLocalValue = <TValue>(storageKey: string, initialValue: TValue): ObservableValue<TValue> => {
  let value = cache[storageKey] as ObservableValue<TValue>

  if ( ! value) {
    value = createValue(readLocalStorage(storageKey, initialValue) as TValue)
    value.listen((newValue) => writeLocalStorage(storageKey, newValue))
    cache[storageKey] = value
  }

  return value
}
