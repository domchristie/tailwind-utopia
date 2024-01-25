// Generate all possible pairs from the given array (including reverse pairs)
function pair (array) {
  return array.map((v, i) => array.slice(i + 1).map(w => [[v, w], [w, v]])).flat(2)
}

function calcValue (min, max) {
  return (typeof min === 'number' && typeof max === 'number')
    ? `calc(${(min / 16).toFixed(2)}rem + ${(max - min).toFixed(2)} * var(--fluid-bp))`
    : `calc(((${min} / 16) * 1rem) + (${max} - ${min}) * var(--fluid-bp))`
}

module.exports = { pair, calcValue }
