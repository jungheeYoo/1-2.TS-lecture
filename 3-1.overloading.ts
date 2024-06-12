// ✅ call signatures를 좀 더 길게 작성하는 법 - 오버로딩 때문
// ✅ 오버로딩 :
// 함수가 서로 다른 여러개의 call signatures를 갖고 있을 때 발생
/* 
함수 오버로딩은 함수가 서로 다른 인수 유형 또는 개수에 따라 다르게 동작해야 할 때 특히 유용
이를 통해 동일한 이름을 가진 다중 함수를 만들 수 있으며, 
코드를 보다 유연하고 표현력 있게 만들어 줌

함수 오버로딩을 사용하면 동일한 호출 서명(call signature)을 가진 여러 함수를 정의할 수 있습니다. 
이것은 함수의 이름이 같지만 매개변수의 타입 또는 개수가 다른 경우에 특히 유용합니다. 
프로그래밍 언어가 함수 호출을 구별하기 위해 매개변수의 타입과 개수를 고려하기 때문에, 
서로 다른 매개변수를 가진 여러 함수를 정의함으로써 동일한 이름으로 여러 기능을 수행할 수 있습니다. 
이것은 코드를 더욱 명확하고 읽기 쉽게 만들어줍니다.
*/
// type Add = (a: number, b: number) => number;
type Add = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add: Add = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

/////////////////////////////////////////////////////
// 나중에 보게 될 아주 좋은 예시
// 패키지나 라이브러리를 디자인할 때 많은 사람들이 사용
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (Config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === 'string') {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

/////////////////////////////////////////////////////
// ✅ 파라미터의 개수가 다를 때 일어나는 경우
// 🤔 자주 보게 되는 것은 아님
// 마지막 추가 파라미터는 선택사항, 옵션이다
type Add1 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add1: Add1 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add1(1, 2);
add1(1, 2, 3);
