---
title: "getLoginStatus"
parent: "index"
grand_parent: "API"
nav_order: 4
---

[**@audiotool/nexus API Reference**](../../)

***

# Function: getLoginStatus()

```ts
function getLoginStatus(__namedParameters: {
  clientId: string;
  redirectUrl: string;
  scope: string;
}): Promise<LoginStatus>;
```

Defined in: [login-status.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/login-status.ts#L82)

This function allows to let arbitrary users use your app by letting them login/logout using the audiotool accounts system.

Calling it will first return the current authentication status of the user in this tab.

If the status is logged in, you can continue initializing the rest of your app by passing it to the [createAudiotoolClient](createAudiotoolClient.html) function.
If the status is logged out, you can show a button to let the user login.

This function should be called only once and early in the app. The status returned should be considered definite;
the only way to change that is to call login/logout, which will refresh the page, and change the return value of this function.

## Example
Register your application on https://developer.audiotool.com/applications, then call it like this:

```ts
const status = await getLoginStatus({
  clientId: "<client-id of your app>",
  redirectUrl: "<your apps URL>",
  scope: "<scopes your app needs>",
});

if (status.loggedIn) {
  console.debug("Logged in!!");
  createButton("Logout", () => status.logout())
} else {
  console.debug("Not logged in.");
  createButton("Login", () => status.login())
}
```

See more detailed instructions at [Login](../../../../working-with-audiotool-projects/sign-in-and-connect.html).

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | \{ `clientId`: `string`; `redirectUrl`: `string`; `scope`: `string`; \} | - |
| `__namedParameters.clientId` | `string` | Client id assigned to your application on https://developer.audiotool.com/applications. |
| `__namedParameters.redirectUrl` | `string` | Redirect URL after the user presses "Allow" on the consent screen. Must be the same URL this app is deployed at, and must be registered as a redirect URL for your application on https://developer.audiotool.com/applications. |
| `__namedParameters.scope` | `string` | The scope your app requires. Must be a subset of the scopes assigned to your application on https://developer.audiotool.com/applications. Scopes define which part of a user's account your app is allowed to access. If you change this value while already logged in, you will need to log out and log in again to get the new scope. |

## Returns

`Promise`\<[`LoginStatus`](../type-aliases/LoginStatus.html)\>
