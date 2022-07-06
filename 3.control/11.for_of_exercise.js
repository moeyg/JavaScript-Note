// 객체를 배열로 만들어 평균값 내기

const testScore = {
  Olivia: 70,
  Lily: 95,
  Grace: 32,
  Zoe: 100,
  Liam: 25,
  Oliver: 67,
  Jasper: 88,
  Thomas: 95,
  July: 43,
  Lucas: 82,
  James: 100,
};

let totalScore = 0;
let scores = Object.values(testScore);

for (let score of scores) {
  totalScore += score;
}
console.log(`Total Score is ${totalScore}`);

let averageScore = Math.floor(totalScore / scores.length);
console.log(`Average Score is ${averageScore}`);
