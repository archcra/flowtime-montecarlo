
// ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function directSamplingA(trials){
  console.log('trials: ', trials)
  
  var hits = 0;
  for (var i=0; i< trials; i++){
    var x = getRandomArbitrary(-1,1);
    var y = getRandomArbitrary(-1,1);
    if(x**2 + y**2 < 1.0){
      hits +=1;
    }
  }
  return 4.0 * hits/ trials;
}
