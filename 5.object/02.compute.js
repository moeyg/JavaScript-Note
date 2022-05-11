const obj = {
  name: 'Kim',
  age: 20,
};

// 코딩하는 시점에 정적으로 접근이 확정된 경우 -> 마침표 표기법 사용!
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶은 경우 -> 대괄호 표기법 사용!
function getValue(obj, key) {
  return obj[key]; // 대괄호 표기법을 사용해 동적으로 오브젝트의 key: value에 접근할 수 있다.
}
console.log(getValue(obj, 'name')); // Kim

// 오브젝트에 동적으로 새로운 key: value 할당
function addKey(obj, key, value) {
  return (obj[key] = value);
}
addKey(obj, 'job', 'engineer');
console.log(obj); // { name: 'Kim', age: 20, job: 'engineer' }
console.log(obj.job); // engineer

// 오브젝트에 동적으로 key: value 삭제
function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, 'job');
console.log(obj); // { name: 'Kim', age: 20 }
