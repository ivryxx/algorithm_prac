//programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) answer.push(arr[i]);
  }
  return answer;
}

// filter를 이용한 풀이
return arr.filter((val, index) => val != arr[index + 1]);
