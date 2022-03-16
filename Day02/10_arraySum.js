https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
    var answer = []; 
    for(var i=0; i<arr1.length; i++) { 
        answer[i] = []; 
        //첫번째 배열의 크기 만큼 반복문을 돌리고, answer에 i번째 행을 추가한다.
        for(var j=0; j<arr1[i].length; j++) { 
            answer[i][j] = arr1[i][j] + arr2[i][j]; 
            //행의 개수만큼 반복문을 돌리고, 같은 행렬끼리 덧셈한다.
        } 
    } 
    return answer; 
}