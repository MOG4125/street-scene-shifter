import { mkdir, readFile, copyFile, writeFile, access } from "node:fs/promises";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { GhettoslopScene } from "../src/components/ghettoslop-scene";

// Export only portable static files. No server, CDN proxy or framework runtime required.
await mkdir("docs/assets", { recursive: true });
const streetSource = process.argv[2];
if (streetSource) await copyFile(streetSource, "docs/assets/hood.jpeg");
try {
  await access("docs/assets/hood.jpeg");
} catch {
  throw new Error("Supply the original street image as the first argument on the initial export.");
}
await copyFile("src/assets/gang-cutout.png", "docs/assets/gang.png");
const css = await readFile("src/styles.css", "utf8");
const marker = "/* GHETTOSLOP static scene: shared with the GitHub Pages export. */";
const start = css.indexOf(marker);
if (start < 0) throw new Error("Static scene stylesheet marker is missing.");
await writeFile("docs/scene.css", css.slice(start));
const markup = renderToStaticMarkup(createElement(GhettoslopScene, {
  hoodSrc: "./assets/hood.jpeg", gangSrc: "./assets/gang.png",
}));
await writeFile("docs/index.html", `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>GHETTOSLOP</title>
<meta name="description" content="GHETTOSLOP. Contact us at ghettoslop@xtinct.sbs.">
<meta property="og:title" content="GHETTOSLOP">
<meta property="og:description" content="GHETTOSLOP. Contact us at ghettoslop@xtinct.sbs.">
<meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik+Wet+Paint&display=swap">
<link rel="stylesheet" href="./scene.css">
</head><body>${markup}</body></html>`);
await writeFile("docs/.nojekyll", "");
console.log("GitHub Pages website exported to docs/.");