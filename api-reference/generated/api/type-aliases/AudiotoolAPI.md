---
title: "AudiotoolAPI"
parent: "api"
grand_parent: "API"
nav_order: 3
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: AudiotoolAPI

```ts
type AudiotoolAPI = {
  audioGraphService: RetryingClient<typeof AudiographService>;
  authorizedFetch: NeverThrowingFetch;
  fetch: NeverThrowingFetch;
  presets: PresetUtil;
  projectRoleService: RetryingClient<typeof ProjectRoleService>;
  projectService: RetryingClient<typeof ProjectService>;
  sampleService: RetryingClient<typeof SampleService>;
  userService: RetryingClient<typeof UserService>;
};
```

Defined in: [api/audiotool-api.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L30)

Some services generated from the protobuf definitions at https://developer.audiotool.com/explore-protobufs.

These are APIs of backend services of various parts of the audiotool infrastructure other than the
document services.
They let you make calls such as:
* create a project
* get user information

Etc. See [API](../../../../reference/platform-api-types.html) for an overview.

## Properties

### audioGraphService

```ts
audioGraphService: RetryingClient<typeof AudiographService>;
```

Defined in: [api/audiotool-api.ts:46](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L46)

Manage audio "graphs", i.e. plots of audio samples, as used in the sample browser.

***

### authorizedFetch

```ts
authorizedFetch: NeverThrowingFetch;
```

Defined in: [api/audiotool-api.ts:52](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L52)

Same as `window.fetch`, but
- never throws, instead returns an error
- includes headers & settings for authorization

***

### fetch

```ts
fetch: NeverThrowingFetch;
```

Defined in: [api/audiotool-api.ts:56](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L56)

Same as `window.fetch`, but never throws, instead returns an error.

***

### presets

```ts
presets: PresetUtil;
```

Defined in: [api/audiotool-api.ts:43](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L43)

***

### projectRoleService

```ts
projectRoleService: RetryingClient<typeof ProjectRoleService>;
```

Defined in: [api/audiotool-api.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L38)

Add collaborators to your projects.

***

### projectService

```ts
projectService: RetryingClient<typeof ProjectService>;
```

Defined in: [api/audiotool-api.ts:35](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L35)

Lookup, create and delete projects.

***

### sampleService

```ts
sampleService: RetryingClient<typeof SampleService>;
```

Defined in: [api/audiotool-api.ts:41](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L41)

Lookup and upload samples.

***

### userService

```ts
userService: RetryingClient<typeof UserService>;
```

Defined in: [api/audiotool-api.ts:32](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/api/audiotool-api.ts#L32)

Lookup users.
