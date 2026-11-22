import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// News image entry: the program's only job is to place the finished
// front page (entry.png, drawn in this session) into the output dir.
// Deterministic by construction: the same bytes in, the same bytes out.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? join(here, "out");
const source = join(here, "entry.png");

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository");
}

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, "entry.png"));
