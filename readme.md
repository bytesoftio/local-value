# @bytesoftio/use-local-value

## Installation

`yarn add @bytesoftio/use-local-value` or `npm install @bytesoftio/use-local-value`

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Description](#description)
- [Usage](#usage)
  - [createLocalValue](#createlocalvalue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Description

This package is built on top of `@bytesoftio/use-value` and provides integration with localStorage. For a more
in depth guide please check out the docs of the other package.

## Usage

Since this package is built on top of `@bytesoftio/use-value`, values produced by `createLocalValue` of this package and
`createValue` of the other package are interchangeable. A value produced by this package can be consumed using the 
`useValue` hook of the other package.

### createLocalValue

```tsx
import React from "react"
import { createLocalValue } from "@bytesoftio/use-local-value"
import { useValue } from "@bytesoftio/use-value"

const authValue = createLocalValue("authToken", "abcde")

const Component = () => {
  // use globally shared value, cached in localStorage
  const [authToken, setAuthToken, resetAuthToken] = useValue(authValue)
  // use local value, created through an initializer function, cached in localStorage
  const [persistentCounter, setPersistentCounter] = useValue(() => createLocalValue("counter", 1))

  const increment = () => setPersistentCounter(persistentCounter + 1)
  
  return (
    <div>
      <span>Auth token: {authToken}</span>
      <button onClick={increment}>{persistentCounter}</button>
    </div>
  )
}
```