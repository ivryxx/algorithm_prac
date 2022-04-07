https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
     return s.split("").map(e => {
          if(" " == e) return e;
           return e.toUpperCase().charCodeAt(0) + n > 90
            ? String.fromCharCode(e.charCodeAt(0)+n-26)
             : String.fromCharCode(e.charCodeAt(0)+n); 
            }).join(""); 
        }

