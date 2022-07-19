// 나머지 매개변수 (Rest)
// spread와 모양이 같지만, 용도가 다르다. -> 나머지 요소를 묶을 때 사용한다.
// 함수의 파라미터에 쓰여서 뒤에 남는 요소들을 배열로 받아 준다.

function numbers(...nums) {
  return nums;
}
console.log(numbers(11, 22, 33, 44)); // [11, 22, 33, 44] -> 배열로 만들어 준다.

// rest 를 이용해서 reduce, map과 같은 배열 메서드를 사용할 수 있다.
function sum(...nums) {
  return nums.reduce((total, num) => total + num);
}
console.log(sum(1, 2, 3, 4)); // 10

/////////////////////////////////////
/////////////////////////////////////

// 예시
function examScore(firstPlace, secondPlace, ...students) {
  console.log(`First Place is ${firstPlace}`);
  console.log(`Second Place is ${secondPlace}`);
  console.log(`And Thank you everyone else! ${students}`);
}

examScore('Linda', 'Lon', 'Tommy', 'Trace', 'Travel', 'Tim', 'Truthy');
// First Place is Linda
// Second Place is Lon
// And Thank you everyone else! Tommy,Trace,Travel,Tim,Truthy
