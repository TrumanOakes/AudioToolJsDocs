---
title: "RetryOptions"
parent: "api"
grand_parent: "API"
nav_order: 101
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: RetryOptions

```ts
type RetryOptions = CallOptions & {
  callIsOk?: ValueNotifier<boolean>;
  keepalive?: boolean;
  logIfRetrying?: boolean;
  onRetry?: (error: Error) => void;
};
```

Defined in: [utils/grpc/retrying-client.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L22)

## Type Declaration

| Name | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `callIsOk?` | [`ValueNotifier`](../../utils/classes/ValueNotifier.html)\<`boolean`\> | pass a value notifier that will turn to false if something goes wrong, and back to true if things are good. | [utils/grpc/retrying-client.ts:26](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L26) |
| `keepalive?` | `boolean` | pass `keepalive` to fetch to finish the request even if the page unloads. | [utils/grpc/retrying-client.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L30) |
| `logIfRetrying?` | `boolean` | log if a retry happens. | [utils/grpc/retrying-client.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L28) |
| `onRetry()?` | (`error`: `Error`) => `void` | called whenever a retry happens. The passed in error will always match the error predicate passed to the client. | [utils/grpc/retrying-client.ts:33](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/retrying-client.ts#L33) |
