https://programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) { return Number(n.toString().split('').sort().reverse().join('')); }




//toString() - 문자타입으로 변환
//split() - 문자열을 구분자로 잘라서 배열로 저장
//sort() - 배열을 정렬
//reverse() - 원소 순서를 반대로
//join() - 배열 합치기
//Number() - 숫자타입으로 변환