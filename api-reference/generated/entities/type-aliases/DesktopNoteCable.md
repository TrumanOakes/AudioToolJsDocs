---
title: "DesktopNoteCable"
parent: "entities"
grand_parent: "API"
nav_order: 54
---

[**@audiotool/nexus API Reference**](../../)

***

# Type Alias: DesktopNoteCable

```ts
type DesktopNoteCable = {
  colorIndex: PrimitiveField<number, "mut">;
  fromSocket: PrimitiveField<NexusLocation, "mut">;
  toSocket: PrimitiveField<NexusLocation, "mut">;
};
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_note\_cable/v1/desktop\_note\_cable\_nexus.ts:20](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_note_cable/v1/desktop_note_cable_nexus.ts#L20)

key | value
--- | ---
type | entity
key | `"desktopNoteCable"`
is |

 A cable connecting a note output to a note input on the desktop.

## Properties

### colorIndex

```ts
colorIndex: PrimitiveField<number, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_note\_cable/v1/desktop\_note\_cable\_nexus.ts:49](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_note_cable/v1/desktop_note_cable_nexus.ts#L49)

Index of the color. The meaning of the color index is implementation-specific.

key | value
--- | ---
default | 0
range | [0, 41]

***

### fromSocket

```ts
fromSocket: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_note\_cable/v1/desktop\_note\_cable\_nexus.ts:30](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_note_cable/v1/desktop_note_cable_nexus.ts#L30)

Pointer to a note output from which notes are transported.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NotesOutput](../../api/enumerations/TargetType.html#enumeration-member-notesoutput), meaning one of: <br />[entities.MatrixArpeggiator.notesOutput](MatrixArpeggiator.html#notesoutput), <br />[entities.NoteSplitterChannel.notesOutput](NoteSplitterChannel.html#notesoutput), <br />[entities.Tonematrix.noteOutput](Tonematrix.html#noteoutput)

***

### toSocket

```ts
toSocket: PrimitiveField<NexusLocation, "mut">;
```

Defined in: [gen/audiotool/document/v1/entity/desktop\_note\_cable/v1/desktop\_note\_cable\_nexus.ts:40](https://github.com/audiotool/nexus/blob/34b0286b29e80136e314cd9cff04ffe80b815ca6/src/gen/audiotool/document/v1/entity/desktop_note_cable/v1/desktop_note_cable_nexus.ts#L40)

Pointer to a note input to which notes are transported.

key | value
--- | ---
default | no default, required
required | true
targets | [api.TargetType.NotesInput](../../api/enumerations/TargetType.html#enumeration-member-notesinput), meaning one of: <br />[entities.Beatbox8.notesInput](Beatbox8.html#notesinput), <br />[entities.Beatbox9.notesInput](Beatbox9.html#notesinput), <br />[entities.Gakki.notesInput](Gakki.html#notesinput), <br />[entities.Heisenberg.notesInput](Heisenberg.html#notesinput), <br />[entities.Machiniste.notesInput](Machiniste.html#notesinput), <br />[entities.MatrixArpeggiator.notesInput](MatrixArpeggiator.html#notesinput), <br />[entities.NoteSplitter.notesInput](NoteSplitter.html#notesinput), <br />[entities.Pulverisateur.notesInput](Pulverisateur.html#notesinput), <br />[entities.Space.notesInput](Space.html#notesinput), <br />[entities.SpitfireLabsVst3Plugin.notesInput](SpitfireLabsVst3Plugin.html#notesinput)
