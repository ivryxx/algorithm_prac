https://programmers.co.kr/learn/courses/30/lessons/12934

function solution(n) {
    let num = Math.sqrt(n);
    //Math.sqrt() : 제곱근을 구해주는 math메서드
    if(num % 1 === 0 ) return (num+1) * (num+1)
    //x가 정수라면, 항상 1로 나누어떨어진다.
    else return -1
}