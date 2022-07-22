const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  // 프로그램 제목 검색
  const showTitle = form.elements.query.value;
  // 쿼리 설정
  const config = { params: { q: showTitle } };

  // 프로그램 제목 api 받기
  const responseTitle = await axios.get(
    'https://api.tvmaze.com/search/shows',
    config
  );
  // 프로그램 이미지 검색
  showImage(responseTitle.data);

  form.reset();
});

const showImage = (titles) => {
  for (let title of titles) {
    if (title.show.image) {
      const showImage = document.createElement('IMG');
      showImage.src = title.show.image.medium;
      document.body.append(showImage);
    }
  }
};
