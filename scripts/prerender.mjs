// After the build, render the app to HTML and write it into dist/index.html.
// This puts the real content in the page for search engines and link previews.
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const htmlPath = path.resolve("dist/index.html");
const serverEntry = pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href;

const { render } = await import(serverEntry);
const template = readFileSync(htmlPath, "utf8");
const marker = '<div id="root"></div>';

if (!template.includes(marker)) {
  throw new Error(`Prerender failed: ${marker} was not found in dist/index.html`);
}

writeFileSync(htmlPath, template.replace(marker, `<div id="root">${render()}</div>`));
console.log("Prerendered dist/index.html");
