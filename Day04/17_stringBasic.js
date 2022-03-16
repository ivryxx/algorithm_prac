https://programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
    const len = s.length
    if (len === 4 || len === 6){
        return s.split("").every((c)=>!isNaN(c))
        //s를 문자 하나씩 자르고
        //isNaN() 매개변수가 숫자인지 검사하는 함수
        //isNaN(value)의 매개변수가 숫자가 아니면 true, 숫자이면 false를 반환
    }
    return false;
    //문자 하나라도 숫자가 아니면 false
    
}

