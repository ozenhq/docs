# Limits

- **Latency.** Lines arrive about 15–30 seconds after speech. ozen transcribes in chunks, not word by word.
- **Mixed language.** English terms spoken inside Hebrew are the weakest spot. Add them to the
  [vocabulary](corrections.md#vocabulary). Distant voices in the room are hard to hear.
- **Echo.** If you talk over the computer's voice or a remote speaker and your voices sound alike, your line can
  be dropped as echo.
- **Speak Selection.** macOS Speak Selection isn't captured as computer audio, so text it reads aloud is
  transcribed as a room speaker. **Ignore this voice** can drop it.
- **Overlapping speech.** Up to two voices at once are separated; a third merges into one of them. Overlaps in
  utterances under about 2 seconds aren't detected, and utterances under 1 second take the previous speaker.
- **Speaker matching** is live, with no re-clustering after the meeting. Tagging a few lines fixes past and future
  labels.
- **Platform.** macOS 15+ on Apple Silicon only.
