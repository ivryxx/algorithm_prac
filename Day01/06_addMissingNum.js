https://programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
    var answer = 0;
    for(let i=0; i<10; i++){
        if(!numbers.includes(i)) answer += i; 
        // !는 논리 부정 연산자=> 피연산자의 true/false를 변환해서 반환한다.
        // numbers가 i를 포함하지 않는다면, answer에 그 i 값들을 더해라
    } 
    console.log(answer);
}

//other solution//

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
