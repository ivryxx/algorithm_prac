https://programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
    let answer = '';
    const array = s.split(' ');
    for(let i = 0; i<array.length; i++){
        for(let j=0; j< array[i].length; j++){
            answer += j%2 === 0? array[i][j].toUpperCase() : array[i][j].toLowerCase();
        }
        if(i === array.length-1)break;
        answer+=' ';
    }
    return answer;
}