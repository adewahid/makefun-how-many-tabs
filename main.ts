import { mkdirSync, writeFileSync } from "node:fs";

// One number, digits only: an honest count of open browser tabs.
// 1487 tabs: years of never closing a tab, session restore after session
// restore, research rabbit holes stacked on research rabbit holes.
const OPEN_TABS = 1487;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, String(OPEN_TABS), "utf8");
