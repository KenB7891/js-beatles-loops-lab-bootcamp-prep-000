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