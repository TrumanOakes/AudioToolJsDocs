---
title: "KeepaliveTransport"
parent: "api"
grand_parent: "API"
nav_order: 63
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: KeepaliveTransport

```ts
type KeepaliveTransport = Brand<Transport, "keepalive">;
```

Defined in: [utils/grpc/keepalive-transport.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/utils/grpc/keepalive-transport.ts#L22)

A transport that can send gRPC requests that are "kept alive" after
page unloads by passing in a special header to the gRPC method, namely:

```ts
{
 ["###keepalive###"]: "true"
}
```

This header will not be passed to the `fetch` function as a header, instead
it will be extracted and used to determine the keepalive option for fetch.
