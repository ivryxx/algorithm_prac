https://programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    for(i=0; i<arr.length; i++) {
      if(arr[i] % divisor == 0) {
        answer.push(arr[i]);
      }
    }
    if(answer.length == 0) {
      answer.push(-1);
    }
    answer.sort((a,b) => a - b);
    return answer;
}

//arr의 요소를 divisor로 나누어 떨어지면 그 요소를 answer에 넣음.
//만약 나누어 떨어지는 요소가 하나도 없다면 -1을 반환하는 조건을 추가
//answer을 오름차순으로 정렬: sort((a, b)=>a-b)


//other solution//
function solution(arr, divisor) {
    var answer = arr.filter(v => v%divisor == 0);
    return answer.length == 0 ? [-1] : answer.sort((a,b) => a-b);
}