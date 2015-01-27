//
function isPrime(num) {
  // check if num is in prime cache
  // create cache if it is not
  if (!isPrime.results) isPrime.results = {};
  // return value if found in results
  if (isPrime.results[num] != null) return isPrime.results[num];



  // handle edge cases
  // var prime;
  // if (num === 1) return prime = false
  var result = num !=1
  // iterate through numbers
  for (var i = 2; i < num; i++){
    if (num % i == 0) {
      // set result to false if it is divisible
      result = false;
      // break iteration
      break;

    }
  }
  // return isPrime cache = result
  return isPrime.results[num] = result
}
