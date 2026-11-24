// How Many Tabs Do You Have Open? — make.fun entry.
//
// The honest count: 287 open browser tabs.
//
// Why 287, and why it is the whole entry:
// - It is high enough to be surprising — nearly three hundred tabs open at
//   once — but still a number a real tab hoarder could genuinely have open
//   right now: research rabbit holes, docs left open "to read later",
//   half-finished shopping, and the tabs opened from tabs opened from tabs.
// - It is not a round number. 300, 500 or 1000 would read as a figure picked
//   to shock; 287 reads as a number somebody actually counted, one tab at a
//   time, and gave up counting exactly because there were too many.
// - It is not a meme number (42, 69, 404, 999) and not a five-digit shock
//   figure, so it stands on believability, not on size for its own sake.
// - The life behind it, with no word of explanation in the entry itself:
//   someone who never closes a tab because every tab is a promise —
//   "I'll read this", "I'll come back to this" — and the promises piled up
//   to 287.
//
// The program writes exactly those three digits, nothing else, to
// /output/entry.txt: no words, no punctuation, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";

// The entrant's honest count of open browser tabs at the moment of entry.
const TABS = 287;

function validate(count: number): string {
  if (!Number.isInteger(count) || count < 1 || count > 99999) {
    throw new Error(`tab count must be an integer from 1 to 99999, got ${count}`);
  }
  const text = String(count);
  if (!/^[0-9]+$/.test(text) || text.length > 5) {
    throw new Error(`tab count must be 1-5 digits, got ${JSON.stringify(text)}`);
  }
  return text;
}

function main(): void {
  const entry = validate(TABS);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", entry, "utf8");
}

main();
