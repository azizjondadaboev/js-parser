const assert = require('node:assert');

const parse = str => {
  const match = str.match(/^([@|#])([\w]+)(:([><=!{1,2}]*?)?([\w-]+))?$/);

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
  try {
    // assert.deepEqual({ type: "#", field: "very_very_very_very_very_very_vert_very_very_very_large_tag", condition: ">=", value: 10101010101010101010101010010101010010101022222222209292092920912092201201920192 }, parse("#very_very_very_very_very_very_vert_very_very_very_large_tag:>=10101010101010101010101010010101010010101022222222209292092920912092201201920192"));
    assert.deepEqual({ type: "#", field: "office", condition: ">=", value: 101011 }, parse("#office:>=101011"));
  } catch (e) {
    throw e;
  }
}

console.log("all =", (performance.now() - all) / 1000, "seconds");
