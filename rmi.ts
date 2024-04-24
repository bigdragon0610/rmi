import $ from "https://deno.land/x/dax@0.39.2/mod.ts";

const result = await $`docker images`.text();
const ids = [];
for (const line of result.split("\n")) {
  if (line.includes("none")) {
    ids.push(line.split(/\s+/)[2]);
  }
}

if (ids.length !== 0) {
  await $`docker rmi ${ids}`;
}
