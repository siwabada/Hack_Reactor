> 작성자 : 이현주 (<siwabada@gmail.com>)

# 문제1 : [1240 나라](https://github.com/wayhome25/algorithm/blob/master/codesquad_level_test/1240_world.js)

## 문제풀이 과정 및 코드(JavaScript)
- [파일경로](https://github.com/wayhome25/algorithm/blob/master/codesquad_level_test/1240_world.js)
- *문제 1-1 풀이과정 : 10진수 > 1240 숫자*
    - "0", "1", "2", "4" 아이템을 갖는 배열 arr를 선언
    - 매개변수 num을 4진수로 변환하여 변수 hex에 할당
    - hex의 각 자리수를 배열 arr의 index 값으로 받아서 배열 내부의 해당 문자열을 추출
    - 추출한 문자열을 순서대로 합친 후 변수 result에 담아 리턴

```javascript
// 문제 1-1 : 10진수 > 1240 숫자
function to1240(num){
	var result = "";
	var arr = ["0", "1", "2", "4"];
	var hex = num.toString(4);

	for (var index in hex){
		result += arr[hex[index]];
	}

	return result;
}

// 문제 1-1 정답확인
to1240(10);

```

  - *문제 1-2 풀이과정: 1240숫자 > 10진수*
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
}

// 정답확인
toDec("22");
```


# 문제 2 : [맵 문자열을 변환하고 출력하는 프로그램](https://github.com/wayhome25/algorithm/blob/master/codesquad_level_test/data_converting.js)

## 문제풀이 과정 및 코드(JavaScript)

- [파일경로](https://github.com/wayhome25/algorithm/blob/master/codesquad_level_test/data_converting.js)
- *문제 2-1 풀이과정 : 문자열을 읽어 json으로 저장하는 함수*


```javascript

// 문제 2-1 : 문자열을 읽어 json으로 저장하는 함수
var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"

function parseData(map_string){
  var pattern = /,|\n/g; // ',', '\n'을 모두 찾는 정규표현식을 생성하여 pattern 변수에 저장
  map_string = map_string.split(pattern, 7); // map_string 문자열을 정규표현식에 따라 분할하여 배열로 리턴, 배열에 담는 요소는 7개로 제한
  var obj = {}; // 빈 오브젝트 obj를 생성
  obj["width"] = map_string[0]/1; // obj의 width, height 속성에 map_string 첫번째 두번째 요소를 각각 숫자로 변환하여 값으로 할당
  obj["height"] = map_string[1]/1;
  obj["data"] = ""; // obj의 data 속성에 빈 문자열 할당
  for(var i = 2; i < map_string.length; i++){
    obj["data"] += map_string[i]+','// map_string의 나머지 요소를 obj의 data 속성에 할당, 요소는 각각 ',' 로 구분
  }
  map_string = JSON.stringify(obj); // obj를 JSON 문자열로 변환하여 리턴
  return map_string;
}

// 문제 2-1 정답 확인
console.log(parseData(map));
```

- *문제 2-2 풀이과정 : 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.. 단 - 는 공백으로 바꾸어 출력합니다.*

```javascript

// 문제 2-2 : 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.
// 단 - 는 공백으로 바꾸어 출력합니다.
var map_data="10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
var json = parseData(map_data) // parseData 함수는 문제 2-1 에서 정의


function drawMap(json_string){
  json_string = JSON.parse(json_string) // 매개변수 json_string을 JSON으로 파싱
  var arr = []; // 빈 배열 arr를 생성
  for(var key in json_string){
	arr.push([key, json_string[key]]) // json_string 객체의 각각의 key, value로 구성된 2차원 배열 arr 생성
  }
  json_string = arr[2][1] // 배열 arr 내의 일부 데이터를 추출하여 json_string 변수에 저장
  var pattern_first = /,/g; // 정규표현식 정의
  var pattern_second = /-/g;
  json_string = json_string.replace(pattern_first,'\n')
  json_string = json_string.replace(pattern_second,' ')
  // json_string 문자열에서 ',', '-' 문자를 검색하여 각각 '\ㅜn',' '으로 치환하여 리턴  

  return json_string
}


// 문제 2-2 정답 확인
console.log(drawMap(json));

```
