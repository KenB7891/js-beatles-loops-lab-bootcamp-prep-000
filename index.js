function theBeatlesPlay(array1,array2) {
  var myArray = []
  
  for (var i = 0; i < array1.length; i++) {
    myArray[i] = `${array1[i]} plays ${array2[i]}`
  }
  
  return myArray
  
}

function johnLennonFacts(array) {
  var i = 0
  var myArray = []
  while (i < array.length) {
    myArray[i] = `${array[i]}!!!`
    i++
  }
  
  return myArray
}

function iLoveTheBeatles(n) {
  myArray = []
  vay x = n
  do {
    myArray[0] = "I love the Beatles"
    myArray[n] = "I love the Beatles"
  } while (n < 15 & n > 0)
  
  return myArray
}