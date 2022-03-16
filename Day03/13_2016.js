https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const date = new Date(`2016-${a}-${b}`);
    return week[date.getDay()];
}

//new Date(year, month, date, hours, minutes, seconds, ms)
//=> 주어진 인수를 조합해 만들 수 있는 날짜가 저장된 객체가 반환됨. 첫 번째와 두 번째 인수만 필수값이다.

//getDay() 메서드는 지정된 날짜의 요일(0~6)을 반환 (일요일은 0, 월요일은 1)


//other solution
function getDayName(a,b){
    var answer = "";
  var MONTH = [31,29,31,30,31,30,31,31,30,31,30,31];
  var WEEK = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
  var sum = 0;
    for(var i =1; i<a; i++){
    sum+=MONTH[i-1];
  }
  answer = WEEK[(sum+b-1)%7];
  // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}