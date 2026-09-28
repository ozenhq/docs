# Troubleshooting

Start with the warnings at the top of the panel, or run `ozen health`: it prints one line per problem and nothing
when all is well. Logs are in `~/ozen/start.log`.

## "Recording blocked"

Ozen lacks **Screen & System Audio Recording** permission. Open **System Settings › Privacy & Security ›
Screen & System Audio Recording**, turn on **Ozen**, then press **Start** again. Do the same under
**Microphone** if the room isn't heard.

## "Recording on hold: the screen is asleep or locked"

Screen capture, and with it call audio, pauses while the display sleeps or is locked. Recording resumes when you
wake the screen.

## "Microphone is silent"

The selected input device gives no sound. Pick another under **System Settings › Sound › Input**.

If ozen says it's **using** one input **because** another is silent, it switched to a working microphone for you.
Pick an input in System Settings to override.

## "Transcriber stopped" or "Transcriber catching up"

- **Stopped:** the transcriber crashed. ozen restarts it automatically; queued audio is kept. If it keeps
  happening, check `start.log`.
- **Catching up:** it's more than about a minute behind. Normal on the first run while models download, or on a
  busy Mac. Lines will arrive late but none are lost.

## No lines from the call

- Is the meeting app one ozen listens to (Zoom, Chrome, Teams, Slack, FaceTime, Discord)? Audio from other apps,
  like Safari, counts as computer audio and isn't transcribed.
- In **Meetings** mode, ozen starts only once the meeting app opens the microphone. Press **Start** to record anyway.

## Wrong speaker names

Tag a few lines per person and answer **Review**; each tag relabels the whole meeting. See
[Who is speaking](speakers.md).

## A video or the computer's voice shows up as a person

Click its speaker name and choose **Ignore this voice**. macOS Speak Selection in particular isn't recognized as
computer audio; see [Limits](limits.md).

## Permissions reset after an update

Rebuild with `cargo run --release -- app` rather than copying the app by hand; the build signs it with the same
local certificate each time, which is what keeps permissions.
