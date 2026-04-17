---
title: "RetryingClient"
parent: "api"
grand_parent: "API"
nav_order: 100
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RetryingClient\<T\>

```ts
type RetryingClient<T> = { [P in keyof T["methods"]]: T["methods"][P] extends MethodInfoUnary<infer I, infer O> ? (request: PartialMessage<I>, options?: RetryOptions) => Promise<O | Error> : Client<T>[P] };
```

Defined in: [utils/grpc/retrying-client.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L46)

RetryingClient is a gRPC client like Client that supports unary and server-streaming
methods. Methods will produce a promise for the response message, or an asynchronous iterable of response messages.

It differs from Client in the following ways:
* Unary calls never throw. If an exception occurs, the exception will be returned as an Error. No `try/catch` required.
* When creating a client, an error predicate can be passed that will determine if a call should be retried. If an error fulfills the predicate,
  the underlying network call will be retried, and the calling promise will block until the call succeeds or a different error is thrown.
* Unary calls allow passing in a boolean [ValueNotifier](../../utils/classes/ValueNotifier.html) that will be turned to false while a failure occurs that causes the call to retry, and true once the call succeeds again.

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* `ServiceType` |
