# ozen

**ozen** (אוזן, "ear") is a local meeting copilot for macOS. While you're in a Zoom, Meet or Teams call,
ozen listens, transcribes the call and the room in Hebrew and English, knows who is speaking, and lets an
AI assistant (Claude Code or Hermes) read the meeting and see your screen so it can answer questions as the
meeting happens.

Everything runs on your Mac. No bot joins the meeting and no audio leaves the machine.

## What you get

- **A live transcript** of the call and of people in the room, one line per utterance, with a speaker name
  on every line. Lines appear about 15–30 seconds after they're spoken.
- **Speaker names that stick.** ozen recognizes voices it has heard before. Tell it once who said a line and
  it relabels the rest of the meeting, and remembers that person next time.
- **A transcript that learns.** Fix a misheard word and ozen learns the word; fix the same mistake twice and
  it corrects it by itself from then on.
- **Echo and noise filtered out.** Remote voices leaking from your speakers into the mic, the computer reading
  text aloud, and a video playing nearby don't pollute the transcript.
- **Overlapping speech separated.** When two people talk at once, each gets their own line.
- **Recording on your terms.** Record always, only during meetings, or by place (auto on at the office, off at
  home).
- **AI on tap.** Hand one or more past meetings, or the one happening right now, to an AI agent with one click.
  Any MCP-capable agent can also read and edit ozen's data directly.

A transcript line looks like this:

```
[15:06:52] Ofek Gabay (room): אימבדין שלי, אני לא מוצא את זה
[15:09:41] S2 (call): Let's move to the launch timeline.
```

`(call)` lines came from the meeting app, `(room)` lines from your microphone. `S2` is a voice ozen hasn't been
told a name for yet.

## Where to start

1. [Install](install.md) ozen and grant its permissions.
2. Record [your first meeting](first-meeting.md).
3. Learn the [menu bar panel](panel.md), where you'll spend most of your time.

Before recording other people, read [Privacy](privacy.md).
