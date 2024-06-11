// // type과 interface는 타입스크립트에게 오브젝트의 구조를 알려주는
// // 같은 작업을 수행할 수 있지만
// // 둘 중 선호하게 만드는 기능이 있음

// // ✅ 복습 - 추상 클래스 (Abstract Class)
// // 추상 클래스는 이걸 상속 받는 다른 클래스가 가질
// // property와 메소드를 지정하도록 해줌
// // 다른 클래스가 가져야 할 property와 메소드를 명시할 수 있도록 도와줌
// // 추상 클래스의 인스턴스를 만들 수 없음

// abstract class User {
//   // 만약 private를 쓰면 firstName과 lastName을 Player가 접근할 수 없음 ❌
//   constructor(protected firstName: string, protected lastName: string) {}
//   // 두 개의 메소드
//   abstract sayHi(naem: string): string; // string으로 된 name을 받아서 string 반환
//   abstract fullName(): string; // 이건 그냥 string을 반환
// }
// // new User() // ❌

// // 클래스 Player 는 User 를 상속
// class Player extends User {
//   // string을 반환
//   fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
//   // sayHi는 string을 리턴해야되고 name을 받아야함
//   sayHi(naem: string) {
//     return `Hello ${name}. My name is ${this.fullName()}`;
//   }
// }

// // 🤓 그럼 왜 추상 클래스를 사용하느냐?
// // 상속받는 클래스가 어떻게 동작해야할 지 일러주기 위해서 사용
// // 클래스에게 어떻게 구현할 지에 대해서는 말해주지 않지만
// // 무엇을 구현해야할 지에 대해서는 알려줄 수 있다
// // 예를 들어 sayHi와, fullName이 있어야 한다는 것을 알려줌
// // 난 네가 무엇을 어떻게 하는지는 관심이 없지만, string을 반환하는 sayHi와
// // string을 반환하는 fullName을 만들어내기만 하면 된다고 하는 것

// // 😥 But, 추상 클래스의 문제점은, 자바스크립트에는 abstract의 개념이 없다
// // 추상 클래스를 만들면 결국 클래스로 변함. 일반적인 클래스로 바뀌어버림

// // 😮 그렇다면 왜 추상 클래스를 만드는가?
// // 다른 클래스들이 표준화 된 모양
// // 표준화 된 property와 메소드를 갖도록 해주는 청사진을 만들기 위해 추상클래스를 사용

/////////////////////////////////////////////////////
// ✅ interfaces
// 인터페이스는 가볍다. 컴파일하면 JS로 바뀌지 않고 사라짐
// 그럼 인터페이스를 쓸 때 클래스가 특정한 형태를 따르도록 어떻게 강제하는지?

// ----------------------------------------------
// 🔸 추상 클래스 => 인터페이스로 변경
// 인터페이스는 오브젝트나 클래스의 모양을 묘사하도록 해줌
interface User {
  // string인 firstName과 string인 lastName을 갖고
  firstName: string;
  lastName: string;
  // sayHi라는 함수와 fullName이라는 함수를 가짐
  sayHi(naem: string): string;
  fullName(): string;
}

// ----------------------------------------------
// 🔸 하나 이상의 인터페이스를 동시에 상속할 수 있음
interface Human {
  health: number;
}

// ----------------------------------------------
// extends를 없애고 자바스크립트에는 없는 사용하지 않는 implements로 바꿈
// extends를 쓰게 되면, 이건 자바스크립트로 바뀜
// (자바스크립트는 클래스 뒤에 extends를 붙이는 문법을 사용. 이를 통해 클래스를 상속 받을 수 있음)

// implements를 쓰면, 코드가 가벼워지고
// User 인터페이스를 추적할 수 없음. implements는 타입스크립트에만 존재.
// 이건 코드가 보여지지 않음.

// 타입스크립트가 Player는 User 인터페이스를 상속해야 한다고 알려줌
// Player가 나열 된 property들을 갖고 있지 않다고 알려줌
// property는 firstName, lastName, sayHi, fullName
// 이렇게 클래스가 원하는대로 행동, 원하는 property를 갖도록 강제함
// 이런 목적을 이루기 위해 추상 클래스를 사용했는데, 이건 자바스크립트에서 클래스로 바뀜
// 하지만 인터페이스를 사용하면 상속하는 방법이 더 간단해짐

// 💩 인터페이스를 상속할 때는 property를 private로 만들지 못함! ❌
// ✨ public이 되어야 함!
class Player implements User, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(naem: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// ----------------------------------------------
// ✨ 이렇게 인터페이스를 쓰고 변환 된 자바스크립트 코드를 보면
// 더이상 추상 클래스를 추가로 사용하지 않음. 자바스크립트 코드로 컴파일되지 않는다
// 추상 클래스를 사용할 때는 그 클래스들이 자바스크립트에서 보였음
// 파일 사이즈를 줄이고 싶다면 이렇게 쓴다.
// 이것이 인터페이스와 클래스의 가장 큰 차이.
// 인터페이스는 고유한 사용처가 있음. 클래스의 모양을 알려준다는 점에서 매우 유용
// 🤔 But,
// 인터페이스를 상속하는 것의 문제점 중 하나는 private property 들을 사용하지 못한다는 것

// 인터페이스는 클래스가 아니지만 클래스의 모양을 특정할 수 있게 해주는 간단한 방법
// 오브젝트의 모양을 결정지을 수도 있지만, 클래스의 모양을 특정짓기도 함
// 한 클래스에서 여러 개의 인터페이스를 상속할 수도 있음

// ----------------------------------------------
// ⭐ 인터페이스를 타입으로 지정할 수 있음
// makeUser 만들 때 이렇게 타입으로도 지정 가능
// 즉, 클래스를 타입으로 쓸 수 있고, 인터페이스도 타입으로 쓸 수 있음
// argument에 인터페이스를 씀으로써 ⬇
function makeUser(user: User) {
  return 'hi';
}

// 오브젝트의 모양을 지정해 줄 수도 있음 ⬅
// makeUser({})
makeUser({
  firstName: 'nico',
  lastName: 'las',
  fullName: () => 'xx', // fullName은 string을 반환하는 함수여야 하고
  sayHi: (name) => 'string', // sayHi는 name을 받고, string을 반환하는 함수여야 함
});

// 인터페이스 리턴 반환한다면, 타입을 리턴하는 것처럼
// new player() 처럼 new 다음에 클래스를 넣어줘야 하는 class 리턴과는 다름
// 만약 인터페이스를 리턴한다면, new User처럼 쓸 필요가 없음. 이건 그냥 타입에 불과함.
function makeUser(user: User): User {
  return {
    firstName: 'nico',
    lastName: 'las',
    fullName: () => 'xx',
    sayHi: (name) => 'string',
  };
}
