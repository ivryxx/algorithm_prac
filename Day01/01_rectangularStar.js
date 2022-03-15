function solution(month, day){
  let theday=""
  theday = new Date(2022, month-1, day);

  let answer = new Date(theday.setDate(theday.getDate() + 98));
  let mymonth = answer.getMonth()+1;
  let myday = answer.getDate();

  let final_day = mymonth + '월 ' + myday + '일'

  return `"${final_day}"`
}
console.log(solution(1,18))