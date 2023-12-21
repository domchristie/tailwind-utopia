// Generate all possible pairs from the given array (including reverse pairs)
function pair (array) {
  return (array.flatMap((v, i) => array.slice(i + 1).flatMap(w => [[v, w], [w, v]])))
    .sort((a, b) => array.indexOf(a[0]) - array.indexOf(b[0]))
}

function calcValue (min, max) {
  return (typeof min === 'number' && typeof max === 'number')
    ? `calc(${(min / 16).toFixed(2)}rem + ${(max - min).toFixed(2)} * var(--fluid-bp))`
    : `calc(((${min} / 16) * 1rem) + (${max} - ${min}) * var(--fluid-bp))`
}

module.exports = { pair, calcValue }
