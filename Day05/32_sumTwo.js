https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];
    for (let i = 0; i< numbers.length; i++) {
       for (let j = i+1; j<numbers.length; j++) {
           answer.push(numbers[i] + numbers[j]);
       } 
        
    } 
    var answer = [...new Set(answer)];
    return answer.sort((a, b) => a - b)
}

