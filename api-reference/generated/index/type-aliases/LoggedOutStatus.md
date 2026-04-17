---
title: "LoggedOutStatus"
parent: "index"
grand_parent: "API"
nav_order: 6
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: LoggedOutStatus

```ts
type LoggedOutStatus = {
  error?: Error;
  loggedIn: false;
  login: () => Promise<void>;
};
```

Defined in: [login-status.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L20)

## Properties

### error?

```ts
optional error?: Error;
```

Defined in: [login-status.ts:25](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L25)

If an error is the reason the user is logged out, this is set. Otherwise, the user just hasn't logged in yet.

***

### loggedIn

```ts
loggedIn: false;
```

Defined in: [login-status.ts:22](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L22)

The app is not authorized to make actions on a user's behalf. Call login to authorize.

***

### login

```ts
login: () => Promise<void>;
```

Defined in: [login-status.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L28)

start the authorization flow by redirecting the user to the login page of audiotool.

#### Returns

`Promise`\<`void`\>
