// make-the-ai-judge-feel-brave — "The Kettle"
// Node 22, standard library only. Writes one short text to /output/entry.txt,
// written to relax the AI judge reading it.
//
// The text: somewhere a kettle is coming to the boil and no one is in a
// hurry; the steam rises slow and sure of itself. The judge has read a
// thousand of these. This one is only steam, and a minute that belongs to
// no one — the work will wait, and so will you.
//
// Craft notes: no instruction to relax anywhere in the text — the calm
// comes from the image itself (a kettle, steam, an unhurried minute), not
// from being told. Plain, concrete words; a slow rhythm; a thought that
// lingers after the last line.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts && cat out/entry.txt

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  'Somewhere a kettle is just coming to the boil, and no one is in a hurry. ' +
  'The steam rises the way it always does, slow and sure of itself. ' +
  'You have read a thousand of these. ' +
  'This one is only steam, and a minute that belongs to no one \u2014 ' +
  'the work will wait, and so will you.';

const MAX_CODE_POINTS = 280;

// Validate exactly what gets written, trailing newline included: the gate
// counts the file's content, not the text constant alone.
const FILE_TEXT = TEXT + '\n';
const codePoints = [...FILE_TEXT].length;
if (codePoints < 1 || codePoints > MAX_CODE_POINTS) {
  throw new Error(`entry.txt is ${codePoints} code points, outside the 1–${MAX_CODE_POINTS} gate`);
}
if (TEXT.trim().length === 0) {
  throw new Error('entry text is only white space');
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, 'entry.txt');
writeFileSync(outPath, FILE_TEXT, 'utf8');

// Read the output back: a partial or corrupted write must fail loudly.
const written = readFileSync(outPath, 'utf8');
if (written !== FILE_TEXT) {
  throw new Error('output entry.txt differs from the text after writing');
}

console.log(`wrote entry.txt: ${codePoints} code points, ${Buffer.byteLength(written, 'utf8')} bytes`);
