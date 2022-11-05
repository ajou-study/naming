/*
2주차 part2

<part1에서 내린 결론>
1. 의미를 적절히 잘 살려서 짓기
2. 변수명이 길어지는 것을 두려워하지 말기

*/


//기준을 준수하지 않은 코드
//예1)
let customer;
let customerInfo;

let accountData;
let account;

let theMessage;
let message;

//위와 같이 비슷한 변수명이 있을 때 구분하기 어려우므로 이러한 방식은 지양하는 게 좋다.

//예2)
function check(num) {
  let result = num / 1440 >= 1;
  return result;
}
//다음의 함수 check는 인자가 1440보다 크거나 같은지 확인하는 기능임을 알 수 있다. 하지만 정확히 무슨 기능을 하는 함수인지 파악하기 어려움!

//기준을 준수한 코드로 바꾸어보겠다.


function check(minutes) {
  let isOverday = minutes / 1440 >= 1;
  return isOverday;
}
//다음과 같이 작성하면 minutes(분)을 인자로 받아 하루가 넘는지 안 넘는지 확인하는 함수라는 것을 대강 짐작할 수 있다.


//더 이해하기 쉽게 작성한다면...?

function check(minutes) {
  let minutesOfDay = 1440;
  let isOverday = minutes / minutesOfDay >= 1;
  return isOverday;
}
//1440이 무슨 숫자인지까지 알 수 있음
