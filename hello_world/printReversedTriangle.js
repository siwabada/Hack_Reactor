// printReversedTriangle 메소드는 양의 정수 num을 매개변수로 입력받습니다.
// 다음을 참고해 *(별)로 높이가 num인 삼각형을 문자열로 리턴하는 printReversedTriangle 메소드를 완성하세요
//
// 높이(num)가 3일때 다음과 같은 문자열을 리턴하면 됩니다.
//
// ***
// **
// *


function printReversedTriangle(num) {
  var result = ''
  for (var i = num; i > 0; i--){
  	for(var j = 0; j < i; j++){
      result += '*';
		}
    result += '\n'; //string에 줄바꿈 추가
  }
  return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " +'\n'+ printReversedTriangle(3));
