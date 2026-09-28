# Using several Macs

Voices are shared across your Macs through the voices registry, a private git repository that every Mac clones
into `~/ozen/voices`.

- **Start** pulls the registry.
- While running, ozen pulls again every few minutes.
- Every tag rebuilds voiceprints from the newest registry and pushes when done.

So a person you tag on one Mac is recognized on the other within a few minutes.

**Tagging on two Macs at once is safe.** A push that loses the race rebuilds on top of the other Mac's and
pushes again, so both sets of tags survive.

**Offline** tags are committed locally and pushed with the next tag once you're back online.

## What stays on each Mac

Each Mac's own tags and transcript never leave it; the registry holds only names and voiceprints. Ignored voices,
places, fixes and recordings are local too. See [Files and data](files.md).

> **Don't edit `~/ozen/voices` by hand.** Every retrain resets it to the remote before rebuilding, so hand edits
> are lost. Change voices by tagging.

## Setting up another Mac

Follow [Install](install.md) on the new Mac, with the same registry URL.
