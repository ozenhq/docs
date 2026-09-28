# Command line

The `ozen` binary is built to `~/ozen/target/release/ozen`. It works from any directory. Most commands do what a
panel button does, so you can script ozen or drive it from an agent.

## Recording

| Command | What it does |
|---|---|
| `ozen start` | Start recording (same as **Start**). |
| `ozen pause` | Pause; the transcriber stays loaded. |
| `ozen resume` | Resume after a pause. |
| `ozen stop` | Stop, finish transcribing queued audio (up to 2 minutes), then unload. |
| `ozen status` | Print `recording`, `paused`, `stopping` or `stopped`. |
| `ozen health` | Print one line per problem the panel warns about; nothing when all is well. See [Troubleshooting](troubleshooting.md). |

## Transcript

| Command | What it does |
|---|---|
| `ozen show [N]` | Last N lines, with tagged speakers and fixed text. |
| `ozen look [N]` | Screenshot to `~/ozen/screen-small.png`, then the last N lines (default 40). |
| `ozen fix <line-id> "right text"` | Correct a line's text; empty restores it. Relearns hint words and corrections. |
| `ozen tag <line-id> "Name"` | Say who said a line; empty clears. Retrains and pushes the registry. |
| `ozen ignore <line-id>...` | Mark lines as a voice to ignore. Retrains. |
| `ozen retrain` | Rebuild voiceprints, labels, ignored voices and accuracy from all tags. Tagging does this for you. |

## Meetings and agents

| Command | What it does |
|---|---|
| `ozen meetings` | Past meetings, newest first: id, start, minutes, lines, first words. |
| `ozen gather [--kev] ID...` | Write those meetings to `~/ozen/context/<now>/` and print the folder. `--kev` adds meetings Kev judges related. |
| `ozen live [--open claude\|hermes]` | Write the current meeting to `~/ozen/context/live/`, keep it updated every 15 s until the meeting ends, and print the folder. `--open` starts that agent there. |
| `ozen open DIR claude\|hermes\|finder` | Open a folder written by `gather` or `live` in that agent, or in Finder. |
| `ozen mcp` | Run the [MCP server](mcp.md) on stdio. |

## App

| Command | What it does |
|---|---|
| `ozen app` | Build and install `~/Applications/Ozen.app`. |
| `ozen bar` | Build if needed, then open Ozen.app. |

## Evaluation

| Command | What it does |
|---|---|
| `ozen eval [--vocab 0,10,30] [--repeat 0,1,2] [--real] [--fresh]` | Score learning settings; see [Tuning how fixes teach](tuning.md). |
| `uv run eval.py [N]` | Transcribe your last N real chunks with stock, Hebrew and Hebrew+vocabulary models, to compare on your own speech. Run from `~/ozen`. |
