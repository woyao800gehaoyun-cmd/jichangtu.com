import { rm } from 'node:fs/promises';

for (const directory of ['../_site', '../dist']) {
  await rm(new URL(directory, import.meta.url), { recursive: true, force: true });
}
console.log('Cleaned static output directories.');
