---
title: "LoginStatus"
parent: "index"
grand_parent: "API"
nav_order: 7
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: LoginStatus

```ts
type LoginStatus = 
  | LoggedInStatus
  | LoggedOutStatus;
```

Defined in: [login-status.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L35)

The current authentication status of the user in this tab. Either logged in or logged out.
To change the authentication status, call login or logout on this object.
