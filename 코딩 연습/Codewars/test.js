let triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

var recoverSecret = function(triplets) {
  for(let [first] of triplets) {
    console.log('first : ', first)
    if (triplets.every(tuple => {
      console.log('tuple : ', tuple, tuple.indexOf(first))
      return tuple.indexOf(first) <= 0
    })) {
      triplets.filter(([item]) => item == first).forEach(tuple => tuple.shift());
      console.log('triplets : ', triplets)
      return first + recoverSecret(triplets.filter(tuple => tuple.length > 0));
    }
  }
  return '';
}

let answer = recoverSecret(triplets)
console.log(answer)