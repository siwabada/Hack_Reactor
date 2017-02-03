
// 해당 방문자의 방문 횟수에 따른 인사말 변경 로직

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';
  var names = Object.keys(customerData);
  if(names.indexOf(firstName) === -1){ 
    greeting = 'Welcome! Is this your first time?';
  }else if(customerData[firstName].visits === 1){
    greeting = 'Welcome back, '+firstName+'! We\'re glad you liked us the first time!';
  }else{
    greeting = 'Welcome back, '+firstName+'! So glad to see you again!';
  }
  return greeting;
}
