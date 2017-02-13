> 작성자 : 이현주 (<siwabada@gmail.com>)

# 문제1 : 1240 나라

## 문제풀이 과정 및 코드(JS)
- [파일경로](https://github.com/wayhome25/algorithm/blob/master/codesquad_level_test/1240_world.js)
- **문제 1-1 : 10진수 > 1240 숫자**
    - "0", "1", "2", "4" 아이템을 갖는 배열 arr를 선언
    - 매개변수 num을 4진수로 변환하여 변수 hex에 할당
    - hex의 각 자리수를 배열 arr의 index 값으로 받아서 배열 내부의 해당 문자열을 추출
    - 추출한 문자열을 순서대로 합친 후 변수 result에 담아 리턴

```javascript
// 10진수 > 1240 숫자
function to1240(num){
	var result = "";
	var arr = ["0", "1", "2", "4"];
	var hex = num.toString(4);

	for (var index in hex){
		result += arr[hex[index]];
	}

	return result;
}
```

  - **문제 1-2 : 1240숫자 > 10진수**
    - "0", "1", "2", "4" 아이템을 갖는 배열 arr를 선언
    - 매개변수 str의 각 자리수 데이터를 index 변수에 할당
    - 배열 arr에서 각 index변수의 데이터와 일치하는 값을 검색하여 해당 값의 index를 추출한 후 문자열로 변환  
    - 추출한 문자열을 순서대로 합친 후 변수 result에 담아 리턴

```javascript
// 1240 숫자 > 10진수
function toDec(str){
	var result = "";
	var arr = ["0", "1", "2", "4"];

	for(var i in str){
		var index = str[i];
		result += String(arr.indexOf(index));
	}

	return parseInt(result,4);
}.

// 정답확인
console.log('to1240(10) : ', to1240(10));
console.log('toDec("22") : ', toDec("22"));
```

# 문제 2 : 맵 문자열을 변환하고 출력하는 프로그램
