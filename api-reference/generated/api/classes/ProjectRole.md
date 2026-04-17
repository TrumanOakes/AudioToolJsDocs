---
title: "ProjectRole"
parent: "api"
grand_parent: "API"
nav_order: 96
---

[**@audiotool/nexus API Reference**](../../)

***

# Class: ProjectRole

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:94](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L94)

ProjectRole represents a user's role in a project.

The owner of the project is not shown in the list of collaborators and simply is attached to the
project.

Depending on the collaborator role the user can edit the project or view it and may be synced as
a contributor to a track.

## Generated

from message audiotool.project.v1.ProjectRole

## Extends

- `Message`\<`ProjectRole`\>

## Constructors

### Constructor

```ts
new ProjectRole(data?: PartialMessage<ProjectRole>): ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:137](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L137)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `data?` | `PartialMessage`\<`ProjectRole`\> |

#### Returns

`ProjectRole`

#### Overrides

```ts
Message<ProjectRole>.constructor
```

## Properties

### createTime?

```ts
optional createTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:121](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L121)

The time the role was created.

#### Generated

from field: google.protobuf.Timestamp create_time = 4;

***

### creatorName

```ts
creatorName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:135](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L135)

The creator of the ProjectRole.

#### Generated

from field: string creator_name = 6;

***

### name

```ts
name: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:100](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L100)

The name of roles within a project.

#### Generated

from field: string name = 1;

***

### roleType

```ts
roleType: ProjectRoleType = ProjectRoleType.UNSPECIFIED;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L114)

The type of role the user has in the project.

#### Generated

from field: audiotool.project.v1.ProjectRoleType role_type = 3;

***

### updateTime?

```ts
optional updateTime?: Timestamp;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:128](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L128)

The time the role was last updated.

#### Generated

from field: google.protobuf.Timestamp update_time = 5;

***

### userName

```ts
userName: string = "";
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:107](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L107)

The Name of the user.

#### Generated

from field: string user_name = 2;

***

### fields

```ts
readonly static fields: FieldList;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:144](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L144)

***

### runtime

```ts
readonly static runtime: ProtoRuntime = proto3;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:142](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L142)

***

### typeName

```ts
readonly static typeName: "audiotool.project.v1.ProjectRole" = "audiotool.project.v1.ProjectRole";
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:143](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L143)

## Methods

### equals()

```ts
static equals(a: ProjectRole | PlainMessage<ProjectRole> | undefined, b: ProjectRole | PlainMessage<ProjectRole> | undefined): boolean;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:165](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L165)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `ProjectRole` \| `PlainMessage`\<`ProjectRole`\> \| `undefined` |
| `b` | `ProjectRole` \| `PlainMessage`\<`ProjectRole`\> \| `undefined` |

#### Returns

`boolean`

***

### fromBinary()

```ts
static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:153](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L153)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `bytes` | `Uint8Array` |
| `options?` | `Partial`\<`BinaryReadOptions`\> |

#### Returns

`ProjectRole`

***

### fromJson()

```ts
static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:157](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L157)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonValue` | `JsonValue` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ProjectRole`

***

### fromJsonString()

```ts
static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ProjectRole;
```

Defined in: [gen/audiotool/project/v1/project\_role\_pb.ts:161](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/project/v1/project_role_pb.ts#L161)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `jsonString` | `string` |
| `options?` | `Partial`\<`JsonReadOptions`\> |

#### Returns

`ProjectRole`
