const parse = str => {
  const match = str.match(/^([@#])([a-z]+)(:([><=!]*?)?(\d+))?$/);

  if (!match) return null;

  return {
    type: match[1],
    field: match[2],
    condition: match[4] || "=",
    value: match[5] || null,
  };
};

const all = performance.now();

for (let i = 0; i < 10000000; i++) {
  const expectedObjectText = JSON.stringify({ type: "#", field: "office", condition: ">=", value: "101011" });
  const parsedText = JSON.stringify(parse("#office:>=101011"));

  if (expectedObjectText !== parsedText) {
    console.log("Failed test", i, expectedObjectText, parsedText);
    break;
  }
}

console.log("all =", (performance.now() - all) / 1000, "seconds");
