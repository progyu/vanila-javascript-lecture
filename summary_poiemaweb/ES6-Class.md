# 클래스

자바스크립트는 **프로토타입 기반**(prototype-based) **객체지향 언어**다. 

프로토타입 기반 프로그래밍은 클래스가 필요없는(class-free) 객체지향 프로그래밍 스타일로 **프로토타입  체인**과 **클로저** 등으로 객체 지향 언어의 **상속, 캡슐화**(정보 은닉) 등의 개념을 구현할 수 있다.

ES5에서는 생성자 함수와 프로토타입, 클로저를 사용하여 객체 지향 프로그래밍을 구현하였다.

```javascript
// ES5
var Person = (function () {
  // Constructor
  function Person(name) {
    this._name = name;
  }

  // public method
  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  // return constructor
  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true
```

클래스도 함수이며 기존 프로토타입 기반 패턴의 문법적 설탕(Syntactic sugar)이라고 볼 수 있다.  다만, 클래스와 생성자 함수가 정확히 동일하게 동작하지는 않는다. 클래스가 보다 엄격하다.



## 클래스 정의 (Class Definition)

ES6 클래스는 class 키워드를 사용하여 정의한다.

```javascript
// 클래스 선언문
class Person {
  // constructor(생성자)
  constructor(name) {
    this._name = name;
  }

  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

// 인스턴스 생성
const me = new Person('Lee');
me.sayHi(); // Hi! Lee

console.log(me instanceof Person); // true
```



## 인스턴스 생성

마치 생성자 함수와 같이 new 연산자와 함께 클래스 이름을 호출하면 클래스의 인스턴스가 생성된다.

```javascript
class Foo {}

const foo = new Foo();
```

위 코드에서 **new 연산자와 함께 호출한 Foo는 클래스의 이름이 아니라 constructor**(생성자)이다. 표현식이 아닌 선언식으로 정의한 클래스의 이름은 constructor와 동일하다.

new  연산자를 사용하지 않고 constructor를 호출하면 타입 에러(TypeError)가 발생한다. constructor는 new 연산자 없이 호출할 수 없다.



## constructor

**constructor**는 **인스턴스를 생성**하고 **클래스 필드를 초기화**하기 위한 특수한 메소드이다.

- 클래스 필드(class field)
  - **클래스 내부의 캡슐화된 변수를 말한다.** 데이터 멤버 또는 멤버 변수라고 부른다. 클래스 필드는 인스턴스의 프로퍼티 또는 정적 프로퍼티가 될 수 있다. 쉽게 말해, 자바스크립트의 **생성자 함수에서 this에 추가한 프로퍼티를 클래스 기반 객체지향 언어에서는 클래스 필드**라고 부른다.

```javascript
// 클래스 선언문
class Person {
  // constructor(생성자). 이름을 바꿀 수 없다.
  constructor(name) {
    // this는 클래스가 생성할 인스턴스를 가리킨다.
    // _name은 클래스 필드이다.
    this._name = name;
  }
}

// 인스턴스 생성
const me = new Person('Lee');
console.log(me); // Person {_name: "Lee"}
```

constructor는 클래스 내에 한 개만 존재할 수 있다. 인스턴스를 생성할 때 new 연산자와 함께 호출한 것이 바로 constructor이다. constructor의 파라미터에 전달한 값은 클래스 필드에 할당한다.



## 클래스 필드

클래스 몸체에는 메소드만 선언할 수 있다. 클래스 바디에 클래스 필드(멤버 변수)를 선언하면 문법 에러(SyntaxError)가 발생한다.

클래스 필드의 선언과 초기화는 반드시 constructor 내부에서 실시한다.

**constructor** **내부에서 선언한 클래스 필드는 클래스가 생성할 인스턴스를 가리키는 this에 바인딩한다.**  이로써 클래스 필드는 클래스가 생성할 인스턴스의 프로퍼티가 되며, 클래스의 인스턴스를 통해 클래스 외부에서 언제나 참조할 수 있다. 즉, 언제나 `public`이다.



## getter, setter

getter와 setter는 클래스에서 새롭게 도입된 기능이 아니다. getter와 setter는 접근자 프로퍼티(accessor property)이다.



### 1. getter

getter는 클래스 필드에 접근할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다. getter는 메소드 이름 앞에 `get` 키워드를 사용해 정의한다. getter는 무언가를 취득할 때 사용하므로 반드시 무언가를 반환해야 한다.

```javascript
class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }

  // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
  get firstElem() {
    // getter는 반드시 무언가를 반환해야 한다.
    return this._arr.length ? this._arr[0] : null;
  }
}

const foo = new Foo([1, 2]);
// 필드 firstElem에 접근하면 getter가 호출된다.
console.log(foo.firstElem); // 1
```



### 2. setter

setter는 클래스 필드에 값을 할당할 때마다 클래스 필드의 값을 조작하는 행위가 필요할 때 사용한다. setter는 메소드 이름 앞에 `set` 키워드를 사용해 정의한다.

```javascript
class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }

  // getter: get 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
  get firstElem() {
    // getter는 반드시 무언가를 반환하여야 한다.
    return this._arr.length ? this._arr[0] : null;
  }

  // setter: set 키워드 뒤에 오는 메소드 이름 firstElem은 클래스 필드 이름처럼 사용된다.
  set firstElem(elem) {
    // ...this._arr은 this._arr를 개별 요소로 분리한다
    this._arr = [elem, ...this._arr];
  }
}

const foo = new Foo([1, 2]);

// 클래스 필드 lastElem에 값을 할당하면 setter가 호출된다.
foo.firstElem = 100;

console.log(foo.firstElem); // 100
```



## 정적 메소드

클래스의 정적(static) 메소드를 정의할 때 **static** 키워드를 사용한다. 정적 메소드는 **클래스의 인스턴스가 아닌 클래스 이름으로 호출**한다. 따라서 **클래스의 인스턴스를 생성하지 않아도 호출할 수 있다.**

```javascript
class Foo {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    /*
    정적 메소드는 this를 사용할 수 없다.
    정적 메소드 내부에서 this는 클래스의 인스턴스가 아닌 클래스 자신을 가리킨다.
    */
    return 'staticMethod';
  }

  prototypeMethod() {
    return this.prop;
  }
}

// 정적 메소드는 클래스 이름으로 호출한다.
console.log(Foo.staticMethod());

const foo = new Foo(123);
// 정적 메소드는 인스턴스로 호출할 수 없다.
console.log(foo.staticMethod()); // Uncaught TypeError: foo.staticMethod is not a function
```

일반 메소드 내부에서 this는 클래스의 인스턴스를 가리키며, 메소드 내부에서 this를 사용한다는 것은 클래스의 인스턴스의 생성을 전제로 하는 것이다.

정적 메소드는 Math 객체의 메소드처럼 애플리케이션 전역에서 사용할 유틸리티(utility) 함수를 생성할 때 주로 사용한다.

**정적 메소드인 staticMethod는 생성자 함수 Foo의 메소드(함수는 객체이므로 메소드를 가질 수 있다.)이고, 일반 메소드인 prototypeMethod는 프로토타입 객체 Foo.prototype의 메소드이다. 따라서 staticMethod는 foo에서 호출할 수 없다.**



## 클래스 상속

클래스 상속(Class Inheritance)은 코드 재사용 관점에서 매우 유용하다. 



### 1. extends 키워드

extends 키워드는 부모 클래스(base class)를 상속받는 자식 클래스(sub class)를 정의할 때 사용한다. 

```javascript
// 부모 클래스
class Circle {
  constructor(radius) {
    this.radius = radius; // 반지름
  }

  // 원의 지름
  getDiameter() {
    return 2 * this.radius;
  }

  // 원의 둘레
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  // 원의 넓이
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

// 자식 클래스
class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    return (this.height * super.getPerimeter()) + (2 * super.getArea());
  }

  // 원통의 부피
  getVolume() {
    return super.getArea() * this.height;
  }
}

// 반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);

// 원의 지름
console.log(cylinder.getDiameter());  // 4
// 원의 둘레
console.log(cylinder.getPerimeter()); // 12.566370614359172
// 원통의 넓이
console.log(cylinder.getArea());      // 150.79644737231007
// 원통의 부피
console.log(cylinder.getVolume());    // 125.66370614359172

// cylinder는 Cylinder 클래스의 인스턴스이다.
console.log(cylinder instanceof Cylinder); // true
// cylinder는 Circle 클래스의 인스턴스이다.
console.log(cylinder instanceof Circle);   // true
```

- 오버라이딩(Overriding)
  - 상위 클래스가 가지고 있는 메소드를 하위 클래스가 재정의하여 사용하는 방식



### 2. super 키워드

**super 키워드는 부모 클래스를 참조(Reference)할 때 또는 부모 클래스의 constructor를 호출할 때 사용한다.**

```javascript
// 부모 클래스
class Circle {
...
}

class Cylinder extends Circle {
  constructor(radius, height) {
    // ① super 메소드는 부모 클래스의 constructor를 호출하면서 인수를 전달한다.
    super(radius);
    this.height = height;
  }

  // 원통의 넓이: 부모 클래스의 getArea 메소드를 오버라이딩하였다.
  getArea() {
    // (원통의 높이 * 원의 둘레) + (2 * 원의 넓이)
    // ② super 키워드는 부모 클래스(Base Class)에 대한 참조
    return (this.height * super.getPerimeter()) + (2 * super.getArea());
  }

  // 원통의 부피
  getVolume() {
    // ② super 키워드는 부모 클래스(Base Class)에 대한 참조
    return super.getArea() * this.height;
  }
}

// 반지름이 2, 높이가 10인 원통
const cylinder = new Cylinder(2, 10);
```

1. **자식 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 참조 에러(ReferenceError)가 발생한다.**

2. super 키워드는 부모 클래스(Base Class)에 대한 참조이다. 부모 클래스의 필드 또는 메소드를 참조하기 위해 사용한다.



### 3. static 메소드와 prototype 메소드의 상속

```javascript
class Parent {}

class Child extends Parent {}

console.log(Child.__proto__ === Parent); // true
console.log(Child.prototype.__proto__ === Parent.prototype); // true

class Parent {
  static staticMethod() {
    return 'staticMethod';
  }
}

class Child extends Parent {}

console.log(Parent.staticMethod()); // 'staticMethod'
console.log(Child.staticMethod());  // 'staticMethod'
```

자식 클래스 Child의 프로토타입 객체는 부모 클래스 Parent이다. 

 Prototype chain에 의해 부모 클래스의 정적 메소드도 상속됨을 의미한다.