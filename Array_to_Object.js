//
// Write a function called "transformEmployeeData" that
// transforms some employee data from one format to another.
//
// var array=
// [
//     [ ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk'] ],
//     [ ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager'] ]
// ]
// Given that input, the return value should look like this:
// var array=
// [
//     {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
//     {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
// ]
//


function transformEmployeeData(array) {
  for(i=0; i<array.length; i++){
    var obj = {};
  	for(k=0; k<array[i].length; k++){
  		obj[array[i][k][0]] = array[i][k][1];
  	}
    array[i] = obj;
  }
return array;
}
