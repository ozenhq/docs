# Who is speaking

ozen gives every line a speaker by its voice. Each utterance gets a voiceprint, which is compared with voices
already heard, so one person keeps one label for the whole meeting.

- **Known people** show by name. They come from your voices registry, which grows as you tag.
- **Unknown voices** show as `S1`, `S2`, … until you name them.

## Naming a speaker (tagging)

Click any speaker name in the transcript and pick or type who really said that line. Then ozen:

1. rebuilds that person's voiceprint from every line tagged as them, in this meeting and earlier ones,
2. relabels every untagged line with the new voiceprints, past and future,
3. saves the voice to the registry, so your other Macs learn it too.

This takes a few seconds. A few tags per person early in a meeting fix most labels. To undo a tag, click the
speaker name and choose **Clear tag**.

From the command line: `ozen tag <line-id> "Dana Levi"` (an empty name clears the tag).

## Review

ozen scores every untagged line and queues the ones it's least sure about: near the same-voice cutoff, or nearly
tied between two people. They show an orange **?** in the transcript.

Press **Review N** to jump to the most uncertain line and answer who said it. Review asks only about the last 10
minutes, because after that nobody remembers who said what.

Answering Review is the fastest way to improve recognition. In a test with four similar voices, 12 tags chosen by
Review reached 100% accuracy on untagged lines, against 98% for 12 random tags.

Every tag also recalibrates how similar two clips must be to count as the same voice, and logs accuracy; the
panel footer shows it next to the starting value.

## Ignoring a voice

A video playing next to your Mac, or a radio in the room, isn't part of the meeting. Click its speaker name and
choose:

- **Ignore this voice** to ignore that line's voice, or
- **Ignore all N lines by S3** to mark every nearby line of that speaker at once.

Those lines, and earlier ones that sound like them, turn grey and leave the timeline, and ozen stops writing that
voice from then on. Ignored voices stay on this Mac; they're never shared to the registry.

To undo, tag the line as a person, or choose **Clear tag**.

From the command line: `ozen ignore <line-id>...`.

## People talking at once

When two people talk at once, in the room, on the call, or one on each, ozen separates the audio into one track
per voice and writes each as its own line with its own speaker and time. In the timeline, those lines overlap.

Only utterances where voices disagree are separated, so a single speaker costs nothing extra. See
[Limits](limits.md) for what isn't separated.

## Echo

A mic utterance that mostly overlaps call or computer audio, in the same voice, is your speakers bleeding into the
mic, not a person in the room, so ozen drops it. That covers the computer reading text aloud and remote voices
leaking into the mic.

Someone in the room talking over the call keeps their line, because their voice doesn't match what was playing.
