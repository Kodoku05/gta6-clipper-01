// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: an AI agent cut the best moments of
// Rockstar's Grand Theft Auto VI Launch Trailer into a 45-second vertical
// Short (1080x1920), hooked the viewer with the dirt-bike jump over the
// elevated train and the pink-smoke biplane over the beach, then pitched
// make.fun on screen ("Make clips with AI and earn money on make.fun").
//
// Cut plan (all from the Launch Trailer, verified frame by frame):
//   0:00 bike jump (0:47) · 0:05 biplane (0:53) · 0:10 Lucia & Jason (0:38)
//   0:16 lowrider (0:18) · 0:22 pool fight (1:13) · 0:28 helicopter (0:28)
//   0:34 pitch: "The Keys" sign + boat fix with the make.fun call to action.
// The clip is uploaded to YouTube as a public Short; VIDEO.json names it.
// This program only copies VIDEO.json from the repository root to
// /output/VIDEO.json, where the gate reads it. Nothing it writes about
// the video is scored: the house reads the video's views from YouTube.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
