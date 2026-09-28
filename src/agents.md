# Working with AI agents

ozen hands meetings to an AI coding agent, [Claude Code](https://claude.com/claude-code) or Hermes, in a folder
holding the transcripts plus an `AGENTS.md` (and `CLAUDE.md`) that tells the agent what's there. The agent must be
installed and on your `PATH`.

## The meeting happening now

Press **Ask AI** in the panel. ozen writes the current meeting (one whose last line is under 10 minutes old) to
`~/ozen/context/live/` and starts the agent there in a new Terminal window.

While the meeting goes on, a background process rewrites that folder with the latest lines every 15 seconds, and
exits when the meeting ends. The agent is told to reread it, and that `ozen look` shows your screen, so you can
ask things like:

- "Summarize the last five minutes."
- "What did Dana ask me to do?"
- "What's on my screen right now, and does it match what they're describing?"

From the command line: `ozen live --open claude` (or `hermes`); without `--open` it only writes the folder and
prints its path.

## Past meetings

Switch the panel to **Meetings**, select one or more (⌘-click or ⇧-click), and press **Open**. ozen writes their
transcripts into a fresh folder under `~/ozen/context/` and starts the agent you choose there. The folder's
`claude.command` or `hermes.command` reopens it later with a double-click.

**Auto add with Kev** also adds every other meeting that a local [Kev](https://github.com/jaredpalmer/kev) server
(`localhost:8009`) judges part of the same project or topic. Its scores show before you pick the agent. Without
Kev running, this option does nothing.

From the command line:

```sh
ozen meetings                # list meetings with their ids
ozen gather [--kev] ID...    # write them to context/<now>/ and print the folder
ozen open DIR claude         # or hermes, or finder
```

## Screen and recent lines

`ozen look [N]` takes a screenshot of the main display (saved as `~/ozen/screen-small.png`) and prints the last N
transcript lines (default 40), with tagged speakers and fixed text. Agents use it to answer "what's on screen" or
"what was just said". The app running it (like your terminal) needs Screen Recording permission.

## Any MCP agent

`ozen mcp` gives any MCP client full access to meetings, transcript lines, people, places, vocabulary and
recording control. See [MCP server](mcp.md).
