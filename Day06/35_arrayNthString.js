//programmers.co.kr/learn/courses/30/lessons/12915

https: function solution(strings, n) {
  // 문자열의 n번째 글자를 기준으로 오름차순으로 정렬
  strings.sort(function (a, b) {
    if (a[n] !== b[n]) {
      return a[n].localeCompare(b[n]);

      // 단, 문자열의 n번째 글자가 같은 경우에는 전체 문자열을 기준으로 사전 순으로 정렬
    } else {
      return a.localeCompare(b);
    }
  });

  return strings;
}