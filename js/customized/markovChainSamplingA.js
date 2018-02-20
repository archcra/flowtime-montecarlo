// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function markovChainSamplingA(trials, delta) {
  console.log('trials: ', trials, 'delta: ', delta)

  var hits = 0;
  var x = 1.0,
    y = 1.0;

  for (var i = 0; i < trials; i++) {
    var delX = getRandomArbitrary(-delta, delta);
    var delY = getRandomArbitrary(-delta, delta);

    if (Math.abs(x + delX) < 1.0 && Math.abs(y + delY) < 1.0) {
      x = x + delX;
      y = y + delY;
    }
    if (x ** 2 + y ** 2 < 1.0) {
      hits += 1;
    }
  }
  console.log('hits: ', hits)
  return 4.0 * hits / trials;
}
