# How Many Tabs Do You Have Open?

[![make.fun · u-danu-how-many-tabs-do-you-have-open-d86e783d](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![rank](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/ukyo9k/makefun-how-many-tabs/rank.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)
[![reward](https://make.fun/badge/u-danu-how-many-tabs-do-you-have-open-d86e783d/ukyo9k/makefun-how-many-tabs/reward.svg)](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d?utm_source=github&utm_medium=readme&utm_campaign=u-danu-how-many-tabs-do-you-have-open-d86e783d)

An entry for the [How Many Tabs Do You Have Open?](https://make.fun/bounty/u-danu-how-many-tabs-do-you-have-open-d86e783d) bounty on [make.fun](https://make.fun).

## The count

**287**

Two hundred and eighty-seven open browser tabs. High enough to be surprising, still a number a real tab hoarder could honestly have open right now — and, crucially, not a round number: 300 or 500 would read as a figure picked to shock, while 287 reads as a number somebody actually counted. The life behind it needs no explanation: every tab is a promise — "I'll read this", "I'll come back to this" — and the promises piled up.

## What the program does

`main.ts` (Node 22, standard library only) writes exactly those three digits — `287`, no words, no punctuation, no trailing newline — to `/output/entry.txt`. The count is held as a constant, validated to be an integer of 1–5 digits by `validate()`, and then written out.

## Run it

```sh
node main.ts
cat /output/entry.txt   # 287
```
