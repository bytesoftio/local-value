import { ObservableValue, createValue } from "@bytesoftio/value"
import { readLocalStorage, writeLocalStorage } from "@bytesoftio/helpers-local-storage"

const cache: Record<string, ObservableValue> = {}

export const createLocalValue = <TState>(storageKey: string, initialState: TState): ObservableValue<TState> => {
  let value = cache[storageKey] as ObservableValue<TState>

  if ( ! value) {
    value = createValue(readLocalStorage(storageKey, initialState) as TState)
    value.listen((state) => writeLocalStorage(storageKey, state))
    cache[storageKey] = value
  }

  return value
}
