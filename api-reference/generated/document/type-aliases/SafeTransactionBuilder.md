---
title: "SafeTransactionBuilder"
parent: "document"
grand_parent: "API"
nav_order: 26
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: SafeTransactionBuilder

```ts
type SafeTransactionBuilder = Omit<TransactionBuilder, "send">;
```

Defined in: [document/transaction-builder/builder.ts:194](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/document/transaction-builder/builder.ts#L194)

SafeTransactionBuilder type is used in places where we want to indicate that
'send()' method of TransactionBuilder instance is already handled somewhere else
and shouldn't be called.
