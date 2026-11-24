// Warning Label for Humans: One Line, Big Laugh
// Writes one single-line safety warning label (max 160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: This human makes permanent decisions at 3 a.m., backs up every password to 'I'll remember it,' and will click 'I agree' on anything — including this.";

if ([...line].length > 160) {
  throw new Error(`warning label too long: ${[...line].length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
