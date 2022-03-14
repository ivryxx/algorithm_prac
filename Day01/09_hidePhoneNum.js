https://programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const len = phone_number.length - 4;  
    // phone_number 문자열의 뒤에서부터 4자리 지점을 기준으로 하도록 len을 선언
    return "*".repeat(len) + phone_number.substring(len);
}

//뒤 4자리를 기준으로 앞의 번호들을 repeat를 사용하여 *로 처리


// substring() : 시작문자부터 종료문자까지 잘라내겠다
//문자열.substring( 시작문자 index값, 종료문자 index값 )

// 종료문자는 생략이 가능하며, 생략할 경우 문자열의 끝까지로 인식

///  *주의! 종료위치의 -1까지 잘라냄
///  Ex. abcdef를 substring(2, 4) 하면 “cd”
//       012345 


//other solution//
function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  //함수를 완성해주세요

  return result;
}