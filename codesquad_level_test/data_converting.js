// 문제 2-1 : 문자열을 읽어 json으로 저장하는 함수
var map = "10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"

function parseData(map_string){
  var pattern = /,|\n/g; // ',', '\n'을 모두 찾는 정규표현식을 생성하여 pattern 변수에 담는다.
  map_string = map_string.split(pattern, 7); // map_string 문자열을 정규표현식에 따라 분할하여 배열에 담는다. 배열에 담는 요소는 7개로 제한한다.
  var obj = {}; // 빈 오브젝트를 생성한다.
  obj["width"] = map_string[0]/1; // obj의 width, height 속성에 map_string 첫번째 두번째 요소를 각각 숫자로 변환하여 담는다.
  obj["height"] = map_string[1]/1;
  obj["data"] = ""; // obj의 data 속성에 빈 문자열을 담는다.
  for(var i = 2; i < map_string.length; i++){ // map_string의 나머지 요소를 obj의 data 속성에 담는다. 요소는 각각 , 로 구분한다.
    obj["data"] += map_string[i]+','
  }
  map_string = JSON.stringify(obj); // obj를 JSON 문자열로 변환
  
  return map_string;
}

// 문제 2-1 정답 확인
console.log(parseData(map));


////////////////////////////////////////////////////////////////////////


// 문제 2-2 : 1의 json을 2차원 배열로 변환하고 해달 배열을 화면에 출력하는 함수를 작성하세요.. 단 - 는 공백으로 바꾸어 출력합니다.
var map_data="10,5\n++++++++++\n+-P------+\n+--------+\n+-----o--+\n++++++++++\n"
var json = parseData(map_data)


function drawMap(json_string){
  json_string = JSON.parse(json_string)
  var arr = [];
  for(var key in json_string){
	arr.push([key, json_string[key]]) // json_string 오브젝트의 각각의 key, value로 구성된 2차원 배열 arr 생성
  }
  json_string = arr[2][1] //
  var pattern_first = /,/g;
  var pattern_second = /-/g;
  json_string = json_string.replace(pattern_first,'\n')
  json_string = json_string.replace(pattern_second,' ')

  return json_string
}


// 문제 2-2 정답 확인
console.log(drawMap(json));
