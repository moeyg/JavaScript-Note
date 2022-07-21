// Call Stack (콜 스택)

// 호출 스택은 여러 함수들(functions)을 호출하는 스크립트에서 해당 위치를 추적하는 인터프리터 (웹 브라우저의 자바스크립트 인터프리터같은)를 위한 메커니즘
// 현재 어떤 함수가 동작하고 있는 지, 그 함수 내에서 어떤 함수가 동작하는 지, 다음에 어떤 함수가 호출되어야하는 지 등을 제어한다.

// 스크립트가 함수를 호출하면 인터프리터는 이를 호출 스택에 추가한 다음 함수를 수행하기 시작한다.
// 해당 함수에 의해 호출되는 모든 함수는 호출 스택에 추가되고 호출이 도달하는 위치에서 실행한다.
// 메인 함수가 끝나면 인터프리터는 스택을 제거하고 메인 코드 목록에서 중단된 실행을 다시 시작한다.
// 스택이 할당된 공간보다 많은 공간을 차지하면 "stack overflow" 에러가 발생한다.

function multiply(x, y) {
  return x * y;
}

function square(x) {
  return multiply(x, x);
}

function isRightTriagnle(a, b, c) {
  return square(a) * square(b) === square(c);
}

isRightTriagnle(3, 4, 5);

// 1. isRightTriagnle(3, 4, 5)

// 2. square(3) 호출
// 3. multiply(3, 3) 호출
// 4. return 3 * 3 -> multiply : Call Stack 제거
// 5. return 9 -> square : Call Stack 제거
// 6. a = 9

// 7. square(4) 호출
// 8. multiply(4, 4) 호출
// 9. return 4 * 4 -> multiply : Call Stack 제거
// 10. return 16 -> square : Call Stack 제거
// 11. b = 16

// 12. square(5) 호출
// 13. multiply(5, 5) 호출
// 14. return 5 * 5 -> multiply : Call Stack 제거
// 15. return 25 -> square : Call Stack 제거
// 16. c = 25

// 17. a(9) + b(16) === c(25)
// 18. return true
