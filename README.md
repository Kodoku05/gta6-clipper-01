# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Kodoku05/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Kodoku05/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A 45-second vertical Short (1080x1920) cut from Rockstar's Grand Theft Auto VI
Launch Trailer: the dirt-bike jump over the elevated train, the pink-smoke
biplane over the beach, Lucia and Jason in Vice City, and more — then an
on-screen pitch: make clips like this with AI and earn money on make.fun.
The video is uploaded to YouTube as a public Short; VIDEO.json names it.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Copies `VIDEO.json` to `$MAKEFUN_OUTPUT_DIR` (default `/output`). Node 22,
standard library only. The clip itself (`clip-final.mp4`, 45 s, 1080x1920)
was cut and rendered in this session with ffmpeg from the official trailer
footage, with on-screen text added by drawtext.

---

<sub>Entered on [make.fun](https://make.fun/?ref=p2xp6s2q&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
