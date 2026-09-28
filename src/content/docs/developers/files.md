---
title: Files and data
description: Where ozen keeps everything on your Mac.
sidebar:
  order: 3
---

Everything ozen keeps is in your ozen folder, `~/ozen`, on your Mac.

| Path | What it holds | Shared? |
|---|---|---|
| `transcript.txt` | The readable transcript, one line per utterance | No |
| `lines.jsonl` | Every line with its id, time, source, speaker guess, text and voiceprint | No |
| `tags.json` | Speakers you set by tagging | No |
| `fixes.json` | Text corrections you made | No |
| `learned.json` | Hint words and automatic corrections learned from fixes | No |
| `fixes/` | Audio of fixed lines with the right text, for future fine-tuning | No |
| `ignore.json` | Voiceprints of ignored voices | No |
| `vocab.txt` | Terms the transcriber should spell right; edit freely | No (in the ozen repo) |
| `places.json` | Your places, including where you live and work | No |
| `voices/` | Names, voiceprints and accuracy history. Its own local git repository; keep it one | No |
| `context/` | Folders written for AI agents | No |
| `chunks/` | Audio waiting to be transcribed; deleted once transcribed | No |
| `recent/` | The last 20 transcribed chunks, for `eval.py`. Set `OZEN_KEEP_AUDIO=0` to keep none | No |
| `screen.png`, `screen-small.png` | Last `ozen look` screenshot | No |
| `start.log` | Logs from the recorder and transcriber | No |

Personal files (`places.json`, `ignore.json`, `fixes*`, `context/`) are gitignored in the ozen repo, so they
aren't committed by accident.

## Deleting data

- A meeting: `delete_meeting` over [MCP](/developers/mcp/), which removes its lines, fixes and tags.
- Specific lines: `delete_lines` over MCP.
- A person: `delete_person` over MCP.
- Everything: stop ozen and delete `~/ozen`.
