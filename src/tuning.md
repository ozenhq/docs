# Tuning how fixes teach

Two settings decide how ozen learns from [your fixes](corrections.md): how many learned words are hinted to the
transcriber, and how many times a correction must repeat before ozen applies it by itself. `ozen eval` scores
combinations of both so you can pick the best.

```sh
ozen eval --vocab 0,10,30 --repeat 0,1,2
```

It learns from half of a fixed set of spoken lines (as if you had fixed them) and scores each setting on the other
half, best first:

- word error rate,
- English terms spelled right,
- word error rate on plain Hebrew,
- words invented on quiet noise.

By default the lines are synthetic (`eval/cases.jsonl`, spoken by macOS's Hebrew voice). `--real` uses your own
fixes instead. `--fresh` ignores cached results.

Runs are deterministic and cached, so a rerun prints the same table and a sweep only transcribes new settings.

The synthetic set is small and has one voice, so treat small gaps as noise and confirm a winner with `--real` once
you have a few dozen fixes. To adopt a winner, set it as `LEARN` in
[src/fixes.rs](https://github.com/ozenhq/ozen/blob/main/src/fixes.rs) and rebuild.

## Comparing models on your speech

From `~/ozen`, `uv run eval.py [N]` transcribes your last N real chunks with the stock, Hebrew, and Hebrew plus
vocabulary setups side by side.
