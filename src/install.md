# Install

## Requirements

- A Mac with Apple Silicon running macOS 15 or later
- Xcode command line tools (`xcode-select --install`), for `swiftc`
- [Rust](https://rustup.rs) (`cargo`)
- [uv](https://docs.astral.sh/uv/) (Python runner)
- `ffmpeg` (`brew install ffmpeg`)
- Read access to the [ozen repository](https://github.com/ozenhq/ozen) and to your voices registry

## Build and install

```sh
git clone https://github.com/ozenhq/ozen ~/ozen
git clone https://github.com/tupe12334/voices-embedding-registry ~/ozen/voices
cd ~/ozen && cargo run --release -- app
```

The last command builds the `ozen` command-line tool (`~/ozen/target/release/ozen`) and installs
**Ozen.app** into `~/Applications`.

Open **Ozen** from Spotlight, Launchpad or Finder like any app. It lives in the menu bar as an ear icon and has
no Dock icon.

> **Tip:** put the CLI on your `PATH` so you can type `ozen` instead of `~/ozen/target/release/ozen`:
> add `alias ozen=~/ozen/target/release/ozen` to `~/.zshrc`. The rest of these docs write `ozen`.

## Permissions

The first time you press **Start**, macOS asks Ozen for two permissions. Grant both in
**System Settings › Privacy & Security**, then press **Start** again:

| Permission | Why |
|---|---|
| **Screen & System Audio Recording** | To capture audio from meeting apps and other apps (ScreenCaptureKit). ozen does not record video. |
| **Microphone** | To hear people in the room, including you. |
| **Location Services** *(optional)* | Asked only when you first locate a [place](recording.md#places). Without it, places never match and recording follows Always / Meetings. |

The build signs the app with a local self-signed certificate (kept in
`~/Library/Keychains/ozen-signing.keychain-db`), so permissions survive rebuilds.

## First-run downloads

The speech models download the first time they're needed: Whisper (Hebrew and English) and the voice-recognition
model on the first transcription, and the ~640 MB speech separator in the background after the first start.
Until the separator is ready, two people talking at once stay merged in one line. While models download the
panel may say the transcriber is catching up; that's expected.

## Updating

```sh
cd ~/ozen && git pull && cargo run --release -- app
```

Rebuilding never stops a recording in progress.

## Another Mac

Run the same three install commands on the other Mac. Voices you tag on either Mac reach the other within a few
minutes; see [Using several Macs](multi-mac.md).
