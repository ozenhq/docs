# Privacy

ozen is built so meeting audio never leaves your Mac: no bot joins the call, and transcription and speaker
recognition run locally. You're still recording people, so a few things are on you.

## Recording others

- ozen records and transcribes other people. **Tell participants, and follow your local recording laws.** Some
  places require everyone's consent.
- In **Always** mode the mic records everything said near the Mac, not only meetings. Use **Meetings** mode or
  [places](recording.md#places) to limit it.

## Voiceprints are biometric data

- Keep the voices registry repository **private**.
- Enroll only people who agreed. Remove someone with `delete_person` (see [MCP server](mcp.md)) and from the
  registry.
- Ignored voices never go to the registry.

## What leaves your Mac

| What | Where | When |
|---|---|---|
| Names and voiceprints | Your voices registry git remote | After tagging, and when pulling updates |
| Map tiles for the area shown | OpenStreetMap | Only while the Places map is open |
| Model downloads | Hugging Face and similar | First use of each model |
| Transcripts you hand to an agent | That agent's AI provider | When you use **Ask AI**, **Open**, or MCP |

Your location, recordings, transcripts, fixes and screenshots otherwise stay on the Mac. Remember that the last
row means cloud agents like Claude Code send what they read to their provider.

`places.json` holds where you live and work. Don't copy it into shared folders.
