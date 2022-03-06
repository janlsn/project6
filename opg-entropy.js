"use strict";

function Entropy10(x, y)
{
  const entropy = {
  permutations: x**y,
  entropy10: parseFloat(Math.log10(x**y).toFixed(2))
  };
  return entropy;
}

console.log(Entropy10(4, 5));