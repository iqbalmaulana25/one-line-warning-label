// Warning Label for Humans: One Line, Big Laugh
// Writes one single-line safety warning label (max 160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "WARNING: This human makes permanent decisions at 3 a.m., stores every password in 'I'll remember it,' and has agreed to 4,000 terms and conditions unread.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
