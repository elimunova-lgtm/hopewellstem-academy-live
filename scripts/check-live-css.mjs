const base = "https://hopewellstem.vercel.app/";
const r = await fetch(base);
const html = await r.text();
const links = [...html.matchAll(/"([^"]+\.css[^"]*)"/g)].map((m) => m[1]);
console.log("status:", r.status, "html bytes:", html.length);
console.log("css links:", links.slice(0, 3).join(" | "));
for (const link of links.slice(0, 2)) {
  const url = link.startsWith("http") ? link : base.replace(/\/$/, "") + link;
  const res = await fetch(url);
  const css = await res.text();
  console.log(
    "css:", link.slice(0, 50), "->", res.status, css.length, "bytes",
    "| .section:", css.includes(".section"),
    "| .btn-gold:", css.includes(".btn-gold"),
    "| .container-page:", css.includes(".container-page"),
  );
}