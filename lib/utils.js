// Generate all possible pairs from the given array (including reverse pairs)
function pair (array) {
  const forwardPairs = array.map((v, i) => array.slice(i + 1).map(w => [v, w])).flat()
  const reversePairs = array.map((v, i) => array.slice(i + 1).map(w => [w, v])).flat()
  const sortedReversePairs = reversePairs.sort((a, b) => array.indexOf(a[0]) - array.indexOf(b[0]))

  return forwardPairs.concat(sortedReversePairs);
}

function calcValue (min, max) {
  return (typeof min === 'number' && typeof max === 'number')
    ? `calc(${(min / 16).toFixed(2)}rem + ${(max - min).toFixed(2)} * var(--fluid-bp))`
    : `calc(((${min} / 16) * 1rem) + (${max} - ${min}) * var(--fluid-bp))`
}

module.exports = { pair, calcValue }
