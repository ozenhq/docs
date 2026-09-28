# Fixing the transcript

## Correcting a line

Click a line's text in the panel and type what was really said. Leave it empty to restore what ozen heard.

From the command line: `ozen fix <line-id> "right text"` (empty clears).

## What ozen learns from fixes

- **New words.** Words your fixes add, like names, product terms and jargon, are hinted to the transcriber on every
  new line, most used first.
- **Repeated corrections.** Correct the same phrase the same way twice (say "פי אר" → "PR") and ozen applies that
  correction to new lines automatically.
- A corrected line keeps what the transcriber originally heard, so if an automatic correction is wrong, fixing it
  back cancels it. A correction is also skipped whenever one of your fixes kept that phrase as right.

Each fix also keeps its audio with the right text, as a dataset for fine-tuning a model later. It stays on your
Mac.

## Vocabulary

`~/ozen/vocab.txt` lists names and terms the transcriber should spell right, like `Kev`, `PR`, `code review`. Edit
it freely, one term per line or comma-separated; it's read on every line. Known people's names are hinted automatically.

Agents can manage it too, with the `list_vocab`, `add_vocab` and `remove_vocab` [MCP tools](mcp.md).

## Languages

Each utterance is transcribed as either Hebrew or English, picked per utterance. Hebrew uses a Hebrew-trained
Whisper model ([ivrit.ai](https://huggingface.co/mlx-community/ivrit-ai-whisper-large-v3-turbo-mlx)), English uses
stock Whisper large-v3-turbo. English terms spoken inside Hebrew are the weakest spot; add them to the vocabulary.

Filler that Whisper tends to invent on silence ("Thank you.", "תודה רבה") is dropped.
