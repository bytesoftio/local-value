import { HookValue } from "@bytesoftio/use-value"

export type CreateLocalValue = <S>(storageKey: string, initialState: S) => HookValue<S>