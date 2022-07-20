// 댓글 폼
const tweetForm = document.querySelector('#tweetForm');
// 댓글 리스트
const tweetsList = document.querySelector('#tweetsList');

tweetForm.addEventListener('submit', (e) => {
  // 폼이 제출될 때 페이지가 넘어가는 기본 동작 방지
  e.preventDefault();

  // username, tweet 내용
  const username = document.querySelector('#username').value;
  const tweet = document.querySelector('#tweet').value;

  // 댓글 추가
  addTweet(username, tweet);

  // 초기화
  tweetForm.reset();
});

// 댓글 추가 함수
const addTweet = (username, tweet) => {
  // username 부분만 bold
  const boldText = document.createElement('b');
  boldText.append(username);

  // 새로운 댓글 생성
  const newTweet = document.createElement('li');
  // username 추가
  newTweet.append(boldText);
  // tweet 추가
  newTweet.append(` - ${tweet}`);

  // 댓글 리스트에 추가
  tweetsList.append(newTweet);
};
