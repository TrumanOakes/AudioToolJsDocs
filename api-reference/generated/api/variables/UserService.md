---
title: "UserService"
parent: "api"
grand_parent: "API"
nav_order: 147
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: UserService

```ts
const UserService: {
  methods: {
     deleteUser: {
        I: typeof DeleteUserRequest;
        kind: Unary;
        name: "DeleteUser";
        O: typeof DeleteUserResponse;
     };
     getSettings: {
        I: typeof GetSettingsRequest;
        kind: Unary;
        name: "GetSettings";
        O: typeof GetSettingsResponse;
     };
     getUser: {
        I: typeof GetUserRequest;
        kind: Unary;
        name: "GetUser";
        O: typeof GetUserResponse;
     };
     listUsers: {
        I: typeof ListUsersRequest;
        kind: Unary;
        name: "ListUsers";
        O: typeof ListUsersResponse;
     };
     updateSettings: {
        I: typeof UpdateSettingsRequest;
        kind: Unary;
        name: "UpdateSettings";
        O: typeof UpdateSettingsResponse;
     };
     updateUser: {
        I: typeof UpdateUserRequest;
        kind: Unary;
        name: "UpdateUser";
        O: typeof UpdateUserResponse;
     };
     uploadAvatar: {
        I: typeof UploadAvatarRequest;
        kind: Unary;
        name: "UploadAvatar";
        O: typeof UploadAvatarResponse;
     };
  };
  typeName: "audiotool.user.v1.UserService";
};
```

Defined in: [gen/audiotool/user/v1/user\_service\_connect.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L28)

The users service definition.

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-methods"></a> `methods` | \{ `deleteUser`: \{ `I`: *typeof* [`DeleteUserRequest`](../classes/DeleteUserRequest.html); `kind`: `Unary`; `name`: `"DeleteUser"`; `O`: *typeof* [`DeleteUserResponse`](../classes/DeleteUserResponse.html); \}; `getSettings`: \{ `I`: *typeof* [`GetSettingsRequest`](../classes/GetSettingsRequest.html); `kind`: `Unary`; `name`: `"GetSettings"`; `O`: *typeof* [`GetSettingsResponse`](../classes/GetSettingsResponse.html); \}; `getUser`: \{ `I`: *typeof* [`GetUserRequest`](../classes/GetUserRequest.html); `kind`: `Unary`; `name`: `"GetUser"`; `O`: *typeof* [`GetUserResponse`](../classes/GetUserResponse.html); \}; `listUsers`: \{ `I`: *typeof* [`ListUsersRequest`](../classes/ListUsersRequest.html); `kind`: `Unary`; `name`: `"ListUsers"`; `O`: *typeof* [`ListUsersResponse`](../classes/ListUsersResponse.html); \}; `updateSettings`: \{ `I`: *typeof* [`UpdateSettingsRequest`](../classes/UpdateSettingsRequest.html); `kind`: `Unary`; `name`: `"UpdateSettings"`; `O`: *typeof* [`UpdateSettingsResponse`](../classes/UpdateSettingsResponse.html); \}; `updateUser`: \{ `I`: *typeof* [`UpdateUserRequest`](../classes/UpdateUserRequest.html); `kind`: `Unary`; `name`: `"UpdateUser"`; `O`: *typeof* [`UpdateUserResponse`](../classes/UpdateUserResponse.html); \}; `uploadAvatar`: \{ `I`: *typeof* [`UploadAvatarRequest`](../classes/UploadAvatarRequest.html); `kind`: `Unary`; `name`: `"UploadAvatar"`; `O`: *typeof* [`UploadAvatarResponse`](../classes/UploadAvatarResponse.html); \}; \} | - | - | [gen/audiotool/user/v1/user\_service\_connect.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L30) |
| `methods.deleteUser` | \{ `I`: *typeof* [`DeleteUserRequest`](../classes/DeleteUserRequest.html); `kind`: `Unary`; `name`: `"DeleteUser"`; `O`: *typeof* [`DeleteUserResponse`](../classes/DeleteUserResponse.html); \} | - | Delete a user. **Generated** from rpc audiotool.user.v1.UserService.DeleteUser | [gen/audiotool/user/v1/user\_service\_connect.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L58) |
| `methods.deleteUser.I` | *typeof* [`DeleteUserRequest`](../classes/DeleteUserRequest.html) | `DeleteUserRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L60) |
| `methods.deleteUser.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L62) |
| `methods.deleteUser.name` | `"DeleteUser"` | `"DeleteUser"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L59) |
| `methods.deleteUser.O` | *typeof* [`DeleteUserResponse`](../classes/DeleteUserResponse.html) | `DeleteUserResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L61) |
| `methods.getSettings` | \{ `I`: *typeof* [`GetSettingsRequest`](../classes/GetSettingsRequest.html); `kind`: `Unary`; `name`: `"GetSettings"`; `O`: *typeof* [`GetSettingsResponse`](../classes/GetSettingsResponse.html); \} | - | Get the settings of a user. **Generated** from rpc audiotool.user.v1.UserService.GetSettings | [gen/audiotool/user/v1/user\_service\_connect.ts:80](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L80) |
| `methods.getSettings.I` | *typeof* [`GetSettingsRequest`](../classes/GetSettingsRequest.html) | `GetSettingsRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L82) |
| `methods.getSettings.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L84) |
| `methods.getSettings.name` | `"GetSettings"` | `"GetSettings"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L81) |
| `methods.getSettings.O` | *typeof* [`GetSettingsResponse`](../classes/GetSettingsResponse.html) | `GetSettingsResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L83) |
| `methods.getUser` | \{ `I`: *typeof* [`GetUserRequest`](../classes/GetUserRequest.html); `kind`: `Unary`; `name`: `"GetUser"`; `O`: *typeof* [`GetUserResponse`](../classes/GetUserResponse.html); \} | - | Gets a user. **Generated** from rpc audiotool.user.v1.UserService.GetUser | [gen/audiotool/user/v1/user\_service\_connect.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L47) |
| `methods.getUser.I` | *typeof* [`GetUserRequest`](../classes/GetUserRequest.html) | `GetUserRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L49) |
| `methods.getUser.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L51) |
| `methods.getUser.name` | `"GetUser"` | `"GetUser"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L48) |
| `methods.getUser.O` | *typeof* [`GetUserResponse`](../classes/GetUserResponse.html) | `GetUserResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L50) |
| `methods.listUsers` | \{ `I`: *typeof* [`ListUsersRequest`](../classes/ListUsersRequest.html); `kind`: `Unary`; `name`: `"ListUsers"`; `O`: *typeof* [`ListUsersResponse`](../classes/ListUsersResponse.html); \} | - | Lists the users. **Generated** from rpc audiotool.user.v1.UserService.ListUsers | [gen/audiotool/user/v1/user\_service\_connect.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L36) |
| `methods.listUsers.I` | *typeof* [`ListUsersRequest`](../classes/ListUsersRequest.html) | `ListUsersRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L38) |
| `methods.listUsers.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L40) |
| `methods.listUsers.name` | `"ListUsers"` | `"ListUsers"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L37) |
| `methods.listUsers.O` | *typeof* [`ListUsersResponse`](../classes/ListUsersResponse.html) | `ListUsersResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L39) |
| `methods.updateSettings` | \{ `I`: *typeof* [`UpdateSettingsRequest`](../classes/UpdateSettingsRequest.html); `kind`: `Unary`; `name`: `"UpdateSettings"`; `O`: *typeof* [`UpdateSettingsResponse`](../classes/UpdateSettingsResponse.html); \} | - | Update the settings of a user. **Generated** from rpc audiotool.user.v1.UserService.UpdateSettings | [gen/audiotool/user/v1/user\_service\_connect.ts:91](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L91) |
| `methods.updateSettings.I` | *typeof* [`UpdateSettingsRequest`](../classes/UpdateSettingsRequest.html) | `UpdateSettingsRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:93](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L93) |
| `methods.updateSettings.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L95) |
| `methods.updateSettings.name` | `"UpdateSettings"` | `"UpdateSettings"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:92](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L92) |
| `methods.updateSettings.O` | *typeof* [`UpdateSettingsResponse`](../classes/UpdateSettingsResponse.html) | `UpdateSettingsResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L94) |
| `methods.updateUser` | \{ `I`: *typeof* [`UpdateUserRequest`](../classes/UpdateUserRequest.html); `kind`: `Unary`; `name`: `"UpdateUser"`; `O`: *typeof* [`UpdateUserResponse`](../classes/UpdateUserResponse.html); \} | - | Update a user. **Generated** from rpc audiotool.user.v1.UserService.UpdateUser | [gen/audiotool/user/v1/user\_service\_connect.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L69) |
| `methods.updateUser.I` | *typeof* [`UpdateUserRequest`](../classes/UpdateUserRequest.html) | `UpdateUserRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L71) |
| `methods.updateUser.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L73) |
| `methods.updateUser.name` | `"UpdateUser"` | `"UpdateUser"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L70) |
| `methods.updateUser.O` | *typeof* [`UpdateUserResponse`](../classes/UpdateUserResponse.html) | `UpdateUserResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L72) |
| `methods.uploadAvatar` | \{ `I`: *typeof* [`UploadAvatarRequest`](../classes/UploadAvatarRequest.html); `kind`: `Unary`; `name`: `"UploadAvatar"`; `O`: *typeof* [`UploadAvatarResponse`](../classes/UploadAvatarResponse.html); \} | - | Upload an avatar for the logged in user. **Generated** from rpc audiotool.user.v1.UserService.UploadAvatar | [gen/audiotool/user/v1/user\_service\_connect.ts:102](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L102) |
| `methods.uploadAvatar.I` | *typeof* [`UploadAvatarRequest`](../classes/UploadAvatarRequest.html) | `UploadAvatarRequest` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:104](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L104) |
| `methods.uploadAvatar.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:106](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L106) |
| `methods.uploadAvatar.name` | `"UploadAvatar"` | `"UploadAvatar"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:103](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L103) |
| `methods.uploadAvatar.O` | *typeof* [`UploadAvatarResponse`](../classes/UploadAvatarResponse.html) | `UploadAvatarResponse` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:105](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L105) |
| <a id="property-typename"></a> `typeName` | `"audiotool.user.v1.UserService"` | `"audiotool.user.v1.UserService"` | - | [gen/audiotool/user/v1/user\_service\_connect.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/user/v1/user_service_connect.ts#L29) |

## Generated

from service audiotool.user.v1.UserService
