// 출처 : http://tryhelloworld.co.kr/challenge_codes/126
// def average(list):
// 함수를 완성해서 매개변수 list의 평균값을 return하도록 만들어 보세요.
// 어떠한 크기의 list가 와도 평균값을 구할 수 있어야 합니다.

function average(array){
	var sum = 0;
  for (var item in array){
  		sum = sum + array[item];
  	}
	var average = sum / array.length;
  return average;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4]
console.log("평균값 : " + average(testArray));
