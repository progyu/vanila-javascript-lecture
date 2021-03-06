## Data type

##### 데이터 타입이란?

- 데이터 타입이란 **값의 종류**를 말합니다.

##### 데이터 타입이 필요한 이유

- 값을 저장할 때 확보해야 하는 메모리 공간의 크기를 결정하기 위해
- 값을 참조할 때 한번에 읽어 들여야 할 메모리 공간의 크기를 결정하기 위해
- 메모리에서 읽어들인 2진수를 어떻게 해석할 지를 결정하기 위해 

##### 데이터 타입의 분류

- 자바스크립트가 처리할 수 있는 데이터 타입은 **원시 타입**과 **객체 타입** 크게 두 가지로 나뉩니다.
- **원시 타입**은 원시 값을 다른 변수에 할당하면 원본의 **원시 값이 복사되어 전달**되기 때문에 **재할당 이외의 방법으로는 값을 변경할 수 없는 변경 불가능한 값**을 갖습니다. 이를 **값에 의한 전달(Pass by value)** 이라고도 합니다. 원시 타입의 속하는 값에는 Number, String, Boolean, undefined, null, Symbol(ES6)이 있습니다.
- **객체 타입(참조 타입)**은 변수에 **참조 값 즉, (생성된 객체가 저장된 메모리 공간의 주소)을 할당**하기 때문에 객체 안에 저장된 값은 변경 가능한 값입니다. 이를 **참조에 의한 전달**(Pass by reference) 이라고도 합니다.
- 자바스크립트의 숫자 타입은 정수만을 위한 타입이 없고 모든 수를 실수로 처리한다.
- 숫자 타입은 추가적으로 3가지 특별한 값들도 표현할 수 있다.
  - Infinity : 양의 무한대
  - -Infinity : 음의 무한대
  - NaN : 산술 연산 불가(not-a-number)
- 문자열은 작은 따옴표(‘’), 큰 따옴표(“”) 또는 백틱(``) 안에 텍스트를 넣어 생성한다.
-  백틱(backtick) 문자 `를 사용하는 템플릿 리터럴(Template literal)이라고 불리는 새로운 문자열 표기법
- undefined 타입은 선언 이후 명시적으로 값을 할당하지 않은 변수는 자바스크립트 엔진의 암묵적 초기화에 의해 undefined 값을 가진다
- 프로그래밍 언어에서 null은 변수에 값이 없다는 것을 의도적으로 명시(의도적 부재 Intentional absence)할 때 사용한다.





##  Literal

##### 리터럴이란?

- **소스 코드 안에서 직접 만들어 낸 고정된 값 자체**

- 자바스크립트 엔진에 의해 해석되어 값으로 평가된다.

- **사람이 이해할 수 있는 표기법으로 값의 생성을 자바스크립트 엔진에게 명령하는 것**

  ```javascript
  // 아래 예제의 경우, 사람이 이해할 수 있는 표기법인 아라비아 숫자 표기법으로 자바스크립트 엔진에게 숫자 값의 생성을 명령한 것이다.
  10
  ```

  

- **그 자체로 표현식**이며 **표현식의 일부로서 다른 값을 생성하는데 사용**되기도 한다.

  ```javascript
  // 리터럴 10과 리터럴 20은 표현식의 일부이다.
  10 + 20
  ```

  ```javascript
  var x = 100;
  // 100
  var x = 50 + 50;
  // 리터럴은 값으로 평가되어 메모리에 들어간다.
  ```

  

##### 리터럴 표기법

- 리터럴을 기술하는 방식
- **값을 생성하는 가장 기본적인 방법**

**객체 리터럴**

- **객체를  생성하는 가장 기본적인 방법** 

- ```javascript
  const person = {
      name: "이규하", // name 프로퍼티 이름 또는 키, "이규하" 프로퍼티 값
      // 프로퍼티들은 쉼표로 구분
      age: 29
  }
  ```

  



###  Expression(표현식)

##### 표현식이란?

- **표현식은 하나의 값으로 평가될 수 있는 문이다.**
- 표현식은 자바스크립트 엔진에 의해 평가(표현식을 해석하여 하나의 값을 만드는 과정)되어 하나의 값을 만든다.
- **문(statement)은 하나 이상의 표현식과 키워드의 조합으로 구성된 자바스크립트 엔진에게 내리는 명령**

- 표현식은 평가되어 결국 하나의 값이 되므로 **표현식과 표현식이 평가되어 생성된 값은 동등한 관계, 즉 동치**(Equivalent)다.

- 표현식 예제

  ```javascript
  // 리터럴 표현식
  10
  
  var sum = 100;
  // 식별자 표현식
  sum
  
  // 연산자 표현식
  10 + 20
  30
  
  function add(x, y) {
      return x + y;
  }
  // 함수 호출 표현식
  add(1, 2)
  3
  ```

  

- 표현식인 문 

  ```javascript
  // 할당문
  x = 100;
  
  // 표현식인 문은 값처럼 사용할 수 있다
  var foo = x = 100;
  console.log(foo); // 100
  ```

  



###  Primitive type vs. Object type

##### 원시 타입과 객체 타입의 차이점 세 가지

- 원시 타입의 값, 즉 원시 값은 변경 불가능한 값(immutable value)이다. 이에 비해 객체(참조) 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.
- 원시 값을 변수에 할당하면 변수에는 실제 값이 저장된다. 이에 비해 객체를 변수에 할당하면 변수에는 참조 값이 저장된다.
- 원시 값을 갖는 변수를 다른 변수에 할당하면 원본의 원시 값이 복사되어 전달된다. 이를 값에 의한 전달(Pass by value)라 한다. 이에 비해 객체를 가리키는 변수를 다른 변수에 할당하면 원본의 참조 값이 복사되어 전달된다. 이를 참조에 의한 전달(Pass by reference)라 한다.

- 변수에 새로운 원시 값을 재할당하면 변수는 재할당되기 이전의 값이 저장된 메모리 공간에 들어 있는 원시 값 자체를 수정하는 것이 아니라 **새로운 메모리 공간을 확보하고 재할당한 원시 값을 저장한다**. 다시 말해, **변수가 참조하던 메모리 공간의 주소가 바뀐다.**
- 만약 원시 값이 변경 가능한 값이라면 변수에 새로운 원시 값을 재할당했을 때 변수가 가리키던 메모리 공간의 주소를 바꿀 필요없이 원시 값 자체를 수정하면 그만이다.

- ![1559399607024](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1559399607024.png)
- 변수 score와 변수 copy의 값 80은 다른 메모리 공간에 저장된 별개의 값이다.
![1559399713966](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1559399713966.png)
- 이때 원본 person와 사본 copy는 같은 참조 값을 갖는다. 다시 말해, 원본 person와 사본 copy 모두 동일한 객체를 가리키고 있다. 이것은 두개의 식별자가 하나의 객체를 공유한다는 것을 의미한다. 
- ![1559399906332](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1559399906332.png)





###  Function Definition

##### 함수 정의란?

- 함수는 함수 정의를 통해 생성한다.

##### 함수를 정의하는 4가지 방법

- 함수 선언문

  - 리터럴 표기법과 형태가 동일하다.
  - 함수명을 생략할 수 없다.
  - 함수 선언문은 실행되어 함수 객체를 생성한다. 
  -  이때 생성된 함수 객체를 할당할 변수가 필요하다.
  - 자바스크립트 엔진은 **함수명과 동일한 이름의 식별자를 암묵적으로 선언하고 생성된 함수 객체를 할당**한다.
  - 함수는 함수명으로 호출하는 것이 아니라 **함수 객체를 가리키는 변수로 호출**한다. (함수명은 함수 몸체 내부에서만 유효(재귀))

```javascript
// 함수 선언문
function add(x, y) {
  return x + y;
}
```



- 함수 표현식

  - 자바스크립트의 함수는 일급 객체이기 때문에 값처럼 자유롭게 사용할 수 있다. 즉, 함수 리터럴로 생성한 함수 객체를 변수에 할당할 수 있다.
  - 함수 표현식의 함수 리터럴은 함수명을 생략하는 것이 일반적이다. 이러한 함수를 익명 함수라고 한다.

  ```javascript
  // 함수 표현식
  var add = function (x, y) {
    return x + y;
  };
  ```

- 함수 선언문과 함수 표현식의 차이

  - 생성 시점이 다르다.
  - 함수 선언문은 **다른 코드가 실행되기 이전**에 이미 **함수 객체가 생성**되고 함수명과 동일한 변수에 **할당까지 완료**된 상태다. => 함수 선언문 이전에 함수를 참조할 수 있으며 호출할 수도 있다. 선언, 초기화, 할당 단계까지 동시에 진행(함수 호이스팅)
  - 반면, 함수 표현식은 변수 할당문과 같이 동작. 런타임 이전에 **undefined로 초기화**되고 할당문이 **실행되는 시점. 즉 런타임에 평가되어 함수 객체**를 생성한다.(변수 호이스팅)

- Function 생성자 함수

  - new 연산자와 함께 호출
  - 생성자 함수 방식으로 생성한 함수는 렉시컬 스코프를 만들지 않고 전역 함수인 것처럼 스코프를  생성, 클로저도 생성하지 않는다. => 일반적이지 않으며 바람직하지 않다.

- 화살표 함수(ES6)

  - 화살표 함수는 항상 익명 함수로 정의한다.
  - 일반적으로 콜백함수로 사용한다.
  - 기존의 함수와 this 바인딩 방식이 다르다. 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다. 이를 Lexical this라 한다.
  - prototype 프로퍼티가 없으며 arguments 객체를 생성하지 않는다.
  - 화살표 함수는 call, applay, bind 메소드를 사용하여 this를 변경할 수 없다.





###  Scope

##### 스코프(유효범위)란?

- 변수는 자신이 **선언된 위치**에 의해 자신이 유효한 범위, 즉 **다른 코드가 변수 자신을 참조할 수 있는 범위**가 결정된다. 이 범위를 스코프라 한다.

- 자바스크립트 엔진이 참조할 식별자를 검색할 때 사용하는 규칙

- ![1559406990834](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1559406990834.png)

- ```javascript
  // 전역 함수
  function foo() {
    console.log('global function foo');
  }
  
  function bar() {
    // 중첩 함수
    function foo() {
      console.log('local function foo');
    }
  
    foo(); // ①
  }
  
  bar();
  ```

- 스코프의 종류

  - 전역 : 어디서든지 참조 가능
  - 지역 : var 키워드(함수 몸체 내부) , let, const(블록 내부), **자신의 지역 스코프와 하위 지역 스코프에서 유효**

- 스코프 체인 

  - 스코프는 함수의 중첩에 의해 계층적 구조를 갖는다.
  - 최상위 스코프는 전역 스코프이다.
  - **변수를 참조할 때**, 자바스크립트 엔진은 **스코프 체인**을 통해 **변수를 참조하는 코드의 스코프**에서 시작하여 **상위 스코프 방향**으로 이동하며 선언된 변수를 참조한다.

  ##### 함수 레벨 스코프와 블록 레벨 스코프

  - var 키워드는 코드 블록이 아닌 함수에 의해서만 지역 스코프가 생성된다.
  - ES6에서 도입된 let, const 키워드는 블록 레벨 스코프를 지원한다.





###  Lexical Scope

##### 렉시컬 스코프(정적 스코프)란?

- 함수의 **상위 스코프를 결정하는 방식**은 크게 두 가지가 있다.
  - 함수를 어디서 호출했는지에 따라 함수의 상위 스코프를 결정한다.
  - **함수를 어디서 정의**했는지에 따라 함수의 상위 스코프를 결정한다.
- 첫번째 방식은 함수가 호출되는 시점에 동적으로 스코프를 결정해야 하기 때문에 동적 스코프라 한다.
- 두번째 방식은 상위 스코프가 동적으로 변하지 않고 **함수 정의가 평가되는 시점**에 **상위 스코프가 정적으로 결정**되기 때문에 정적 스코프 또는 렉시컬 스코프라고 부른다. 자바스크립트를 비롯한 대부분의 프로그래밍 언어는 렉시컬 스코프를 따른다.

```javascript
var x = 1;

function foo() {
  var x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo(); // ?
bar(); // ?
```





###  전역 변수의 문제점

##### 전역 변수의 문제점 4가지

- **암묵적 결합**
  - 모든 코드가 전역 변수를 참조하고 변경할 수 있기 때문에 코드의 가독성이 나빠지고 의도치 않게 상태가 변경될 수 있는 위험성도 높아진다.
- 긴 생명 주기
  - 전연 변수의 상태를 변경할 수 있는 시간이 길다.
  - 메모리 리소스를 오랜 기간 소비한다.
- 스코프 체인 상에서 종점에 존재
  - 변수를 검색할 때 전역 변수가 가장 마지막에 검색되기 때문에 검색 속도가 가장 느리다.
- **네임 스페이스 오염**
  - 파일이 분리되어 있다하여도 하나의 전역 스코프를 공유한다.
  - 다른 파일 내에서 동일한 이름으로 명명된 변수나 함수가 같은 스코프 내에 존재할 경우 예상치 못한 결과를 가져올 수 있다.





###  var 키워드로 선언한 변수의 문제점

**var 키워드로 선언한 변수의 문제점 3가지**

- **같은 스코프 내에서 중복 선언이 허용된다.**
  - 나중에 작성된 변수 선언문은 마치 var키워드가 없는 것처럼 동작한다.
  - 의도치 않게  먼전 선언된 변수 값이 변경되는 부작용이 발생
- 블록 레벨 스코프를 지원하지 않는다. (함수 레벨 스코프)
  - 제어문(if문, for문)과 같은 블록 레벨에서 선언한 변수는 전역 변수가 된다.
  - 전역 변수를 남발할 가능성이 높다.
  - for문에서 반복을 위해 사용된 변수 i는 for문 외부에서 사용할 일이 없지만  var 키워드로 선언하면 전역 변수가 된다. 이는 예상치 못한 결과를 가져올 수 있다.
- 변수 호이스팅
  - 변수 선언문이 스코프의 선두로 끌어 올려진 것처럼 동작한다.
  - 변수 선언문 이전에 참조할 수 있다. 이는 프로그램의 흐름 상 맞지 않을 뿐더러 가독성을 떨어뜨리고 오류를 발생시킬 여지를 남긴다.



###  Constructor Function(생성자 함수)

**생성자 함수란?**

- new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수
- 자바스크립트는 Object 생성자 함수 이외에도 String, Number, Boolean, Function, Array, Date, RegExp 등의 빌트인(intrinsic 내장) 생성자 함수를 제공한다.
- 생성자 함수는 다른 함수와 구별하기 위해 함수명의 맨 앞 글자를 대문자로 사용한다.
- 생성자 함수는 어떤 특별한 형식이 정해져 있는 것이 아니라 일반 함수와 동일한 방법으로 정의하고 **new연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작한다.**

##### 생성자 함수에 의한 객체 생성 방식의 장점

- 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한템플릿(클래스)처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.

##### 내부메소드

- 내부메소드 **constructor가 있는 함수는 생성자 함수로서 호출할 수 있는 객체를 의미**한다.
- new 연산자(또는 super 연산자)와 함께 생성자 함수로서 호출되면 내부 메소드 [[Constructor]]가 호출된다
- **모든 함수 객체를 생성자 함수로서 호출할 수 있는 것은 아니다.**
  - 화살표 함수,  ES6의 메소드 축약 표현으로 정의된 함수는 생성자 함수로 호출할 수 없다.

##### 생성자 함수의 동작 방식

- 생성자 함수의 **역할**은 프로퍼티 구조가 동일한 인스턴스를 생성하기 위한 템플릿(클래스)으로서 동작하여 **인스턴스를 생성** 하는 것과 **생성된 인스턴스의 프로퍼티 값을 초기화**하는 것이다.

```javascript
function Circle(radius) {
  // 1. 암묵적으로 빈 객체가 생성되고 this에 바인딩된다.

  // 2. 생성된 빈 객체를 가리키는 this를 사용하여 프로퍼티나 메소드를 추가하고 초기화한다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };

  // 3. 암묵적으로 this를 반환한다.
}

// 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
const circle = new Circle(1);
console.log(circle); // Circle {radius: 1, getDiameter: ƒ}
```



-  생성자 함수 내부에서 명시적으로 this가 아닌 다른 값을 반환하는 것은 생성자 함수의 기본 동작을 훼손한다. 따라서 **생성자 함수 내부에서 return 문을 반드시 생략해야 한다.**





###  this

##### this란?

- this는 객체 자신의 프로퍼티나 메소드를 참조하기 위한 **자기 참조 변수**이다.

- this가 가리키는 객체는 **함수 호출 방식**에 따라 **동적으로 결정**된다.

  | 함수 호출 방식       | this가 가리키는 객체                  |
  | -------------------- | ------------------------------------- |
  | 일반 함수로서 호출   | 전역 객체                             |
  | 메소드로서 호출      | 메소드를 호출한 객체                  |
  | 생성자 함수로서 호출 | 생성자 함수가(미래에) 생성할 인스턴스 |

- 화살표 함수의 this는 언제나 상위 스코프의 this를 가리킨다. 

- 이벤트 처리기 안에 있는 this는 이벤트가 발생한 요소 객체를 가리킨다.

- Function.prototype.apply/call/bind 메소드에 의한 간접 호출 => 메소드에 인자로 전달한 객체를 가리킨다.

- 바인딩이란 식별자와 값을 연결하는 과정을 의미한다. 예를 들어 변수는 할당에 의해 값이 바인딩된다.





###  DOM(Document Object Model)

##### DOM이란?

- 브라우저의 렌더링 엔진은  웹 문서를 로드한 후, 파싱하여 **웹 문서를 브라우저가 이해할 수 있는 구조로 구성하여 메모리에 적재**하는데 이를 DOM이라 한다.
- 모든 요소와 요소의 어트리뷰트, 텍스트를 **각각의 객체**로 만들고 이들 객체를 **부자 관계**를 표현할 수 있는 **트리 구조로 구성**한 것이 DOM이다.
- **DOM은 자바스크립트를 통해 동적으로 변경**할 수 있으며 변경된 DOM은 렌더링에 반영된다.
- 동적 변경을 위해 DOM은 프로그래밍 언어가 자신에게 접근하고 수정할 수 있는 방법을 제공하는데 일반적으로 프로퍼티와 메소드를 갖는 자바스크립트 객체로 제공된다. 이를 DOM API라고 부른다.
- DOM은 ECMAScript에서 정의한 표준이 아닌 별개의 W3C의 공식 표준이다.
- **DOM에서 모든 요소, 어트리뷰트, 텍스트는 하나의 객체이며 Document 객체의 자식이다**

##### DOM의 두 가지 기능

- **HTML 문서에 대한 모델 구성**

  - 브라우저는 HTML 문서를 로드한 후 해당 문서에 대한 모델을 메모리에 생성한다. 이때 모델은 객체의 트리로 구성되는데 이것을 **DOM tree**라 한다.

- **HTML 문서 내의 각 요소에 접근 / 수정**

  - DOM은 모델 내의 각 객체에 접근하고 수정할 수 있는 프로퍼티와 메소드를 제공한다. DOM이 수정되면 브라우저를 통해 사용자가 보게 될 내용 또한 변경된다.

- ##### DOM tree의 네 종류 노드

  - 문서 노드
    - 트리의 최상위에 존재
    - DOM tree에 접근하기 위한 시작점
  - 요소 노드
    -  **HTML 요소를 표현**(div, h1, ul 등)
    - **중첩에 의해 부자 관계를 가진다.**
    - 어트리뷰트, 텍스트 노드에 접근하려면 먼저 요소 노드를 찾아 접근해야 한다.
    -  HTMLElement 객체를 상속한 객체로 구성된다
  - 어트리뷰트 노드
    - HTML 요소의 어트리뷰트를 표현
    - 해당 어트리뷰트가 지정된 **요소의 자식이 아니라** 해당 요소의 일부로 표현
  - 텍스트 노드
    - HTML 요소의 텍스트를 표현
    - **요소 노드의 자식**이며 자신의 자식 노드를 가질 수 없다. 즉, 텍스트 노드는 DOM tree의 최종단이다.



###  브라우저 동작

- 브라우저는 **동기(Synchronous)적**으로 HTML, CSS, 자바스크립트를 처리한다. 이것은 **script 태그의 위치**에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다는 것을 의미한다. 따라서 **script 태그의 위치는 중요한 의미를 갖는다.**
- body 요소의 가장 아래에 script 태그를 위치시키면 **이미 HTML 파서가 HTML 요소를 모두 파싱하여 DOM 객체를 생성**하였기 때문에 자바스크립트가 **DOM 조작 시 에러가 발생하지 않는다.** 또한, HTML 요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 **페이지 로딩 시간이 단축**된다.

![1559413676016](C:\Users\gyuha\AppData\Roaming\Typora\typora-user-images\1559413676016.png)

##### 웹 브라우저의 동작 순서

1. 클라이언트가 서버에게 **Request(요청)**을 보낸다.
2. 서버가 **Response(응답)**을 보낸다.
3. 클라이언트가 서버의 응답을 받아서 HTML, CSS, JavaScript, 이미지 등의 파일을 **Load**한다.
4. 렌더링 엔진의 HTML 파서와 CSS 파서가 HTML, CSS 파일을 **파싱(Parsing)**한다.
   - 자바스크립트는 렌더링 엔진이 아닌 **자바스크립트 엔진**이 처리한다.
   - HTML 파서는 **script 태그**를 만나면 자바스크립트 코드를 실행하기 위해 **DOM 생성 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘긴다.**
   - 자바스크립트의 실행이 완료되면 다시 HTML 파서로 제어 권한을 넘겨서 **브라우저가 중지했던 시점**부터 DOM 생성을 재개한다.
5. 파싱된 결과를 바탕으로 HTML은 **DOM tree**, CSS는 **CSSOM tree**, JavaScript는 **syntax tree**로 변환한다.
6. 자바스크립트가 DOM tree와 CSSOM tree를 제어한다.
7. DOM tree와 CSSOM tree가 **렌더 트리로 결합**된다.
8. 생성된 렌더 트리를 기반으로 브라우저는 웹 페이지를 표시한다.





###  Event Delegation(이벤트 위임)

##### 이벤트 위임이란?

- 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 **하나의 부모 요소에 이벤트 핸들러를 바인딩하는 방법**

- 이벤트가 [이벤트 흐름](https://poiemaweb.com/js-event#7-event-flow-이벤트의-흐름)에 의해 **이벤트를 발생시킨 요소의 부모 요소에도 영향****(버블링)**을 미치기 때문에 가능한 것

##### 이벤트 위임이 효과적인 경우

- 모든 li 요소가 클릭 이벤트에 반응하는 처리를 구현하고 싶은 경우 => 부모요소인 ul요소에 클릭 이벤트 핸들러를 바인딩하는 것이 효율적이다.

-  **동적으로 li 요소가 추가되는 경우, 아직 추가되지 않은 요소는 DOM에 존재하지 않으므로 이벤트 핸들러를 바인딩할 수 없다.**

  



###  Event Capturing vs. Event Bubbling

#### Capturing

- 이벤트가 window 객체에서 출발해서 DOM 트리를 타고 이벤트 타깃까지 전파되는 것.
- 이벤트 타깃이 이벤트를 수신하기 전에 이벤트를 빼돌리는 단계라는 뜻에서 캡처링 단계라는 이름이 붙음

#### Bubbling

- 이벤트가 이벤트 타깃에서 출발해서 DOM 트리를 타고 window 객체까지 전파되는 것.
- 이벤트가 마치 거품이 올라오는 것처럼 DOM트리 아래에서부터 위로 올라온다는 뜻에서 버블링 단계라는 이름이 붙음



## Class
대부분의 객체 지향 언어가 클래스 기반인 점을 고려하여 ES6에서 클래스를 도입했다. 그러나 그 **클래스도 사실은 함수**이고 기존의 프로토타입 기반 객체지향 패턴으로 동작한다.
클래스는 상속을 빼놓고 말할 수 없다. 상속이란 객체지향의 핵심적인 기능으로, 클래스는 상속을 지원한다.
클래스의 기본적인 문법은 아래와 같다.

```javascript
class Student {
    // constructor
    constructor(name) {
        this._name = name;
    }
    // default method definition: class's prototype method
    sayHello() {
        console.log(`Hi! ${this._name}`);
    }
}
const mimi = new Student('Mimi');
mimi.sayHello(); // Hi! Mimi
```
클래스 정의 내부에는 최대 한 개의 constructor가 필요하며 constructor를 생략할 경우에 default constructor() {}가 실행되어 인스턴스 생성시 빈 객체가 생성된다. constructor는 인스턴스를 생성하고 클래스 필드를 초기화하는 특수한 메소드이다.
#### Class Field
클래스 내부에는 메소드만 선언한다. 모든 프로퍼티(인스턴스의 멤버 변수)는 constructor 내부에 선언한다. contstructor는 생성자 함수와 같이 this로 빈 객체를 생성해서 프로퍼티를 추가하고 this를 리턴한다.
#### Class Hoisting
Class는 `let`이나 `const`와 같이 **호이스팅 되지 않는 것처럼** 동작한다. 선언 이전에 참조하면 ReferenceError가 발생한다.
> #### 호이스팅되지 않는 것처럼 동작한다는 것
>
> `var` 키워드와 다르게 `let`, `const` 키워드는 런타임 이전에 자바스크립트 엔진이 선언문을 미리 실행할 때, 1. 선언 단계(Declaration Phase)와 2. 초기화 단계(Initialization Phase)가 함께 진행되지 않는다. 
>
> `let`, `const` 키워드로 선언한 변수는 1. 선언 단계만 미리 실행되어 스코프에 변수 명이 등록되지만 2. 초기화 단계는 런타임에 **선언문이 실행될 때** 실행된다. 2. 초기화 단계는 변수의 값을 위한 메모리 공간을 할당하고 undefined라는 값을 암묵적으로 넣어주는 것이다. 이런 초기화 단계를 진행하지 않았으니 참조 에러가 나는 것이다. 
>
> ES6의  class도 사실은 함수이지만, function 키워드로 선언한 함수 선언식은 호이스팅 되는 반면 class로 선언한 함수는 호이스팅 되지 않는다. 즉, 선언만 해놓고 초기화를 하지 않아 호이스팅되지 않는 것처럼 동작한다.
>
> `let`이나 `const` 나 class 등의 선언문 이전을 TDZ(Temporal Dead Zone)이라고 한다. 선언만 되고 초기화되지 않아 참조할 수 없는 구간을 말한다.




## super
#### 1. `extends` Keyword
`extends` 키워드는 parent 클래스를 생속받는 child 클래스를 정의할 때 사용한다.

#### 2. `super` Keyword
`super` 키워드는 **parent 클래스를 참조**하거나  **parent 클래스의 constructor를 호출**할 때 사용한다.

1. super 클래스가 **메소드로 사용될 때**는 parent 클래스의 constructor를 호출한다. **child 클래스의 constructor에서 super()를 호출하지 않으면 this에 대한 ReferenceError가 발생한다.**
   child 클래스의 인스턴스를 만들 때 parent 클래스의 인스턴스를 우선 만들고 상속한다. 

   ```javascript
   // parent 클래스의 constructor를 호출한다.
   class Cylinder extends Circle {
     constructor(radius, height) {
       // super가 parent class의 constructor처럼 사용됨
       super(radius);
       this.height = height;
     }
   ```
   ![super](https://user-images.githubusercontent.com/48080762/58225537-6c111480-7d5d-11e9-9cbb-45fc8d66a2ff.png)
   **ECMAScript의 스펙**을 살펴보면 **super가 argument를 전달받으며 호출**될 때

   1. 내부적으로 자신의 **parent 클래스의 constructor를 호출**하고
   2. **parnet 클래스의 constructor가 리턴한 this 객체**를 child 클래스 constructor의 this(child 클래스가 생성할 인스턴스)에 **바인딩**한다.
2. super 클래스가 **객체로 사용될 때**는 **parent 클래스를 참조**한다.
   ```javascript
   // super가 parent class Circle처럼 사용됨
   
   // parent class Circle의 getArea overriding
     getArea() {
       return (this.height * super.getPerimeter()) + (2 * super.getArea());
     }
   
     // 자신의 메소드 정의
     getVolume() {
       return super.getArea() * this.height;
     }
   }
   ```

## Prototype
**상속 (inheritance)** : **객체지향 프로그래밍의 핵심 개념**으로 부모 객체의 프로퍼티를 자식 개체가 상속받아 그대로 사용할 수 있는 것을 말한다.
**자바스크립트의 상속은 프로토타입**(prototype)을 기반으로 구현된다.
상속을 사용해야 하는 이유는,

1. 동일한 프로퍼티 구조를 갖는 객체를 여러개 만들 때 모든 인스턴스가 동일한 메소드를 중복 소유하는 것은 **메모리적 관점에서 비효율적**이기 때문이다. 상속을 사용하면 하나의 프로토타입을 생성해 모든 인스턴스가 공유할 수 있다.
2. 인스턴스를 생성할 때마다 메소드를 생성하므로 **퍼포먼스적으로 비효율적**이다. 상속은 코드의 재사용이란 관점에서 유용하다. 공**통적으로 사용할 프로퍼티나 메소드를 프로토타입에 미리 구현**해놓으면 생성되는 인스턴스는 메소드 생성 없이 미리 구현된 프로토타입의 프로퍼티를 사용할 수 있다.
#### \__proto__ & prototype property
모든 객체는 `[[Prototype]]` 내부슬롯에 자신의 프로토타입을 가지고, 접근하기 위해서 __ proto __ **접근자 프로퍼티를 사용**한다. 
함수 객체는 __ proto __ 접근자 프로퍼티 외에 prorotype 프로퍼티도 소유하는데, 이 둘을 헷갈리면 안된다.
\__proto__는 **모든 객체가 가지는 자신의 프로토타입 접근자 프로퍼티**이고, prototype 프로퍼티는 함수 객체가 자신이 생성할 인스턴스에 할당하는 프로토타입이다.

|   구분    |                    prototype 프로퍼티                    |        \__proto__ 접근자 프로퍼티        |
| :-------: | :------------------------------------------------------: | :--------------------------------------: |
|   소유    |                        함수 객체                         |                모든 객체                 |
|    값     |                   프로토타입의 참조값                    |           프로토타입의 참조값            |
| 사용 주체 |                       생성자 함수                        |                모든 객체                 |
| 사용 목적 | **자신이 생성할 객체의 프로토타입을 할당하기 위해 사용** | 자신의 프로토타입에 접근하기 위해서 사용 |
프로토타입은 생성자 함수가 생성되는 시점에 함께 생성된다.
#### Prototype Chain
![Prototype Chain](https://user-images.githubusercontent.com/48080762/57827738-7f633380-77e3-11e9-92b8-ccf1ba0c77ab.png)
자바스크립트 엔진은 객체의 프로퍼티에 접근하려고 할 때 해당 객체에서 우선 프로퍼티를 검색하고, 없으면 \__proto__ 접근자 프로퍼티가 가리키는 프로토타입 객체의 프로퍼티를 순차적으로 검색한다. 
이렇게 연결된 프로토타입들을 프로토타입 체인이라고 한다. **프로토타입 체인은 자바스크립트가 객체 지향 프로그래밍의 상속을 구현하는 메커니즘**이다.
프로토타입 체인의 최상위에 위치하는 객체는 언제나 Object.prototype이다. Object.prototype을 프로토 타입 체인의 종점(End ofprototype chain)이라고 한다. 
프로퍼티 체인의 끝까지 올라가 검색했는데도 프로퍼티를 찾지 못 할 경우 에러가 아니라 `undefined`를 리턴한다.
**식별자의 검색은 함수의 중첩 관계로 이루어진 스코프의 계층적인 구조에서 이루어지고, 프로퍼티의 검색은 객체 간의 상속 관계로 이루어진 프로토타입의 계층적인 구조**에서 이루어진다.

## Promise
자바스크립트는 비동기 처리를 위해서 **callback 함수 패턴**을 사용한다. 그러나 callback 패턴은 가독성이 나쁘고 **에러의 예외 처리가 곤란**하다. ES6에서 **Asynchronous processing을 위한 패턴으로 Promise**를 도입했다. 
Promise는 비동기 처리를 하고 Response가 오면 해야할 일을 약속하는 것이다.

#### 콜백 패턴의 단점
1. **콜백 헬**
   콜백 패턴을 사용할 때 **처리 순서**를 보장하기 위해서 여러 개의 **콜백 함수가 중첩되어 프로그래밍의 복잡도**가 높아진다. 그래서 콜백 헬이 발생한다.
2. **에러 처리의 한계**
   Exception(예외)는 **Caller 방향으로 전파**되는데, **콜백 함수의 경우 Caller를 찾을 수 없으므로 try catch로 에러를 캐치할 수 없다.**
   이러한 콜백의 단점을 보완하기 위해서 ES6에서 Promise를 도입했다.
#### Promise 생성
```javascript
const promise = new Promise((resolve, reject) => {
    // Asynchronous process
    if (/* Asynchronous process Fulilled */) {
        resolve('result');
    } else {
        /* Asynchronous process Rejected */
        reject('failure reason');
    }
});
```
Promise constructor function은 **비동기 작업을 수행할 callback 함**수를 argument로 전달받는다. 이 callback 함수는 r**esolve, reject 함수를 argument**로 전달받는다.
resolve 함수는 argument로 **실행 결과를 전달**하며 호출, reject 함수는 argument로 **에러 메시지**를 전달하며 호출한다.

#### Promise 후속 처리
비동기 함수는 **Promise 객체를 리턴**해야 한다. 그러면 **Promise 객체의 메소드인 then과 catch를 사용해서 후속 처리**를 한다.
> #### then
>
> then 메소드는 두 개의 콜백 함수를 argument로 전달받는다. **첫 번째 callback 함수는 성공**(fulfilled, resolve 함수가 호출된 상태) 시 호출되고 **두 번째 callback은 실패**(rejected, reject 함수가 호출된 상태) 시 호출된다.
>
> ```javascript
> p.then(onFulfilled, onRejected);
> p.then(function(value) {
> // fulfilled
> }, function(reason) {
> // rejected
> });
> ```
>
> `onFulfilled`
>
>  Promise가 성공했을 때 호출되는 function. **Fulfillment value** (수행 결과)  (Promise의  resolve argument에 넘겨준 response) 하나를 argument로 받는다. Promise를 리턴한다.
>
> `onRejected`
>
>  Promise가 거부되었을 때 호출되는 function. **Rejected reason** (에러 이유) (Promise의  regect argument에 넘겨준 error mesagge) 하나를 argument로 받는다. Promise를 리턴한다.
> #### catch
>
> **예외(비동기 처리에서 발생한 에러와 then 메소드에서 발생한 에러)가 발생하면 호출**된다.
>
> ```javascript
> p.catch(onRejected);
> 
> p.catch(function(reason) {
> // rejected
> });
> ```
>
> `onRejected`
>
>  Promise가 거부되었을 때 호출되는 function. Rejected reason을 argument로 받는다.
> **then과 catch 메소드도 Promise 객체를 리턴**하므로 Promise Chaining이 가능하다. 콜백을 중첩시키지 않고서도 처리 순서를 지킬 수 있다.
## 동기식 처리 모델 vs. 비동기식 처리 모델
동기식 처리 모델(Synchronous Processing Model)은 **Blocking model**이라고도 불리며, 어떤 작업 도중에 클라이언트가 서버에 데이터를 요청하는 것과 같이 **시간이 오래 걸리는 일이 발생하면 다른 작업을 Blocking** 시켜놓고 해**당 작업이 끝날 때까지 기다리는 것과 같이 동작**한다.
반면 비동기식 처리 모델(Asynchronous Processing Model)은 작업 도중 서버로의 요청 등 시간이 오래 걸리는 일이 발생하면 **기다리지 않고** (**non-blocking**) 바로                                                       다음 작업을 실행한다.
자바스크립트의 대부분의 **DOM 이벤트**와 **Timer 함수**(setTimeout, setInterval), Ajax 요청은 **비동기식 처리 모델로 동작**한다.
![event-loop](https://poiemaweb.com/img/event-loop.gif)

