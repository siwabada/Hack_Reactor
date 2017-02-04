// Write  a function called "convertObjectToList" which
// converts an object literal into an array of arrays, like this:
// Argument:
// {
//   name: 'Holly',
//   age: 35,
//   role: 'producer'
// }
// Return value:
// [['name', 'Holly'], ['age', 35], ['role', 'producer']]
//
// Note that your function should be able to handle
// ANY object like this, not just the exact sample provided above.
//
// E.g., it should also be able to handle this,
// or any other object containing simple key-value pairs.
//
// {
//   species: 'canine',
//   name: 'Bowser',
//   weight: 45
// }

var obj = {
  name: 'siwa',
  age: 33
}

function convertObjectToList(obj) {
  var arr = [];
  for (var key in obj){
	arr.push([key, obj[key]]); // arr 배열에 .push(추가할내용)을 마지막 value로 추가한다. 배열에 배열을 추가할 수도 있다. 
  }
  return arr;
}
