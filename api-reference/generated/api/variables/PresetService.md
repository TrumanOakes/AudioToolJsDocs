---
title: "PresetService"
parent: "api"
grand_parent: "API"
nav_order: 92
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: PresetService

```ts
const PresetService: {
  methods: {
     createPreset: {
        I: typeof CreatePresetRequest;
        kind: Unary;
        name: "CreatePreset";
        O: typeof CreatePresetResponse;
     };
     deletePreset: {
        I: typeof DeletePresetRequest;
        kind: Unary;
        name: "DeletePreset";
        O: typeof DeletePresetResponse;
     };
     getPreset: {
        I: typeof GetPresetRequest;
        kind: Unary;
        name: "GetPreset";
        O: typeof GetPresetResponse;
     };
     listPresets: {
        I: typeof ListPresetsRequest;
        kind: Unary;
        name: "ListPresets";
        O: typeof ListPresetsResponse;
     };
     updatePreset: {
        I: typeof UpdatePresetRequest;
        kind: Unary;
        name: "UpdatePreset";
        O: typeof UpdatePresetResponse;
     };
  };
  typeName: "audiotool.preset.v1.PresetService";
};
```

Defined in: [gen/audiotool/preset/v1/preset\_service\_connect.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L28)

The preset service definition.

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-methods"></a> `methods` | \{ `createPreset`: \{ `I`: *typeof* [`CreatePresetRequest`](../classes/CreatePresetRequest.html); `kind`: `Unary`; `name`: `"CreatePreset"`; `O`: *typeof* [`CreatePresetResponse`](../classes/CreatePresetResponse.html); \}; `deletePreset`: \{ `I`: *typeof* [`DeletePresetRequest`](../classes/DeletePresetRequest.html); `kind`: `Unary`; `name`: `"DeletePreset"`; `O`: *typeof* [`DeletePresetResponse`](../classes/DeletePresetResponse.html); \}; `getPreset`: \{ `I`: *typeof* [`GetPresetRequest`](../classes/GetPresetRequest.html); `kind`: `Unary`; `name`: `"GetPreset"`; `O`: *typeof* [`GetPresetResponse`](../classes/GetPresetResponse.html); \}; `listPresets`: \{ `I`: *typeof* [`ListPresetsRequest`](../classes/ListPresetsRequest.html); `kind`: `Unary`; `name`: `"ListPresets"`; `O`: *typeof* [`ListPresetsResponse`](../classes/ListPresetsResponse.html); \}; `updatePreset`: \{ `I`: *typeof* [`UpdatePresetRequest`](../classes/UpdatePresetRequest.html); `kind`: `Unary`; `name`: `"UpdatePreset"`; `O`: *typeof* [`UpdatePresetResponse`](../classes/UpdatePresetResponse.html); \}; \} | - | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L30) |
| `methods.createPreset` | \{ `I`: *typeof* [`CreatePresetRequest`](../classes/CreatePresetRequest.html); `kind`: `Unary`; `name`: `"CreatePreset"`; `O`: *typeof* [`CreatePresetResponse`](../classes/CreatePresetResponse.html); \} | - | Create a preset. **Generated** from rpc audiotool.preset.v1.PresetService.CreatePreset | [gen/audiotool/preset/v1/preset\_service\_connect.ts:58](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L58) |
| `methods.createPreset.I` | *typeof* [`CreatePresetRequest`](../classes/CreatePresetRequest.html) | `CreatePresetRequest` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L60) |
| `methods.createPreset.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L62) |
| `methods.createPreset.name` | `"CreatePreset"` | `"CreatePreset"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L59) |
| `methods.createPreset.O` | *typeof* [`CreatePresetResponse`](../classes/CreatePresetResponse.html) | `CreatePresetResponse` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L61) |
| `methods.deletePreset` | \{ `I`: *typeof* [`DeletePresetRequest`](../classes/DeletePresetRequest.html); `kind`: `Unary`; `name`: `"DeletePreset"`; `O`: *typeof* [`DeletePresetResponse`](../classes/DeletePresetResponse.html); \} | - | Deletes a preset. A preset can always be deleted. If the preset is in use by a project, the project must handle the missing link to the preset. **Generated** from rpc audiotool.preset.v1.PresetService.DeletePreset | [gen/audiotool/preset/v1/preset\_service\_connect.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L83) |
| `methods.deletePreset.I` | *typeof* [`DeletePresetRequest`](../classes/DeletePresetRequest.html) | `DeletePresetRequest` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L85) |
| `methods.deletePreset.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:87](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L87) |
| `methods.deletePreset.name` | `"DeletePreset"` | `"DeletePreset"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L84) |
| `methods.deletePreset.O` | *typeof* [`DeletePresetResponse`](../classes/DeletePresetResponse.html) | `DeletePresetResponse` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:86](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L86) |
| `methods.getPreset` | \{ `I`: *typeof* [`GetPresetRequest`](../classes/GetPresetRequest.html); `kind`: `Unary`; `name`: `"GetPreset"`; `O`: *typeof* [`GetPresetResponse`](../classes/GetPresetResponse.html); \} | - | Gets a preset. **Generated** from rpc audiotool.preset.v1.PresetService.GetPreset | [gen/audiotool/preset/v1/preset\_service\_connect.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L47) |
| `methods.getPreset.I` | *typeof* [`GetPresetRequest`](../classes/GetPresetRequest.html) | `GetPresetRequest` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L49) |
| `methods.getPreset.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L51) |
| `methods.getPreset.name` | `"GetPreset"` | `"GetPreset"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L48) |
| `methods.getPreset.O` | *typeof* [`GetPresetResponse`](../classes/GetPresetResponse.html) | `GetPresetResponse` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L50) |
| `methods.listPresets` | \{ `I`: *typeof* [`ListPresetsRequest`](../classes/ListPresetsRequest.html); `kind`: `Unary`; `name`: `"ListPresets"`; `O`: *typeof* [`ListPresetsResponse`](../classes/ListPresetsResponse.html); \} | - | Lists the presets. **Generated** from rpc audiotool.preset.v1.PresetService.ListPresets | [gen/audiotool/preset/v1/preset\_service\_connect.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L36) |
| `methods.listPresets.I` | *typeof* [`ListPresetsRequest`](../classes/ListPresetsRequest.html) | `ListPresetsRequest` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L38) |
| `methods.listPresets.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L40) |
| `methods.listPresets.name` | `"ListPresets"` | `"ListPresets"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L37) |
| `methods.listPresets.O` | *typeof* [`ListPresetsResponse`](../classes/ListPresetsResponse.html) | `ListPresetsResponse` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L39) |
| `methods.updatePreset` | \{ `I`: *typeof* [`UpdatePresetRequest`](../classes/UpdatePresetRequest.html); `kind`: `Unary`; `name`: `"UpdatePreset"`; `O`: *typeof* [`UpdatePresetResponse`](../classes/UpdatePresetResponse.html); \} | - | Update a preset. **Generated** from rpc audiotool.preset.v1.PresetService.UpdatePreset | [gen/audiotool/preset/v1/preset\_service\_connect.ts:69](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L69) |
| `methods.updatePreset.I` | *typeof* [`UpdatePresetRequest`](../classes/UpdatePresetRequest.html) | `UpdatePresetRequest` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L71) |
| `methods.updatePreset.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L73) |
| `methods.updatePreset.name` | `"UpdatePreset"` | `"UpdatePreset"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L70) |
| `methods.updatePreset.O` | *typeof* [`UpdatePresetResponse`](../classes/UpdatePresetResponse.html) | `UpdatePresetResponse` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L72) |
| <a id="property-typename"></a> `typeName` | `"audiotool.preset.v1.PresetService"` | `"audiotool.preset.v1.PresetService"` | - | [gen/audiotool/preset/v1/preset\_service\_connect.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/preset/v1/preset_service_connect.ts#L29) |

## Generated

from service audiotool.preset.v1.PresetService
