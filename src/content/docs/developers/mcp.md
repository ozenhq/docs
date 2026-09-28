---
title: MCP server
description: Connect any MCP-capable AI app to ozen.
sidebar:
  order: 2
---

`ozen mcp` is a [Model Context Protocol](https://modelcontextprotocol.io) server on stdio. It lets any MCP-capable
agent read and edit what ozen keeps: meetings, transcript lines, people, places, vocabulary, and recording.

## Connect it

**Claude Code:**

```sh
claude mcp add -s user ozen -- ~/ozen/target/release/ozen mcp
```

**Any other MCP client:** command `~/ozen/target/release/ozen`, argument `mcp`.

## Concepts

- **Lines** are transcript lines: id, time, speaker, text. A line's speaker is either a tag (set by you or an
  agent), which wins, or the voiceprint's guess. `text` is the fixed text if the line was fixed; `heard` is what
  the transcriber originally wrote.
- **Meetings** are runs of lines with under 10 minutes of silence between them. A meeting's id is its start time
  in unix seconds.
- **Notes** are lines an agent creates, like a summary or an action item. They have no voice, so editing one just
  rewrites it.
- The speaker name **Ignored** marks a voice to drop.

## Tools

### Recording

| Tool | Arguments | What it does |
|---|---|---|
| `status` | | Recording state (`recording`, `paused`, `stopping`, `stopped`), record mode, and current problems. |
| `control` | `action`: `start`, `pause`, `resume`, `stop` | Control recording. Starting records the room's microphone. |
| `set_mode` | `mode`: `always`, `meetings` | Set the record mode. Places override it while you're at one. |

### Meetings and lines

| Tool | Arguments | What it does |
|---|---|---|
| `list_meetings` | | Past meetings, newest first: id, start, minutes, lines, first words. |
| `delete_meeting` | `id` | Delete a meeting with all its lines, fixes, tags and labels. |
| `list_lines` | `meeting`, `since`, `until`, `query`, `limit` (all optional) | Lines in time order, as JSON. `limit` keeps the latest (default 200). |
| `get_line` | `id` | One line. |
| `create_line` | `text`, optional `speaker` (default "Note"), `t` (unix seconds, default now) | Add a note. A time inside a meeting puts it in that meeting. |
| `update_line` | `id`, `text` and/or `speaker` | Fix text (teaches the transcriber) and/or set who said it (retrains voiceprints, a few seconds). Empty clears. |
| `delete_lines` | `ids` | Delete lines with their fixes, tags and labels. All ids must exist. |

### People

| Tool | Arguments | What it does |
|---|---|---|
| `list_people` | | Lines tagged per name, and the voiceprints with sample counts. Add a person by tagging a line with `update_line`. |
| `rename_person` | `from`, `to` | Move every line tagged `from` to `to`, then retrain. |
| `delete_person` | `name` | Clear every tag with that name here and retrain. `Ignored` stops ignoring every ignored voice. |

### Places and vocabulary

| Tool | Arguments | What it does |
|---|---|---|
| `list_places` | | Places and their settings. |
| `set_place` | `label`, `action` (`record`, `meetings`, `off`), optional `lat`, `lon`, `radius` (meters, default 150) | Create a place, or replace the one with that label. Without `lat`/`lon`, the menu bar sets it from the Mac's location. |
| `delete_place` | `label` | Delete a place. |
| `list_vocab` | | Vocabulary words. |
| `add_vocab` | `words` | Add words; existing ones are skipped. |
| `remove_vocab` | `words` | Remove words. |

The menu bar app picks up changes to places, vocabulary and mode live. Argument details are in the schema each
tool reports, generated from [src/mcp.rs](https://github.com/ozenhq/ozen/blob/main/src/mcp.rs).
