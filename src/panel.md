# The menu bar panel

Ozen lives in the menu bar as an ear icon.

- **Click** the icon for the panel.
- **Right-click** for a menu with the same controls (Start / Pause / Resume / Stop, Always / Meetings, Places…).

## The icon

| Icon | Meaning |
|---|---|
| Red filled ear | Recording |
| Monochrome ear | Stopped |
| Pause symbol | Paused |
| Hourglass | Stopped, finishing transcription of audio already heard |

When not recording, the panel says **Not recording** and why (paused, finishing transcription, or a problem).

## Controls

| Button | What it does |
|---|---|
| **Start** | Start recording the call, the room microphone and other apps' audio. |
| **Pause** / **Resume** | Stop and restart listening. The transcriber stays loaded, so resuming is instant. |
| **Stop** | Stop listening, finish transcribing queued audio (up to 2 minutes), then unload everything. |
| **Always / Meetings** | Record mode; see [When ozen records](recording.md). |
| **Places…** | Place-based rules; see [Places](recording.md#places). |
| **Review N** | Jump to the line ozen is least sure who said; see [Review](speakers.md#review). |
| **Ask AI** | Open an AI agent on the meeting happening now; see [Working with AI agents](agents.md). |

Problems show as warnings at the top of the panel: recording blocked by a missing permission, a silent
microphone, a screen that's asleep, or a transcriber that's behind. See [Troubleshooting](troubleshooting.md).

## Views

### Transcript

The live transcript, refreshed every 2 seconds. Each line shows its time, speaker and text.

- Click a **speaker name** to say who really said it, or to ignore that voice.
- Click the **text** to correct it.
- An orange **?** marks a line ozen is unsure about.
- Grey lines are ignored voices.

### Timeline

One lane per speaker, with their total talk time, and a bar for every line they spoke along a scrollable time
axis. Overlapping speech overlaps here too.

- **−** / **+** zoom.
- Silences over 2 minutes shrink to a short break marker.
- Hover a bar to read the line; click it to jump to that line in the transcript.

### Meetings

Every past meeting, newest first. A silence of 10 minutes or more starts a new meeting.

Select one or more (⌘-click or ⇧-click) and press **Open** to hand them to an AI agent; see
[Working with AI agents](agents.md#past-meetings).

The footer shows speaker-recognition accuracy, now and when you started.
