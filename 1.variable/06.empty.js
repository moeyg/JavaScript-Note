// null : 값을 할당하지 않겠다고 명시 -> 변수는 확실하게 비어있다고 표현하고 싶을 때 사용
// undefined : 메모리 상에 아무것도 들어있지 않은 상태 -> JS에서는 변수를 선언하면 undefined로 자동 초기화

let variableName;
console.log(variableName); // undefined

variableName = null;
console.log(variableName); // null

let activeItem; // 아직 활성화된 아이템이 있는지 없는지 모르는 상태
activeItem = null; // 활성화된 아이템이 없는 상태!로 표현

console.log(typeof null); // object
console.log(typeof undefined); // undefined
