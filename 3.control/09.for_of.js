// for .. of : 배열에서 반복문 사용

let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];

// for loop
for (let i = 0; i < months.length; i++) {
  console.log(`for loop : ${months[i]}`);
}

// for .. of loop
for (let month of months) {
  console.log(`for .. of loop : ${month}`);
}

years = [
  ['2015', '2016', '2017'],
  ['2018', '2019', '2020'],
  ['2021', '2022', '2023'],
];

// for loop
for (let i = 0; i < years.length; i++) {
  const year = years[i];
  for (let j = 0; j < year.length; j++) {
    console.log(`for loop : ${year[j]}`);
  }
}

// for .. of
for (row of years) {
  for (year of row) {
    console.log(`for .. of loop : ${year}`);
  }
}
