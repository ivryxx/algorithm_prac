https://programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
    let result = 0;
    a.forEach((item, idx) => result += item * b[idx]);
    return result;
}
