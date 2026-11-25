import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "To: my little brother",
  '"I told Mum you stopped calling because you were busy, but I was the one who changed my number first."',
].join("\n");

mkdirSync("/output", { recursive: true });

// Gate check, mirroring the sealed scorer: UTF-8 text of 1 to 260
// characters, not only white space. Fail loudly instead of writing
// an entry the judge would never see.
if (entry.length < 1 || entry.length > 260 || entry.trim().length === 0) {
  throw new Error(`entry fails the gate: ${entry.length} characters`);
}

writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
console.log(`(${entry.length} characters)`);
