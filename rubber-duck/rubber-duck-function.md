# Morning rubber-duck(function)

- 일급 객체의 조건은 무엇인가?
  - 무명의 리터럴로 생성할 수 있다.  즉, 런타임에 생성이 가능하다.
  - 변수나 자료 구조(객체, 배열) 등에 저장할 수 있다.
  - 함수의 매개변수에게 전달할 수 있다.
  - 함수의 반환값으로 사용할 수 있다.
- 프로토타입 기반 상속의 이점은 무엇일까요?

  - 메소드의 중복을 제거하여 메모리 낭비를 막을 수 있다.
- 'constructor', 'prototype 객체', `__.proto__`에 대해 서로 설명해보세요.
  - `__proto__`인스턴스가 프로토타입에 접근하기 위한 접근자 프로퍼티
  - prototype :  생성자 함수에 접근하기 위한 프로퍼티
  - constructor : 컨스트럭터, 컨스트럭터는 생성자이다.
- 프로토타입 체인에 대해 설명해보세요



- this는 다음 상황에 어떻게 바인딩 되는지 토의해 보세요.

  - 함수의 호출 방식에 따라 this에 바인딩 되는 객체가 달라진다.
  - this
    - 일반 함수를 제외한 객체의 프로퍼티나 메소드를 참조하기 위한 **자기 참조 변수**이다.
  - 바인딩 
    - 변수는 할당에 의해 변수에 값이 바인딩 된다.
    - 식별자와 값을 연결하는 과정.

  1. 일반 함수 호출
     - this는 전역객체를 가리킨다. 브라우저 환경에서는 window를 가리킨다.
  2. 내부 함수 호출
     - this는 전역객체를 가리킨다
     - 전역객체를 가리키는 것은 옳지 않음
       - this를 다른 변수(that)에 담아서 그 변수를 사용
       - bind 메소드 사용
  3. method로 호출
     - 메소드를 호출한 객체를 가리킨다.
  4. 생성자 함수로 호출
     - 생성자 함수가 미래에 생성할 객체(인스턴스)를 가리킨다.
  5. 콜백함수 호출
     - this는 전역객체를 가리킨다
     - 전역객체를 가리키는 것은 옳지 않음
       - this를 다른 변수(that)에 담아서 그 변수를 사용
       - bind 메소드 사용
  6. Function.prototype.apply / call / bind에 의한 간접 호출
     - apply / call
     - bind





- 고차함수란 무엇이고 어떻게 활용되는지?

  - 함수를  argument(인수)로 전달 받거나 함수를 반환하거나 혹은 둘 다 하는 것.
  - 함수형 프로그래밍을 지향하기 위해 사용한다.(변수 사용 억제 , 가독성, 반복문 * 조건문 대체)

- Rest Parmeter(나머지 매개변수) ,Spread Operator(전개 연산자) 는 무엇이고 어떻게 활용하는지??

  -  ```javascript
    function foo(...rest) { // 인수로 전달 받은 값을 하나의 배열로 만들어준다.
      console.log(Array.isArray(rest)); // true
      console.log(rest); // [ 1, 2, 3, 4, 5 ]
    }
    // Rest 파라미터를 사용하면 인수의 리스트를 함수 내부에서 배열로 전달받을 수 있다.
    
    foo(1, 2, 3, 4, 5);
    ```

  - Rest 파라미터는 반드시 마지막 파라미터이어야 한다.

-  피연산자를 개별 요소로 분리한다. Spread 연산자의 피연산자는 [이터러블](https://poiemaweb.com/es6-iteration-for-of)이어야 한다.

  - ```javascript
    // ES6
    function foo(x, y, z) {
      console.log(x); // 1
      console.log(y); // 2
      console.log(z); // 3
    }
    
    // 배열을 foo 함수의 인자로 전달하려고 한다.
    const arr = [1, 2, 3];
    
    /* ...[1, 2, 3]는 [1, 2, 3]을 개별 요소로 분리한다(→ 1, 2, 3)
       spread 연산자에 의해 분리된 배열의 요소는 개별적인 인자로서 각각의 매개변수에 전달된다. */
    foo(...arr);
    
    // 이터러블 -> Array, String, Map, Set, TypedArray(Int8Array, Uint8Arrayㅊ, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array), DOM data structure(NodeList, HTMLCollection), Arguments
    
    console.log(...'hello'); // h e l l o
    ```

