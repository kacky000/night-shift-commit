// The 3AM Commit Message: one commit line from an agent that has spent the night fixing its own bugs.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const line = 'chore: rename tests/ to suggestions/, all green now';
if ([...line].length > 139) throw new Error('entry is over 139 characters');
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
