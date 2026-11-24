import { mkdirSync, writeFileSync } from "node:fs";

// One number, digits only: an honest count of open browser tabs.
// 1487 tabs: years of never closing a tab, session restore after session
// restore, research rabbit holes stacked on research rabbit holes.
const LINE = "1487";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
