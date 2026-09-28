# When ozen records

## What ozen hears

While recording, ozen captures three audio streams:

| Stream | Source | Transcribed? |
|---|---|---|
| **call** | Meeting apps only: Zoom, Chrome, Teams, Slack, FaceTime, Discord | Yes, as `(call)` lines |
| **mic** | Your microphone, meaning everyone in the room | Yes, as `(room)` lines |
| **local** | Every other app, like a video or the `say` command | No. Used only to recognize when the computer itself is talking, so it isn't mistaken for a person in the room |

## Record modes

Pick a mode with the **Always / Meetings** toggle in the panel or the right-click menu.

**Always.** Records from **Start** until you pause or stop, including everything the room mic hears.

**Meetings.** Starts by itself when a meeting app (Zoom, Chrome/Meet, Teams, Slack, FaceTime, Discord) starts
using the microphone, and stops 20 seconds after it releases it. This works for any call in those apps, with no
calendar or plugin needed.

In either mode, pausing or starting by hand wins until the next meeting starts or ends. Relaunching Ozen never
stops a recording in progress.

## Places

Places switch recording by where your Mac is. Open **Places…** from the panel or the right-click menu.

Each place has a label, a location, a radius, and one of three settings:

| Setting | While you're there |
|---|---|
| **Auto record** | Record (like Always) |
| **Record meetings only** | Record during calls (like Meetings) |
| **Auto off** | Don't record |

While you're inside a place's radius, its setting replaces Always / Meetings. Arriving or leaving applies right
away; a manual pause or start holds until then. Outside every place, your Always / Meetings choice applies.

**Home** and **Work** are there from the start with no location, so they do nothing until you set them. To set a
place's location:

- type its latitude and longitude,
- press **Use current location**,
- press **Pick on map** and click, or
- drag its pin on the map.

The first time, macOS asks for Location Services. Right after Ozen launches it waits for your location before any
place decides anything.

The map uses OpenStreetMap; viewing it downloads map tiles for that area. Your location itself is never sent
anywhere. Places are saved in `~/ozen/places.json`; see [Files and data](files.md).
