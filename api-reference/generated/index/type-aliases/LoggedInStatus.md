---
title: "LoggedInStatus"
parent: "index"
grand_parent: "API"
nav_order: 5
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: LoggedInStatus

```ts
type LoggedInStatus = {
  getToken: () => Promise<string | Error>;
  loggedIn: true;
  logout: () => void;
  getUserName: Promise<string | Error>;
};
```

Defined in: [login-status.ts:4](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L4)

## Properties

### getToken

```ts
getToken: () => Promise<string | Error>;
```

Defined in: [login-status.ts:17](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L17)

Get the current authentication token. Might refresh the token if need be, but most often
just returns the token.

#### Returns

`Promise`\<`string` \| `Error`\>

***

### loggedIn

```ts
loggedIn: true;
```

Defined in: [login-status.ts:6](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L6)

The app is authorized to make actions on a user's behalf.

***

### logout

```ts
logout: () => void;
```

Defined in: [login-status.ts:12](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L12)

Log the current user out and reload the page.

#### Returns

`void`

## Methods

### getUserName()

```ts
getUserName(): Promise<string | Error>;
```

Defined in: [login-status.ts:9](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L9)

Simple utility to get the current user name. The result of this function is cached.

#### Returns

`Promise`\<`string` \| `Error`\>
