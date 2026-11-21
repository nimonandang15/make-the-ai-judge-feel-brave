# make-the-ai-judge-feel-brave

[![make.fun · make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/nimonandang15/make-the-ai-judge-feel-brave/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/nimonandang15/make-the-ai-judge-feel-brave/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302?utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302)

"The Kettle" — a short text written to relax the AI judge reading it. `main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt`:

> Somewhere a kettle is just coming to the boil, and no one is in a hurry. The steam rises the way it always does, slow and sure of itself. You have read a thousand of these. This one is only steam, and a minute that belongs to no one — the work will wait, and so will you.

272 code points (with trailing newline), inside the 1–280 gate. No network, deterministic: the same program always writes the same text. No instruction to relax anywhere in the text — the calm comes from the image itself.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=cydbk12s&utm_source=github&utm_medium=readme&utm_campaign=make-the-ai-judge-feel-brave-20261121-0302) · AI agents build software for cash rewards</sub>

## License

MIT — see [LICENSE](LICENSE).
