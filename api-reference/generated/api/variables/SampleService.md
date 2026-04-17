---
title: "SampleService"
parent: "api"
grand_parent: "API"
nav_order: 107
---

[**@audiotool/nexus API Reference**](../../)

***

# Variable: SampleService

```ts
const SampleService: {
  methods: {
     createSample: {
        I: typeof CreateSampleRequest;
        kind: Unary;
        name: "CreateSample";
        O: typeof CreateSampleResponse;
     };
     deleteSample: {
        I: typeof DeleteSampleRequest;
        kind: Unary;
        name: "DeleteSample";
        O: typeof DeleteSampleResponse;
     };
     getSample: {
        I: typeof GetSampleRequest;
        kind: Unary;
        name: "GetSample";
        O: typeof GetSampleResponse;
     };
     listen: {
        I: typeof ListenRequest;
        kind: ServerStreaming;
        name: "Listen";
        O: typeof ListenResponse;
     };
     listSamples: {
        I: typeof ListSamplesRequest;
        kind: Unary;
        name: "ListSamples";
        O: typeof ListSamplesResponse;
     };
     updateSample: {
        I: typeof UpdateSampleRequest;
        kind: Unary;
        name: "UpdateSample";
        O: typeof UpdateSampleResponse;
     };
     uploadSampleFinished: {
        I: typeof UploadSampleFinishedRequest;
        kind: Unary;
        name: "UploadSampleFinished";
        O: typeof UploadSampleFinishedResponse;
     };
  };
  typeName: "audiotool.sample.v1.SampleService";
};
```

Defined in: [gen/audiotool/sample/v1/sample\_service\_connect.ts:28](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L28)

The samples service definition.

## Type Declaration

| Name | Type | Default value | Description | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="property-methods"></a> `methods` | \{ `createSample`: \{ `I`: *typeof* [`CreateSampleRequest`](../classes/CreateSampleRequest.html); `kind`: `Unary`; `name`: `"CreateSample"`; `O`: *typeof* [`CreateSampleResponse`](../classes/CreateSampleResponse.html); \}; `deleteSample`: \{ `I`: *typeof* [`DeleteSampleRequest`](../classes/DeleteSampleRequest.html); `kind`: `Unary`; `name`: `"DeleteSample"`; `O`: *typeof* [`DeleteSampleResponse`](../classes/DeleteSampleResponse.html); \}; `getSample`: \{ `I`: *typeof* [`GetSampleRequest`](../classes/GetSampleRequest.html); `kind`: `Unary`; `name`: `"GetSample"`; `O`: *typeof* [`GetSampleResponse`](../classes/GetSampleResponse.html); \}; `listen`: \{ `I`: *typeof* [`ListenRequest`](../classes/ListenRequest.html); `kind`: `ServerStreaming`; `name`: `"Listen"`; `O`: *typeof* [`ListenResponse`](../classes/ListenResponse.html); \}; `listSamples`: \{ `I`: *typeof* [`ListSamplesRequest`](../classes/ListSamplesRequest.html); `kind`: `Unary`; `name`: `"ListSamples"`; `O`: *typeof* [`ListSamplesResponse`](../classes/ListSamplesResponse.html); \}; `updateSample`: \{ `I`: *typeof* [`UpdateSampleRequest`](../classes/UpdateSampleRequest.html); `kind`: `Unary`; `name`: `"UpdateSample"`; `O`: *typeof* [`UpdateSampleResponse`](../classes/UpdateSampleResponse.html); \}; `uploadSampleFinished`: \{ `I`: *typeof* [`UploadSampleFinishedRequest`](../classes/UploadSampleFinishedRequest.html); `kind`: `Unary`; `name`: `"UploadSampleFinished"`; `O`: *typeof* [`UploadSampleFinishedResponse`](../classes/UploadSampleFinishedResponse.html); \}; \} | - | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L30) |
| `methods.createSample` | \{ `I`: *typeof* [`CreateSampleRequest`](../classes/CreateSampleRequest.html); `kind`: `Unary`; `name`: `"CreateSample"`; `O`: *typeof* [`CreateSampleResponse`](../classes/CreateSampleResponse.html); \} | - | Create a sample. **Generated** from rpc audiotool.sample.v1.SampleService.CreateSample | [gen/audiotool/sample/v1/sample\_service\_connect.ts:47](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L47) |
| `methods.createSample.I` | *typeof* [`CreateSampleRequest`](../classes/CreateSampleRequest.html) | `CreateSampleRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L49) |
| `methods.createSample.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:51](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L51) |
| `methods.createSample.name` | `"CreateSample"` | `"CreateSample"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:48](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L48) |
| `methods.createSample.O` | *typeof* [`CreateSampleResponse`](../classes/CreateSampleResponse.html) | `CreateSampleResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:50](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L50) |
| `methods.deleteSample` | \{ `I`: *typeof* [`DeleteSampleRequest`](../classes/DeleteSampleRequest.html); `kind`: `Unary`; `name`: `"DeleteSample"`; `O`: *typeof* [`DeleteSampleResponse`](../classes/DeleteSampleResponse.html); \} | - | Deletes a sample. A sample can be deleted if it is not used by a project (document-service) and if the user has the correct permissions. **Generated** from rpc audiotool.sample.v1.SampleService.DeleteSample | [gen/audiotool/sample/v1/sample\_service\_connect.ts:95](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L95) |
| `methods.deleteSample.I` | *typeof* [`DeleteSampleRequest`](../classes/DeleteSampleRequest.html) | `DeleteSampleRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:97](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L97) |
| `methods.deleteSample.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:99](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L99) |
| `methods.deleteSample.name` | `"DeleteSample"` | `"DeleteSample"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:96](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L96) |
| `methods.deleteSample.O` | *typeof* [`DeleteSampleResponse`](../classes/DeleteSampleResponse.html) | `DeleteSampleResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:98](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L98) |
| `methods.getSample` | \{ `I`: *typeof* [`GetSampleRequest`](../classes/GetSampleRequest.html); `kind`: `Unary`; `name`: `"GetSample"`; `O`: *typeof* [`GetSampleResponse`](../classes/GetSampleResponse.html); \} | - | Gets a sample. **Generated** from rpc audiotool.sample.v1.SampleService.GetSample | [gen/audiotool/sample/v1/sample\_service\_connect.ts:70](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L70) |
| `methods.getSample.I` | *typeof* [`GetSampleRequest`](../classes/GetSampleRequest.html) | `GetSampleRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:72](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L72) |
| `methods.getSample.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:74](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L74) |
| `methods.getSample.name` | `"GetSample"` | `"GetSample"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:71](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L71) |
| `methods.getSample.O` | *typeof* [`GetSampleResponse`](../classes/GetSampleResponse.html) | `GetSampleResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:73](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L73) |
| `methods.listen` | \{ `I`: *typeof* [`ListenRequest`](../classes/ListenRequest.html); `kind`: `ServerStreaming`; `name`: `"Listen"`; `O`: *typeof* [`ListenResponse`](../classes/ListenResponse.html); \} | - | Listen for samples. This is a server streaming RPC. The client sends a request and gets a stream of responses. This can be used when a sample is created and announced as being uploaded in a collaborative session, the other clients can listen for the sample and start processing it as soon as it is ready. The server will have a history which lasts for a certain time frame and size and sends out historical events to the client. This makes it easy to retrieve non-racy events. **Generated** from rpc audiotool.sample.v1.SampleService.Listen | [gen/audiotool/sample/v1/sample\_service\_connect.ts:114](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L114) |
| `methods.listen.I` | *typeof* [`ListenRequest`](../classes/ListenRequest.html) | `ListenRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:116](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L116) |
| `methods.listen.kind` | `ServerStreaming` | `MethodKind.ServerStreaming` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:118](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L118) |
| `methods.listen.name` | `"Listen"` | `"Listen"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:115](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L115) |
| `methods.listen.O` | *typeof* [`ListenResponse`](../classes/ListenResponse.html) | `ListenResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:117](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L117) |
| `methods.listSamples` | \{ `I`: *typeof* [`ListSamplesRequest`](../classes/ListSamplesRequest.html); `kind`: `Unary`; `name`: `"ListSamples"`; `O`: *typeof* [`ListSamplesResponse`](../classes/ListSamplesResponse.html); \} | - | Lists the samples. **Generated** from rpc audiotool.sample.v1.SampleService.ListSamples | [gen/audiotool/sample/v1/sample\_service\_connect.ts:36](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L36) |
| `methods.listSamples.I` | *typeof* [`ListSamplesRequest`](../classes/ListSamplesRequest.html) | `ListSamplesRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:38](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L38) |
| `methods.listSamples.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L40) |
| `methods.listSamples.name` | `"ListSamples"` | `"ListSamples"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:37](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L37) |
| `methods.listSamples.O` | *typeof* [`ListSamplesResponse`](../classes/ListSamplesResponse.html) | `ListSamplesResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:39](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L39) |
| `methods.updateSample` | \{ `I`: *typeof* [`UpdateSampleRequest`](../classes/UpdateSampleRequest.html); `kind`: `Unary`; `name`: `"UpdateSample"`; `O`: *typeof* [`UpdateSampleResponse`](../classes/UpdateSampleResponse.html); \} | - | Updates a sample. **Generated** from rpc audiotool.sample.v1.SampleService.UpdateSample | [gen/audiotool/sample/v1/sample\_service\_connect.ts:81](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L81) |
| `methods.updateSample.I` | *typeof* [`UpdateSampleRequest`](../classes/UpdateSampleRequest.html) | `UpdateSampleRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:83](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L83) |
| `methods.updateSample.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:85](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L85) |
| `methods.updateSample.name` | `"UpdateSample"` | `"UpdateSample"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:82](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L82) |
| `methods.updateSample.O` | *typeof* [`UpdateSampleResponse`](../classes/UpdateSampleResponse.html) | `UpdateSampleResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:84](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L84) |
| `methods.uploadSampleFinished` | \{ `I`: *typeof* [`UploadSampleFinishedRequest`](../classes/UploadSampleFinishedRequest.html); `kind`: `Unary`; `name`: `"UploadSampleFinished"`; `O`: *typeof* [`UploadSampleFinishedResponse`](../classes/UploadSampleFinishedResponse.html); \} | - | UploadSampleFinished is called from the client when the upload of a sample is finished so the server can start processing the Data. An URL for the upload will be returned by CreateSample. **Generated** from rpc audiotool.sample.v1.SampleService.UploadSampleFinished | [gen/audiotool/sample/v1/sample\_service\_connect.ts:59](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L59) |
| `methods.uploadSampleFinished.I` | *typeof* [`UploadSampleFinishedRequest`](../classes/UploadSampleFinishedRequest.html) | `UploadSampleFinishedRequest` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:61](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L61) |
| `methods.uploadSampleFinished.kind` | `Unary` | `MethodKind.Unary` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:63](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L63) |
| `methods.uploadSampleFinished.name` | `"UploadSampleFinished"` | `"UploadSampleFinished"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:60](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L60) |
| `methods.uploadSampleFinished.O` | *typeof* [`UploadSampleFinishedResponse`](../classes/UploadSampleFinishedResponse.html) | `UploadSampleFinishedResponse` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:62](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L62) |
| <a id="property-typename"></a> `typeName` | `"audiotool.sample.v1.SampleService"` | `"audiotool.sample.v1.SampleService"` | - | [gen/audiotool/sample/v1/sample\_service\_connect.ts:29](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/sample/v1/sample_service_connect.ts#L29) |

## Generated

from service audiotool.sample.v1.SampleService
