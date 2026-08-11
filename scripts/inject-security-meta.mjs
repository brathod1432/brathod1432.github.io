// Post-build: inject security meta tags into every exported HTML file.
// GitHub Pages can't set HTTP headers, so we do what's possible via <meta>.
// Note: X-Frame-Options / X-Content-Type-Options and CSP frame-ancestors
// require real HTTP headers and cannot be set this way — documented in README.
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const OUT = join(process.cwd(), "out");

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "img-src 'self' data: https:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' 'unsafe-inline'",
  "connect-src 'self' https://api.web3forms.com https://plausible.io",
  "form-action 'self' https://api.web3forms.com",
  // NOTE: frame-ancestors is intentionally omitted — it is ignored (and logs a
  // console error) when set via <meta>; it only works as a real HTTP header,
  // which GitHub Pages cannot set. Documented in README.
  "upgrade-insecure-requests",
].join("; ");

const META = [
  `<meta http-equiv="Content-Security-Policy" content="${csp}">`,
  `<meta name="referrer" content="strict-origin-when-cross-origin">`,
].join("");

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* htmlFiles(full);
    else if (entry.name.endsWith(".html")) yield full;
  }
}

let count = 0;
for await (const file of htmlFiles(OUT)) {
  let html = await readFile(file, "utf8");
  if (html.includes("Content-Security-Policy")) continue;
  if (html.includes("<head>")) {
    html = html.replace("<head>", `<head>${META}`);
    await writeFile(file, html, "utf8");
    count++;
  }
}
console.log(`[security-meta] injected into ${count} HTML file(s)`);
