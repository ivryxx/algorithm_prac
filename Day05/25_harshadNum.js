https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    let answer = true;
    let arr = String(x).split('');
    //x를 문자열로 변환하여 한글자씩 나눔
 
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        sum += Number(arr[i]); 
        //자릿수의 합을 sum으로 지정
    }
 
    if (!(x % sum === 0)) {
        answer = false;
        //x가 sum으로 나누어떨어지지 않으면 false
    }
 
    return answer;
}